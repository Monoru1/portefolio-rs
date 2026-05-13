import { ImageResponse } from 'next/og'

export const size = {
  width: 64,
  height: 64,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #050505 0%, #0f172a 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'white',
          fontSize: 28,
          fontWeight: 900,
          letterSpacing: '-0.06em',
        }}
      >
        RS
      </div>
    ),
    {
      ...size,
    }
  )
}
