import * as React from 'react'
import type { AssetFormField } from '@keystatic/core'
import { ActionButton, ButtonGroup } from '@keystar/ui/button'
import { FieldDescription, FieldLabel, FieldMessage } from '@keystar/ui/field'
import { Box, Flex } from '@keystar/ui/layout'
import { Notice } from '@keystar/ui/notice'
import { TextField } from '@keystar/ui/text-field'
import { Text } from '@keystar/ui/typography'
import { describeImage, imageAttempts, type ImageAttempt } from '@/lib/imageUrl'
import { MAX_UPLOAD_BYTES, UPLOAD_ACCEPT, UploadError, formatBytes, prepareUpload } from './prepareUpload'

/**
 * A picture field for the content editor: upload a file OR paste a link.
 *
 * Links can be anything: a Google Drive, Dropbox, OneDrive or Imgur share link, or any picture address. The website
 * turns share links into the picture itself when it shows them (lib/imageUrl.ts), so editors paste what they copied.
 * The field shows a live preview built the same way the website builds the picture, and says clearly when a link
 * cannot work (Facebook, Instagram, a folder, a private file...).
 *
 * What is saved in the content file is plain text, exactly what the website already understands:
 *   an uploaded file   /uploads/<area>/<name>.jpg   (the file itself is saved in public/uploads/<area>/)
 *   a link             the link as it was pasted
 */
export type ImageFieldValue =
  | { kind: 'link'; url: string }
  | { kind: 'upload'; filename: string; extension: string; data: Uint8Array }
  | null

interface ImageFieldOptions {
  label: string
  description?: string
  /** Folder in the repository that uploads are saved in, e.g. "public/uploads/coaches". */
  directory: string
  /** The website address of that folder, e.g. "/uploads/coaches". */
  publicPath: string
  validation?: { isRequired?: boolean }
}

const MIME_BY_EXTENSION: Record<string, string> = { jpg: 'image/jpeg', png: 'image/png', webp: 'image/webp', gif: 'image/gif', avif: 'image/avif' }

/** Where uploads of this field are served from, e.g. "/uploads/coaches/" (and "/uploads/blog/<slug>/" in a collection). */
const prefixFor = (publicPath: string, slug: string | undefined) => `${publicPath.replace(/\/*$/, '')}/${slug === undefined ? '' : `${slug}/`}`

export function imageOrLink(options: ImageFieldOptions): AssetFormField<ImageFieldValue, ImageFieldValue, string | null> {
  const { label, description, directory, publicPath, validation } = options

  return {
    kind: 'form',
    formKind: 'asset',
    label,
    directory,
    defaultValue: () => null,
    Input: (props) => <ImageFieldInput {...props} label={label} description={description} isRequired={validation?.isRequired} />,
    filename(value, { slug }) {
      const prefix = prefixFor(publicPath, slug)
      return typeof value === 'string' && value.startsWith(prefix) ? value.slice(prefix.length) : undefined
    },
    parse(value, { asset, slug }) {
      if (value === undefined || value === '') return null
      if (typeof value !== 'string') throw new Error(`${label} must be text`)
      const prefix = prefixFor(publicPath, slug)
      if (value.startsWith(prefix) && asset) {
        const filename = value.slice(prefix.length)
        return { kind: 'upload', filename, extension: /\.([^.]+)$/.exec(filename)?.[1] ?? '', data: asset }
      }
      // A link, or a file that is not one of this field's uploads (for example one already in /public).
      return { kind: 'link', url: value }
    },
    serialize(value, { slug }) {
      if (value === null) return { value: undefined, asset: undefined }
      if (value.kind === 'link') return { value: value.url.trim() || undefined, asset: undefined }
      return { value: `${prefixFor(publicPath, slug)}${value.filename}`, asset: { filename: value.filename, content: value.data } }
    },
    validate(value) {
      if (value === null || (value.kind === 'link' && !value.url.trim())) {
        if (validation?.isRequired) throw new Error(`${label} is required`)
        return value
      }
      if (value.kind === 'upload' && value.data.byteLength > MAX_UPLOAD_BYTES) {
        throw new Error(`${label}: the picture is bigger than ${formatBytes(MAX_UPLOAD_BYTES)}. Use a link instead.`)
      }
      if (value.kind === 'link') {
        const problem = describeImage(value.url).problem
        if (problem) throw new Error(`${label}: ${problem}`)
      }
      return value
    },
    reader: {
      parse: (value) => (typeof value === 'string' && value ? value : null),
    },
  }
}

