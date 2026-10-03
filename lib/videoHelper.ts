/**
 * ==============================================================================
 * VIDEO & YOUTUBE URL EMBED PARSER & DEFENSIVE VALIDATOR
 * ==============================================================================
 * Safely parses standard YouTube watch links, shortened youtu.be links,
 * and direct MP4 streams into secure iframe embed sources.
 * Returns null if the URL is empty or invalid.
 * ==============================================================================
 */

export function getSafeVideoEmbedUrl(url?: string | null): string | null {
  if (!url || typeof url !== 'string') return null

  const trimmed = url.trim()
  if (!trimmed) return null

  try {
    // 1. YouTube standard watch link: https://www.youtube.com/watch?v=VIDEO_ID
    if (trimmed.includes('youtube.com/watch')) {
      const parsedUrl = new URL(trimmed)
      const videoId = parsedUrl.searchParams.get('v')
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
      }
    }

    // 2. YouTube short link: https://youtu.be/VIDEO_ID
    if (trimmed.includes('youtu.be/')) {
      const parts = trimmed.split('youtu.be/')
      const videoId = parts[1]?.split('?')[0]?.split('&')[0]
      if (videoId) {
        return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`
      }
    }

    // 3. YouTube embed link: https://www.youtube.com/embed/VIDEO_ID
    if (trimmed.includes('youtube.com/embed/')) {
      return trimmed
    }

    // 4. Standard valid HTTPS video link
    if (trimmed.startsWith('https://') || trimmed.startsWith('http://')) {
      return trimmed
    }

    return null
  } catch (e) {
    return null
  }
}
