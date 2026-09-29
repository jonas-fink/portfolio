import Link from 'next/link';
import type { CSSProperties } from 'react';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';

const Hero = ({ lang, dict }: { lang: Locale; dict: Dictionary }) => {
    const t = dict.hero;
    const n = t.greeting.length;
    // intro sequence delays; the h1 shrinks on narrow screens so the
    // non-wrapping typed line ("$ " + greeting + cursor) always fits
    const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;
    return (
        <div className="hero-out flex flex-col gap-6 min-h-[calc(100svh-9rem)]">
            <div className="badge-status max-w-max fade" style={d(0)}>
                <span className="badge-status-dot" />
                {t.available}{' '}
                <span className="inline-block -translate-y-0.5">.</span>{' '}
                {t.openToWork}
            </div>
            <p className="text-sm text-dim">
                <span className="text-accent">jonas@kassel</span>:~${' '}
                <span
                    className="type"
                    style={{ '--n': 6, '--dur': '.5s', '--d': '.3s' } as CSSProperties}
                >
                    whoami
                </span>
            </p>
            <h1
                className="font-bold leading-tight"
                style={{
                    fontSize: `min(3.75rem, calc((100vw - 3rem) / ${n + 3} / 0.6))`,
                }}
            >
                <span className="text-accent">$ </span>
                <span
                    className="type"
                    style={{ '--n': n, '--dur': '1s', '--d': '1s' } as CSSProperties}
                >
                    {t.greeting}
                </span>
                <span className="cursor" aria-hidden="true" />
            </h1>
            <p className="text-muted fade" style={d(2)}>
                {t.role}{' '}
                <span className="inline-block -translate-y-0.75">.</span>{' '}
                {t.stack}{' '}
                <span className="inline-block -translate-y-0.75"> .</span>{' '}
                {t.location}
            </p>
            <p className="fade max-w-2xl leading-relaxed" style={d(2.3)}>
                {t.intro}
            </p>
            <div
                className="flex md:flex-row flex-col gap-3 md:w-1/3 fade"
                style={d(2.6)}
            >
                <Link href={`/${lang}/contact`} className="btn-primary md:w-1/2">
                    {t.reachOut}
                </Link>
                <Link
                    href={`/${lang}/projects`}
                    className="btn-secondary md:w-1/2"
                >
                    $ ls projects/
                </Link>
            </div>
            <div
                className="flex md:flex-row flex-col md:gap-6 text-sm text-muted fade [&_a]:min-h-11 [&_a]:flex [&_a]:items-center md:[&_a]:min-h-0"
                style={d(2.9)}
            >
                <a href="https://github.com/jonas-fink" target="_blank">
                    github/jonas-fink
                </a>
                <a
                    href="https://www.linkedin.com/in/jonas-fink-225335355/"
                    target="_blank"
                >
                    linkedin/in/jonas-fink
                </a>
                <a href="mailto:jonasfink.dev@gmail.com">
                    jonasfink.dev@gmail.com
                </a>
            </div>
            <div
                aria-hidden="true"
                className="mt-auto flex items-center gap-2.5 text-xs text-dim fade"
                style={d(3.3)}
            >
                <span className="bg-text text-bg px-1.5">-- More --</span>
            </div>
        </div>
    );
};

export default Hero;