// ---------------------------------------------------------------------------------------------
// The editing screen
// ---------------------------------------------------------------------------------------------

interface InputProps {
  value: ImageFieldValue
  onChange(value: ImageFieldValue): void
  forceValidation: boolean
  label: string
  description?: string
  isRequired?: boolean
}

/** Holds a value back until it has stopped changing, so a link being typed is not loaded letter by letter. */
function useSettled<T>(value: T, delay = 600): T {
  const [settled, setSettled] = React.useState(value)
  React.useEffect(() => {
    const timer = setTimeout(() => setSettled(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return settled
}

function useBlobUrl(data: Uint8Array | null, extension: string): string | null {
  const [url, setUrl] = React.useState<string | null>(null)
  React.useEffect(() => {
    if (!data) {
      setUrl(null)
      return
    }
    const blobUrl = URL.createObjectURL(new Blob([data as BlobPart], { type: MIME_BY_EXTENSION[extension] ?? 'image/jpeg' }))
    setUrl(blobUrl)
    return () => URL.revokeObjectURL(blobUrl)
  }, [data, extension])
  return url
}

const frame: React.CSSProperties = { display: 'block', maxWidth: '100%', maxHeight: 220, objectFit: 'contain' }

function ImageFieldInput({ value, onChange, forceValidation, label, description, isRequired }: InputProps) {
  const labelId = React.useId()
  const descriptionId = React.useId()
  const [busy, setBusy] = React.useState(false)
  const [uploadNote, setUploadNote] = React.useState<string | null>(null)
  const [uploadError, setUploadError] = React.useState<string | null>(null)
  const [touched, setTouched] = React.useState(false)

  const uploadUrl = useBlobUrl(value?.kind === 'upload' ? value.data : null, value?.kind === 'upload' ? value.extension : '')
  const link = value?.kind === 'link' ? value.url : ''

  const choose = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = UPLOAD_ACCEPT
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      setBusy(true)
      setUploadError(null)
      try {
        const prepared = await prepareUpload(file)
        onChange({ kind: 'upload', filename: prepared.filename, extension: prepared.extension, data: prepared.data })
        setUploadNote(
          prepared.changed
            ? `Ready: ${formatBytes(prepared.data.byteLength)} (it was ${formatBytes(prepared.originalBytes)}). Large pictures are shrunk so the website stays fast.`
            : `Ready: ${formatBytes(prepared.data.byteLength)}.`
        )
      } catch (error) {
        setUploadError(error instanceof UploadError ? error.message : 'This picture could not be added. Try another one, or use a link.')
      } finally {
        setBusy(false)
      }
    }
    input.click()
  }

  const showRequired = (forceValidation || touched) && isRequired && value === null

  return (
    <Flex direction="column" gap="medium" role="group" aria-labelledby={labelId} aria-describedby={description ? descriptionId : undefined}>
      <FieldLabel id={labelId} elementType="span" isRequired={isRequired}>
        {label}
      </FieldLabel>
      {description && <FieldDescription id={descriptionId}>{description}</FieldDescription>}

      <TextField
        label="Paste a picture link"
        description="From Google Drive, Dropbox, OneDrive, Imgur, or any picture address."
        value={link}
        onChange={(text) => {
          setUploadNote(null)
          setUploadError(null)
          onChange(text.trim() ? { kind: 'link', url: text } : null)
        }}
        onBlur={() => setTouched(true)}
      />

      <ButtonGroup>
        <ActionButton isDisabled={busy} onPress={choose}>
          {busy ? 'Preparing…' : 'Upload a picture'}
        </ActionButton>
        {value !== null && (
          <ActionButton
            prominence="low"
            onPress={() => {
              onChange(null)
              setUploadNote(null)
              setUploadError(null)
              setTouched(true)
            }}
          >
            Remove
          </ActionButton>
        )}
      </ButtonGroup>

      {uploadError && <Notice tone="critical">{uploadError}</Notice>}
      {value?.kind === 'upload' && uploadUrl && (
        <Flex direction="column" gap="regular">
          <Box alignSelf="start" backgroundColor="canvas" borderRadius="regular" border="neutral" padding="regular">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={uploadUrl} alt="" style={frame} />
          </Box>
          <Text size="small" color="neutral">
            {uploadNote ?? `Uploaded picture, ${formatBytes(value.data.byteLength)}.`} It is kept in the website's files as {value.filename} (when you click Save).
          </Text>
        </Flex>
      )}
      {value?.kind === 'link' && value.url.trim() && <LinkPreview link={value.url} />}

      {value === null && !uploadError && (
        <Text size="small" color="neutral">
          Pictures you upload are shrunk to fit (up to {formatBytes(MAX_UPLOAD_BYTES)}). For a big original, put it on Google Drive and paste the link instead.
        </Text>
      )}
      {showRequired && <FieldMessage>{label} is required</FieldMessage>}
    </Flex>
  )
}

/**
 * Shows what the website will show for a link: the same addresses in the same order as components/SafeImage.tsx
 * (the server's image cache first, then the picture's own host). If none of them loads, the visitor would see the
 * fallback photo, so the editor is told.
 */
function LinkPreview({ link }: { link: string }) {
  const settled = useSettled(link)
  const source = React.useMemo(() => describeImage(settled), [settled])
  const attempts = React.useMemo<ImageAttempt[]>(() => imageAttempts(source, [256, 384, 640]), [source])
  const [index, setIndex] = React.useState(0)
  const [status, setStatus] = React.useState<'loading' | 'loaded' | 'failed'>('loading')

  React.useEffect(() => {
    setIndex(0)
    setStatus('loading')
  }, [source])

  const waiting = settled !== link
  if (waiting) return <Text size="small" color="neutral">Checking the link…</Text>

  if (source.problem) {
    return (
      <Flex direction="column" gap="regular">
        <Notice tone="critical">{source.problem}</Notice>
      </Flex>
    )
  }

  const attempt = attempts[index]
  const onError = () => {
    if (index < attempts.length - 1) setIndex(index + 1)
    else setStatus('failed')
  }

  return (
    <Flex direction="column" gap="regular">
      {attempt && status !== 'failed' && (
        <Box alignSelf="start" backgroundColor="canvas" borderRadius="regular" border="neutral" padding="regular">
          {/* referrerPolicy matches the website: pictures from other hosts are loaded without a referrer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={attempt.src} alt="" style={frame} referrerPolicy="no-referrer" onLoad={() => setStatus('loaded')} onError={onError} />
        </Box>
      )}
      {status === 'loading' && <Text size="small" color="neutral">Loading the picture…</Text>}
      {status === 'loaded' && (
        <Text size="small" color="positive">
          Picture found ({source.label}). {attempt?.optimized ? 'The website will keep a resized copy of it.' : 'The website will load it straight from its own host.'}
        </Text>
      )}
      {status === 'failed' && (
        <Notice tone="caution">
          The picture could not be loaded, so visitors would see a stand-in photo. Check that the link opens a picture (not a web page or folder)
          {source.kind === 'google-drive' ? ' and that the file is shared as "Anyone with the link"' : ' and that anyone can see it without logging in'}. Or use Upload instead.
        </Notice>
      )}
      {source.hint && <Text size="small" color="neutral">{source.hint}</Text>}
    </Flex>
  )
}
