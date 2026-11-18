/**
 * Reads the content files the editor saves (content/*.json) and checks them as it goes.
 *
 * The files are written by the content editor (Keystatic), which only lets valid values through. These checks are
 * the second line of defence: if a file is edited by hand, or an old file no longer fits the code, the build stops
 * with a message that names the file, the place inside it and the problem, instead of putting a broken page live.
 *
 *   const plans = file('content/pricing.json', raw).get('plans').items().map((plan) => ({ name: plan.get('name').text() }))
 *
 * `npm run check:data` loads every data module, so it runs these checks too.
 */
import { permissionStateOf } from './permission'

/** A content file is wrong. The message is plain English and says where. */
export class ContentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ContentError'
  }
}

export const LANGUAGES = ['km', 'zh', 'ko'] as const
export type TranslationLanguage = (typeof LANGUAGES)[number]

/** One value inside a content file, remembering where it came from so a problem can be reported precisely. */
export class Node {
  readonly file: string
  readonly path: string
  readonly value: unknown

  // Written out in full (no `readonly` parameter shortcuts): `npm run check:data` runs this file with Node's
  // type stripping, which only understands plain TypeScript types.
  constructor(file: string, path: string, value: unknown) {
    this.file = file
    this.path = path
    this.value = value
  }

  get where(): string {
    return this.path ? `${this.file} > ${this.path}` : this.file
  }

  fail(message: string): never {
    throw new ContentError(`${this.where}: ${message}`)
  }

  /** The value stored under `key` (missing is allowed: it reads as nothing). A missing group reads as an empty group. */
  get(key: string): Node {
    const at = this.path ? `${this.path}.${key}` : key
    if (this.value === undefined || this.value === null) return new Node(this.file, at, undefined)
    if (typeof this.value !== 'object' || Array.isArray(this.value)) this.fail('should be a group of fields')
    return new Node(this.file, at, (this.value as Record<string, unknown>)[key])
  }

  /** True when there is something stored here. */
  get present(): boolean {
    return this.value !== undefined && this.value !== null && this.value !== ''
  }

  /** Every item of a list. A missing list is an empty list. */
  items(): Node[] {
    if (this.value === undefined || this.value === null) return []
    if (!Array.isArray(this.value)) this.fail('should be a list')
    return (this.value as unknown[]).map((item, index) => new Node(this.file, `${this.path}[${index}]`, item))
  }

  /** Text that must be filled in. */
  text(): string {
    const value = this.optionalText()
    if (value === undefined) this.fail('is missing (it must be filled in)')
    return value as string
  }

  /** Text that may be left empty: empty reads as nothing. */
  optionalText(): string | undefined {
    if (this.value === undefined || this.value === null) return undefined
    if (typeof this.value !== 'string') this.fail('should be text')
    const trimmed = (this.value as string).trim()
    return trimmed === '' ? undefined : trimmed
  }

  /** A number that must be filled in. */
  number(): number {
    const value = this.optionalNumber()
    if (value === undefined) this.fail('is missing (it must be filled in)')
    return value as number
  }

  /** A number that may be left empty. */
  optionalNumber(): number | undefined {
    if (this.value === undefined || this.value === null || this.value === '') return undefined
    if (typeof this.value !== 'number' || !Number.isFinite(this.value)) this.fail('should be a number')
    return this.value as number
  }

  /** A tick box. Missing reads as not ticked. */
  bool(): boolean {
    if (this.value === undefined || this.value === null) return false
    if (typeof this.value !== 'boolean') this.fail('should be a tick box')
    return this.value as boolean
  }

  /** One of a fixed set of choices. */
  oneOf<T extends string>(options: readonly T[]): T {
    const value = this.text()
    if (!(options as readonly string[]).includes(value)) this.fail(`"${value}" is not one of: ${options.join(', ')}`)
    return value as T
  }

  /** A colour like #EF2F38. */
  colour(): string {
    const value = this.text()
    if (!/^#[0-9a-fA-F]{6}$/.test(value)) this.fail(`"${value}" is not a colour like #EF2F38`)
    return value
  }

  /**
   * Every person shown on the website needs permission to publish (a parent's or guardian's for a child), see
   * lib/content/permission.ts. The editor will not save a new entry without the tick; this stops a hand-edited file
   * from putting one live without it. An entry marked "to-confirm" (live before permission was recorded) is allowed.
   */
  requirePermission(): void {
    if (permissionStateOf(this.get('permissionToPublish').value) === null) {
      this.fail('has no "Permission to publish" tick. Tick it in the editor, or remove this entry, before it can go on the website')
    }
  }

  /** A list of texts; blank ones are dropped. */
  textList(): string[] {
    return this.items()
      .map((item) => item.optionalText())
      .filter((item): item is string => item !== undefined)
  }
}

/** The root of a content file. */
export function file(name: string, value: unknown): Node {
  return new Node(name, '', value)
}

type FieldKind = 'text' | 'list'

/**
 * The translations an editor added: a list of entries, each with a language and only the fields that differ from
 * English. Blank fields are left out, so the page falls back to English for them. Returns nothing when there are none.
 *
 *   translations: [{ language: 'km', name: 'ក្រុម', bio: '' }]   ->   { km: { name: 'ក្រុម' } }
 */
export function translationsOf<Key extends string>(
  node: Node,
  fields: Record<Key, FieldKind>
): Partial<Record<TranslationLanguage, Partial<Record<Key, string | string[]>>>> | undefined {
  const result: Partial<Record<TranslationLanguage, Partial<Record<Key, string | string[]>>>> = {}
  for (const entry of node.items()) {
    const language = entry.get('language').oneOf(LANGUAGES)
    if (result[language]) entry.fail(`there are two translations for "${language}"; keep one`)
    const translated: Partial<Record<Key, string | string[]>> = {}
    for (const key of Object.keys(fields) as Key[]) {
      if (fields[key] === 'list') {
        const list = entry.get(key).textList()
        if (list.length) translated[key] = list
      } else {
        const text = entry.get(key).optionalText()
        if (text !== undefined) translated[key] = text
      }
    }
    if (Object.keys(translated).length) result[language] = translated
  }
  return Object.keys(result).length ? result : undefined
}

/** Leaves out keys whose value is undefined, so optional fields are really absent (as in hand-written data). */
export function compact<T extends object>(value: T): T {
  return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined)) as T
}
