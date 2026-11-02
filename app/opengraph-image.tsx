import { ImageResponse } from 'next/og'

export const alt = 'Infinity Taekwondo | Elite Martial Arts & Sport Science'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
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
          backgroundColor: '#050507',
          backgroundImage:
            'radial-gradient(circle at 50% 30%, rgba(239, 47, 56, 0.28) 0%, transparent 65%), radial-gradient(circle at 80% 80%, rgba(239, 47, 56, 0.12) 0%, transparent 50%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
          padding: '60px 80px',
        }}
      >
        {/* Subtle decorative grid/border */}
        <div
          style={{
            position: 'absolute',
            inset: '24px',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '28px',
            display: 'flex',
          }}
        />

        {/* Top Badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              padding: '8px 20px',
              backgroundColor: 'rgba(239, 47, 56, 0.18)',
              border: '1px solid rgba(239, 47, 56, 0.5)',
              borderRadius: '999px',
              color: '#EF2F38',
              fontSize: '15px',
              fontWeight: 800,
              letterSpacing: '3px',
              textTransform: 'uppercase',
            }}
          >
            Kukkiwon Dan Certified
          </div>
          <div
            style={{
              padding: '8px 20px',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '999px',
              color: '#d4d4d8',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            World Taekwondo Standard
          </div>
        </div>

        {/* Main Brand Title */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '84px',
            fontWeight: 900,
            letterSpacing: '-2px',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '20px',
          }}
        >
          <span style={{ color: '#ffffff' }}>INFINITY</span>
          <span style={{ color: '#EF2F38', marginLeft: '20px' }}>TAEKWONDO</span>
        </div>

        {/* Tagline / Subtitle */}
        <div
          style={{
            fontSize: '24px',
            fontWeight: 400,
            color: '#a1a1aa',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.45,
            marginBottom: '40px',
          }}
        >
          Elite Olympic Syllabus • Sports Biomechanics • Freestyle Acrobatics • Phnom Penh, Cambodia
        </div>

        {/* Bottom Feature Pillars */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '36px',
            fontSize: '16px',
            fontWeight: 700,
            color: '#e4e4e7',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}
        >
          <span>Poomsae Master</span>
          <span style={{ color: '#EF2F38' }}>•</span>
          <span>Olympic Kicking</span>
          <span style={{ color: '#EF2F38' }}>•</span>
          <span>Hosinsul Defense</span>
          <span style={{ color: '#EF2F38' }}>•</span>
          <span>Freestyle Acrobatics</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
