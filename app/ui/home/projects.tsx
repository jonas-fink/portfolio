import Link from 'next/link';
import { getLocalizedStudies } from '@/app/lib/case-studies';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';

const Projects = ({ lang, dict }: { lang: Locale; dict: Dictionary }) => {
    const featuredStudies = getLocalizedStudies(lang).filter(
        (c) => c.featured === true,
    );

    return (
        <section className="flex flex-col gap-4">
            <p className="text-sm text-muted reveal">
                <span className="text-accent font-bold">02</span>{' '}
                {dict.home.featuredEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold wipe">
                $ ls -la ~/projects
            </h2>
            <div className="border-t border-border">
                {featuredStudies.map((c) => (
                    <Link
                        key={c.slug}
                        href={`/${lang}/projects/${c.slug}`}
                        className="row reveal grid gap-2 md:grid-cols-[110px_1fr_260px_24px] md:gap-6 md:items-center py-5 px-1 md:px-4 border-b border-border"
                    >
                        <span className="text-xs text-dim">
                            drwxr-xr-x · {c.year}
                        </span>
                        <span className="flex flex-col gap-1.5">
                            <span className="text-lg font-bold">{c.title}</span>
                            <span className="text-sm text-muted leading-relaxed">
                                {c.summary}
                            </span>
                        </span>
                        <span className="text-xs text-accent leading-relaxed">
                            {c.tech.join(' · ')}
                        </span>
                        <span
                            aria-hidden="true"
                            className="arrow text-dim text-lg hidden md:block"
                        >
                            →
                        </span>
                    </Link>
                ))}
            </div>
            <Link
                href={`/${lang}/projects`}
                className="text-xs text-accent reveal min-h-11 flex items-center"
            >
                cd projects/ →
            </Link>
        </section>
    );
};

export default Projects;
