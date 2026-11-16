import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { profile } from '@/data/profile';

// The 1200×630 preview shown on LinkedIn, WhatsApp, X, Slack…
// Generated at build time, so it always matches profile.ts.
// (To use a hand-designed image instead, delete this file and add
// public/og.png + `images: ['/og.png']` to openGraph in layout.tsx.)

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const fonts = join(process.cwd(), 'assets/fonts');
const [display, mono] = await Promise.all([
  readFile(join(fonts, 'SpaceGrotesk-Bold.ttf')),
  readFile(join(fonts, 'JetBrainsMono-ExtraBold.ttf')),
]);

export default async function Image() {
  const [first, last] = profile.name.toUpperCase().split(' ');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          backgroundColor: '#0A0A0A',
          backgroundImage: 'radial-gradient(circle, #26262A 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
          color: '#F2F0EA',
          fontFamily: 'Space Grotesk',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'JetBrains Mono',
            fontSize: 24,
            letterSpacing: 2,
          }}
        >
          <div style={{ display: 'flex' }}>
            KHYATI<span style={{ color: '#D4FF3A' }}>.OS</span>
          </div>
          <div style={{ display: 'flex', color: '#A8A8B0' }}>{profile.role.toUpperCase()}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 0.82, letterSpacing: -8 }}>
          <div style={{ display: 'flex', fontSize: 210 }}>
            {first}
            <span style={{ color: '#D4FF3A', marginLeft: -12 }}>_</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 210,
              // Fill matches the background, so only the stroke shows (outlined text).
              color: '#0A0A0A',
              WebkitTextStroke: '4px #F2F0EA',
            }}
          >
            {last}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', maxWidth: 700, fontSize: 30, lineHeight: 1.2, color: '#F2F0EA' }}>
            {profile.tagline}
          </div>
          <div
            style={{
              display: 'flex',
              padding: '14px 22px',
              backgroundColor: '#D4FF3A',
              color: '#0A0A0A',
              border: '3px solid #0A0A0A',
              boxShadow: '8px 8px 0 #F2F0EA',
              transform: 'rotate(-5deg)',
              fontFamily: 'JetBrains Mono',
              fontSize: 24,
              letterSpacing: 1,
            }}
          >
            {profile.openToWork ? 'OPEN TO WORK' : 'SHIPS TO PROD'}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Space Grotesk', data: display, weight: 700, style: 'normal' },
        { name: 'JetBrains Mono', data: mono, weight: 800, style: 'normal' },
      ],
    },
  );
}
