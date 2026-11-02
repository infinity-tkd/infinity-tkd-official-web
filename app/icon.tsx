import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          borderRadius: '8px',
        }}
      >
        <span
          style={{
            fontSize: '20px',
            fontWeight: 900,
            color: '#EF2F38',
            fontFamily: 'sans-serif',
            lineHeight: 1,
            marginTop: '-2px',
          }}
        >
          ∞
        </span>
      </div>
    ),
    { ...size }
  )
}
