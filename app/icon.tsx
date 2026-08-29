import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

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
