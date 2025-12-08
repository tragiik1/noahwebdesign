import { ImageResponse } from 'next/og'

export const alt = 'Noah - Professional Web Developer'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        <div style={{ fontSize: 80, marginBottom: 20 }}>Noah</div>
        <div style={{ fontSize: 40, opacity: 0.9 }}>Professional Web Developer</div>
        <div style={{ fontSize: 30, opacity: 0.8, marginTop: 20 }}>Sunshine Coast, Australia</div>
      </div>
    ),
    {
      ...size,
    }
  )
}

