import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#09090b',
          borderRadius: '40px',
          border: '4px solid #27272a',
          position: 'relative',
        }}
      >
        <span
          style={{
            fontSize: '110px',
            fontWeight: 900,
            color: '#EF2F38',
            fontFamily: 'sans-serif',
            lineHeight: 1,
            marginTop: '-6px',
          }}
        >
          ∞
        </span>
        <span
          style={{
            position: 'absolute',
            bottom: '18px',
            fontSize: '12px',
            fontWeight: 800,
            letterSpacing: '2px',
            color: '#ffffff',
            textTransform: 'uppercase',
            fontFamily: 'sans-serif',
          }}
        >
          INFINITY TKD
        </span>
      </div>
    ),
    { ...size }
  )
}
