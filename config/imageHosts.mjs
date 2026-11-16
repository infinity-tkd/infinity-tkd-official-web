/**
 * Where pictures may come from, kept in ONE place so the parts that care can never disagree:
 *
 *   next.config.mjs   images.remotePatterns: the only addresses Vercel's image optimizer may fetch
 *   lib/imageUrl.ts   decides whether a picture goes through the optimizer or straight from its own host
 *   tests/unit        checks both of the above against Next's own matching rules
 *
 * NEVER add a wildcard host (`**`, `*.com`, `*.google.com`). The optimizer downloads, resizes and caches whatever
 * address it is asked for on an allowed host, so a wildcard would turn this site into a free image proxy for
 * anyone on the internet and use up the Vercel image quota. Add one specific host, and the path its pictures live
 * under whenever you know it.
 *
 * Pictures from any other host are still shown (the browser loads them directly, see components/SafeImage.tsx);
 * they just are not resized or cached by Vercel.
 *
 * @type {ReadonlyArray<{ hostname: string, pathname?: string }>}
 */
export const OPTIMIZED_IMAGE_HOSTS = [
  // Stock photos and video thumbnails the site has always used.
  { hostname: 'images.unsplash.com' },
  { hostname: 'source.unsplash.com' },
  { hostname: 'i.ytimg.com' },
  { hostname: 'img.youtube.com' },

  // Google Drive (a share link becomes a /thumbnail address) and Google Photos / Drive picture servers.
  { hostname: 'drive.google.com', pathname: '/thumbnail' },
  { hostname: 'lh3.googleusercontent.com', pathname: '/d/**' },
  { hostname: 'lh3.googleusercontent.com', pathname: '/pw/**' },

  // Dropbox share links (?raw=1) and Dropbox's own direct host.
  { hostname: 'www.dropbox.com', pathname: '/s/**' },
  { hostname: 'www.dropbox.com', pathname: '/scl/fi/**' },
  { hostname: 'dl.dropboxusercontent.com' },

  // Imgur and personal OneDrive share links (through OneDrive's public "shares" address).
  { hostname: 'i.imgur.com' },
  { hostname: 'api.onedrive.com', pathname: '/v1.0/shares/**' },
]

/**
 * The same list in the shape Next.js wants for `images.remotePatterns`.
 * @type {Array<{ protocol: 'https', hostname: string, pathname?: string }>}
 */
export const OPTIMIZED_IMAGE_REMOTE_PATTERNS = OPTIMIZED_IMAGE_HOSTS.map((host) => ({ protocol: /** @type {const} */ ('https'), ...host }))
