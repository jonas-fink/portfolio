import Link from 'next/link';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';

const Hero = ({ lang, dict }: { lang: Locale; dict: Dictionary }) => {
    const t = dict.hero;
    return (
        <div className="flex flex-col gap-6">
            <div className="badge-status max-w-max">
                <span className="badge-status-dot" />
                {t.available}{' '}
                <span className="inline-block -translate-y-0.5">.</span>{' '}
                {t.openToWork}
            </div>
            <h1 className="md:text-5xl  text-4xl font-bold">
                <span className="text-accent">$ </span>
                {t.greeting}
            </h1>
            <p className="text-muted">
                {t.role}{' '}
                <span className="inline-block -translate-y-0.75">.</span>{' '}
                {t.stack}{' '}
                <span className="inline-block -translate-y-0.75"> .</span>{' '}
                {t.location}
            </p>
            <p>{t.intro}</p>
            <div className="flex md:flex-row flex-col gap-3 md:w-1/3">
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
            <div className="flex gap-6 text-sm text-muted flex-wrap">
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
        </div>
    );
};

export default Hero;
