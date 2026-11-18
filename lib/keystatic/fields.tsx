import { fields, type ComponentSchema } from '@keystatic/core'
import { Checkbox } from '@keystar/ui/checkbox'
import { FieldMessage } from '@keystar/ui/field'
import { Flex } from '@keystar/ui/layout'
import { Text } from '@keystar/ui/typography'
import { LANGUAGE_LABELS } from '@/lib/content/options'
import { imageOrLink } from './imageField'

/** Dropdown options from a list of values (with optional friendlier labels). */
export const options = <const T extends string>(values: readonly T[], labels?: Partial<Record<T, string>>) =>
  values.map((value) => ({ label: labels?.[value] ?? value, value }))

/**
 * A picture the editor can upload or paste a link for. Uploads are saved in public/uploads/<area>/ and become
 * a commit in the repository, so they are shrunk to under 1 MB (see lib/keystatic/prepareUpload.ts).
 */
export const picture = (area: string, label = 'Picture', opts: { description?: string; isRequired?: boolean } = {}) =>
  imageOrLink({
    label,
    description: opts.description,
    directory: `public/uploads/${area}`,
    publicPath: `/uploads/${area}`,
    validation: { isRequired: opts.isRequired },
  })

/**
 * The translations of an item: Khmer, Chinese and Korean versions of the fields that can differ from English. An editor
 * adds a language and fills in only what they want to change; anything left empty is shown in English.
 * (Saved as a list, turned into `translations: { km: {...} }` by translationsOf() in lib/content/validate.ts.)
 */
export const translations = (translatedFields: Record<string, ComponentSchema>) =>
  fields.array(
    fields.object({
      language: fields.select({
        label: 'Language',
        options: options(['km', 'zh', 'ko'] as const, LANGUAGE_LABELS),
        defaultValue: 'km',
      }),
      ...translatedFields,
    }),
    {
      label: 'Translations (optional)',
      description: 'Add a language, then fill in only the fields you want to change. Anything left empty is shown in English.',
      itemLabel: (props) => LANGUAGE_LABELS[props.fields.language.value as keyof typeof LANGUAGE_LABELS] ?? 'Language',
      validation: { length: { max: 3 } },
    }
  )

/** A text field that may be left empty. */
export const optionalText = (label: string, opts: { description?: string; multiline?: boolean } = {}) =>
  fields.text({ label, description: opts.description, multiline: opts.multiline })

/** A required text field. */
export const requiredText = (label: string, opts: { description?: string; multiline?: boolean } = {}) =>
  fields.text({ label, description: opts.description, multiline: opts.multiline, validation: { isRequired: true } })

/** A list of short texts (features, specialties...). */
export const textList = (label: string, itemLabel: string, description?: string) =>
  fields.array(fields.text({ label: itemLabel }), {
    label,
    description,
    itemLabel: (props) => props.value || itemLabel,
  })

/** Help for every field that shows a student's name: short names only. */
export const SHORT_NAME_HELP =
  'A first name or initials only, for example Sophea or Sophea P. Never a full name for anyone under 18. For an adult, use a full name only if they agree.'

/** Added to an entry's name in the list while its "Permission to publish" tick is missing, so the problem is visible. */
export const NEEDS_PERMISSION = '  (!) permission to publish not ticked: cannot be saved'
/** Added to an entry that was live before permission was recorded and has not been confirmed yet. */
export const TO_CONFIRM = '  (!) permission still to confirm'

/** The mark to add to an entry's name in the list for the state of its permission tick. */
export const permissionMark = (state: string) => (state === 'confirmed' ? '' : state === 'to-confirm' ? TO_CONFIRM : NEEDS_PERMISSION)

/**
 * "Permission to publish": every entry that shows a person's name or picture must have it, so a new entry cannot be
 * saved without the tick (and the website build refuses an entry without it). For a child, the permission is the
 * parent's or guardian's. Not shown on the website.
 *
 * Saved as "confirmed" when ticked. An entry that was live before permission was recorded is saved as "to-confirm":
 * it stays as it is until someone ticks the box, and nothing says it was confirmed (lib/content/permission.ts).
 */
export const permissionToPublish = () => {
  const label = 'Permission to publish'
  // A plain form field to build on (a text field would carry the extras of a slug field). Every part is replaced below.
  const base = fields.checkbox({ label })
  const parse = (value: unknown): string => {
    if (value === true) return 'confirmed'
    return value === 'confirmed' || value === 'to-confirm' ? value : ''
  }
  return {
    ...base,
    defaultValue: () => '',
    parse,
    serialize: (value: string) => ({ value: value === '' ? undefined : value }),
    reader: { parse },
    validate(value: string) {
      if (value !== 'confirmed' && value !== 'to-confirm') throw new Error(`${label}: tick the box to confirm we have permission`)
      return value
    },
    Input(props: { value: string; onChange(value: string): void; forceValidation: boolean }) {
      return (
        <Flex direction="column" gap="regular">
          <Checkbox isSelected={props.value === 'confirmed'} onChange={(ticked) => props.onChange(ticked ? 'confirmed' : '')}>
            {label}
          </Checkbox>
          <Text size="small" color="neutral">
            Tick only if we have written permission to show this person's name and picture on the website: from a parent or guardian
            if they are under 18, or from the person themselves. Not shown on the website.
          </Text>
          {props.value === 'to-confirm' && (
            <FieldMessage>
              Permission not confirmed yet. This person was on the website before permission was recorded here. Ask the parent or
              guardian (or the person, if an adult), then tick the box. Until then the entry stays on the website as it is.
            </FieldMessage>
          )}
          {props.forceValidation && props.value === '' && <FieldMessage>Tick the box to confirm we have permission, or remove this entry.</FieldMessage>}
        </Flex>
      )
    },
  }
}

/**
 * The name field of an item that other parts of the website point at (a coach, a plan, an award). It also makes the
 * ID the website uses inside: filled in automatically from the name, and never to be changed once published.
 */
export const namedItem = (label: string, description?: string) =>
  fields.slug({
    name: { label, description, validation: { isRequired: true } },
    slug: {
      label: 'ID (used inside the website)',
      description: 'Made from the name. Do not change it after the item is published: other parts of the website refer to it.',
    },
  })
