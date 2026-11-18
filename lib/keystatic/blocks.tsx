import { fields } from '@keystatic/core'
import { block, wrapper } from '@keystatic/core/content-components'
import { youtubeVideoId } from '@/lib/imageUrl'

/**
 * The content blocks the post editor offers in its "+" menu (and by typing "/"). Each one is saved in the post file as a
 * Markdoc tag and shown on the website by components/blog/PostBody.tsx. The names and options are listed once, in
 * lib/blogBlocks.ts; tests/e2e/blog-schema.logic.spec.ts checks that this file and that list say the same.
 *
 * The small previews below are only what the editor shows while writing: plain boxes, close to the real look.
 */

const box = { borderRadius: 8, padding: '10px 14px', margin: '4px 0', border: '1px solid rgba(128,128,128,0.35)', background: 'rgba(128,128,128,0.08)' } as const
const red = '#EF2F38'
const heading = { fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 6px' } as const

const CALLOUT_LABELS = { note: 'Note', tip: 'Tip', warning: 'Warning', safety: 'Safety first' } as const

export const postBlocks = {
  callout: wrapper({
    label: 'Callout',
    description: 'A highlighted box: a note, a tip, a warning or a safety reminder',
    schema: {
      kind: fields.select({
        label: 'Style',
        description: 'Warning and safety boxes are red, note and tip are grey.',
        options: [
          { label: 'Note', value: 'note' },
          { label: 'Tip', value: 'tip' },
          { label: 'Warning', value: 'warning' },
          { label: 'Safety first', value: 'safety' },
        ],
        defaultValue: 'note',
      }),
      title: fields.text({ label: 'Heading (optional)', description: 'Leave empty to use the name of the style.' }),
    },
    ContentView: ({ value, children }) => (
      <div style={{ ...box, borderLeft: `4px solid ${value.kind === 'warning' || value.kind === 'safety' || value.kind === 'tip' ? red : 'rgba(128,128,128,0.6)'}` }}>
        <p style={heading}>{value.title || CALLOUT_LABELS[value.kind]}</p>
        {children}
      </div>
    ),
  }),

  video: block({
    label: 'YouTube video',
    description: 'A video that plays on the page when someone presses play',
    schema: {
      url: fields.text({
        label: 'YouTube link',
        description: 'Paste the link from the address bar, or from the Share button on YouTube.',
        validation: {
          isRequired: true,
          pattern: { regex: /^https?:\/\/(www\.|m\.)?(youtube\.com|youtube-nocookie\.com|youtu\.be)\//i, message: 'Use a YouTube link, for example https://www.youtube.com/watch?v=... or https://youtu.be/...' },
        },
      }),
      title: fields.text({ label: 'Video title', description: 'Describes the video for people who cannot see it, and is shown under it.' }),
    },
    ContentView: ({ value }) => {
      const id = youtubeVideoId(value.url)
      return (
        <div style={box}>
          {id ? (
            // eslint-disable-next-line @next/next/no-img-element -- a preview inside the editor
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" style={{ display: 'block', width: '100%', maxWidth: 360, aspectRatio: '16 / 9', objectFit: 'cover', borderRadius: 6 }} />
          ) : (
            <p style={{ margin: 0 }}>{value.url ? 'This does not look like a YouTube link.' : 'Paste a YouTube link.'}</p>
          )}
          <p style={{ margin: '6px 0 0', fontSize: 13 }}>{value.title || 'Video'}</p>
        </div>
      )
    },
  }),

  button: block({
    label: 'Button',
    description: 'A button that goes to a page: book a trial, contact us, read more',
    schema: {
      label: fields.text({ label: 'Button text', validation: { isRequired: true, length: { max: 60 } } }),
      href: fields.text({
        label: 'Link',
        description: 'A page of this website (like /contact or /pricing) or a full address (https://...). mailto: and tel: work too.',
        validation: {
          isRequired: true,
          pattern: {
            regex: /^(https?:\/\/[^\s\\]+|mailto:[^\s<>"']+|tel:\+?[\d().%-]+|\/(?!\/)[^\s\\]*|#[^\s\\]*)$/i,
            message: 'The link must start with https://, mailto:, tel: or / (a page of this website, like /contact). No spaces.',
          },
        },
      }),
      style: fields.select({
        label: 'Style',
        options: [
          { label: 'Red (the main action)', value: 'primary' },
          { label: 'Outline (quieter)', value: 'outline' },
        ],
        defaultValue: 'primary',
      }),
    },
    ContentView: ({ value }) => (
      <div style={box}>
        <span
          style={{
            display: 'inline-block',
            padding: '8px 18px',
            borderRadius: 8,
            fontWeight: 700,
            ...(value.style === 'outline' ? { border: '1px solid rgba(128,128,128,0.6)' } : { background: red, color: 'white' }),
          }}
        >
          {value.label || 'Button'}
        </span>
        <span style={{ marginLeft: 10, fontSize: 12, opacity: 0.7 }}>{value.href}</span>
      </div>
    ),
  }),

  pullquote: wrapper({
    label: 'Pull quote',
    description: 'A large quotation that stands out from the text',
    schema: {
      cite: fields.text({ label: 'Who said it (optional)' }),
    },
    ContentView: ({ value, children }) => (
      <div style={{ borderLeft: `4px solid ${red}`, padding: '4px 0 4px 14px', margin: '4px 0', fontWeight: 700 }}>
        {children}
        {value.cite && <p style={{ margin: '4px 0 0', fontSize: 12, fontWeight: 400, opacity: 0.7 }}>{value.cite}</p>}
      </div>
    ),
  }),

  faq: wrapper({
    label: 'Question and answer',
    description: 'A question that opens to show its answer. Questions that follow each other become one list.',
    schema: {
      question: fields.text({ label: 'Question', validation: { isRequired: true } }),
    },
    ContentView: ({ value, children }) => (
      <div style={box}>
        <p style={{ margin: '0 0 6px', fontWeight: 700 }}>{value.question || 'Question'}</p>
        {children}
      </div>
    ),
  }),
}
