import { fields, singleton } from '@keystatic/core'
import { NEWS_TEXT_LIMIT } from '@/lib/news'
import { optionalText, picture, translations } from './fields'

/**
 * content/news.json, read by data/news.ts: short announcements for the home page and /news (a grading date, a holiday
 * closure, an event). Not blog posts: no article, just a headline, a date and a few sentences.
 */
export const news = singleton({
  label: 'News',
  path: 'content/news',
  format: { data: 'json' },
  schema: {
    items: fields.array(
      fields.object({
        title: fields.text({ label: 'Headline', validation: { isRequired: true, length: { max: 100 } } }),
        date: fields.date({ label: 'Date', defaultValue: { kind: 'today' }, validation: { isRequired: true } }),
        text: fields.text({
          label: 'Short text',
          description: `One to three sentences, up to ${NEWS_TEXT_LIMIT} characters. For a longer story write a blog post and link to it.`,
          multiline: true,
          validation: { isRequired: true, length: { max: NEWS_TEXT_LIMIT } },
        }),
        image: picture('news', 'Picture (optional)', {
          description: 'Shown above the text. Upload a picture, or paste a link: a Google Drive share link works too.',
        }),
        linkUrl: fields.text({
          label: 'Link (optional)',
          description: 'Where "Read more" goes: a page of this website (like /contact or /blog/my-post), a full address (https://...), mailto: or tel:.',
          validation: {
            pattern: {
              // The editor checks the pattern on an empty box too, so the whole thing is optional here: an announcement
              // with no link must still be saveable. (tests/e2e/content-schema.logic.spec.ts)
              regex: /^(https?:\/\/[^\s\\]+|mailto:[^\s<>"']+|tel:\+?[\d().%-]+|\/(?!\/)[^\s\\]*)?$/i,
              message: 'The link must start with https://, mailto:, tel: or / (a page of this website, like /contact). No spaces.',
            },
          },
        }),
        linkLabel: optionalText('Link words (optional)', { description: 'Leave empty to show "Read more".' }),
        translations: translations({
          title: optionalText('Headline'),
          text: optionalText('Short text', { multiline: true }),
          linkLabel: optionalText('Link words'),
        }),
      }),
      {
        label: 'Announcements',
        description: 'The order here does not matter: the newest date is shown first. Remove an announcement when it is out of date.',
        itemLabel: (props) => `${props.fields.date.value ?? ''}: ${props.fields.title.value || 'New announcement'}`,
      }
    ),
  },
})
