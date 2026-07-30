import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

// ponytail: generated 32px favicon — the amber "$" prompt, the site's brand glyph
export default function Icon() {
    return new ImageResponse(
        <div
            style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#0a0b0d',
                color: '#f59e0b',
                fontSize: 24,
                fontWeight: 700,
                fontFamily: 'monospace',
            }}
        >
            ~/
        </div>,
        { ...size },
    );
}
