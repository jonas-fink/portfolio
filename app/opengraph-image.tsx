import { ImageResponse } from 'next/og';

export const alt = 'Jonas Fink — Full-Stack Developer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
    return new ImageResponse(
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#0a0b0d',
                color: '#e7e9ec',
                padding: '72px',
                fontFamily: 'monospace',
                border: '2px solid rgba(255,255,255,0.1)',
            }}
        >
            <div style={{ color: 'rgba(231,233,236,0.38)', fontSize: 28 }}>
                ~/jonasfink.dev
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div
                    style={{
                        display: 'flex',
                        gap: 24,
                        fontSize: 84,
                        fontWeight: 700,
                    }}
                >
                    <span style={{ color: '#f59e0b' }}>$</span>
                    <span>Jonas Fink</span>
                </div>
                <div style={{ fontSize: 40, color: 'rgba(231,233,236,0.62)' }}>
                    Full-Stack Developer · MERN · Kassel
                </div>
            </div>
            <div style={{ display: 'flex', gap: 16 }}>
                {['TypeScript', 'React', 'Next.js', 'Node.js'].map((t) => (
                    <div
                        key={t}
                        style={{
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 8,
                            padding: '8px 18px',
                            fontSize: 26,
                            color: 'rgba(231,233,236,0.62)',
                        }}
                    >
                        {t}
                    </div>
                ))}
            </div>
        </div>,
        { ...size },
    );
}
