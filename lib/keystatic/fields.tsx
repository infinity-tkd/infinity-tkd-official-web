import { fields, type ComponentSchema } from '@keystatic/core'
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

/**
 * The name field of an item that other parts of the website point at (a coach, a plan, an award). It also makes the
 * ID the website uses inside: filled in automatically from the name, and never to be changed once published.
 */
export const namedItem = (label: string) =>
  fields.slug({
    name: { label, validation: { isRequired: true } },
    slug: {
      label: 'ID (used inside the website)',
      description: 'Made from the name. Do not change it after the item is published: other parts of the website refer to it.',
    },
  })
