import { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/app/lib/case-studies';
import MediaGallery from '@/app/ui/projects/media-gallery';
import { locales, type Locale } from '../../../i18n/config';
import { getDictionary } from '../../../i18n/get-dictionary';
import { localeAlternates } from '../../../i18n/alternates';

export const generateStaticParams = () =>
    locales.flatMap((lang) => caseStudies.map((c) => ({ lang, id: c.slug })));

export async function generateMetadata(props: {
    params: Promise<{ lang: string; id: string }>;
}): Promise<Metadata> {
    const { lang, id } = (await props.params) as { lang: Locale; id: string };
    const c = getCaseStudy(id, lang);
    if (!c) return { title: 'Not found' };
    return {
        metadataBase: new URL('https://jonasfink.dev'),
        title: c.title,
        description: c.summary,
        alternates: localeAlternates(lang, `/projects/${c.slug}`),
        openGraph: {
            type: 'article',
            title: c.title,
            description: c.summary,
            url: `https://jonasfink.dev/${lang}/projects/${c.slug}`,
        },
    };
}

const Page = async (props: {
    params: Promise<{ lang: string; id: string }>;
}) => {
    const { lang, id } = (await props.params) as { lang: Locale; id: string };
    const c = getCaseStudy(id, lang);
    if (!c) notFound();
    const dict = getDictionary(lang);
    const i = caseStudies.findIndex((s) => s.slug === c.slug);
    const next = getCaseStudy(caseStudies[(i + 1) % caseStudies.length].slug, lang)!;
    // scroll-spy: each section owns a named view timeline (--t0, --t1, …)
    // that its TOC link animates on; the article hoists the names in scope
    const tl = (n: number) => ({ '--tl': `--t${n}` }) as CSSProperties;
    const scope = c.sections.map((_, n) => `--t${n}`).join(', ');

    return (
        <article
            className="spy-scope flex flex-col gap-6 pb-6"
            style={{ '--scope': scope } as CSSProperties}
        >
            <Link
                href={`/${lang}/projects`}
                className="text-sm text-muted hover:text-accent min-h-11 flex items-center self-start fade"
            >
                ← cd ..
            </Link>
            <header className="grid md:grid-cols-[1fr_320px] gap-6 md:gap-14 md:items-end">
                <div className="flex flex-col gap-3">
                    <p className="text-xs text-dim fade">
                        ~/projects/<span className="text-accent">{c.slug}</span>{' '}
                        · {c.year} · {c.role}
                    </p>
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight wipe">
                        {c.title}
                    </h1>
                    <div className="flex flex-wrap gap-2 mt-1 fade">
                        {c.tech.map((t) => (
                            <span key={t} className="chip">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-4 fade">
                    <p className="text-sm text-muted leading-relaxed">{c.summary}</p>
                    {(c.live || c.repo) && (
                        <div className="flex gap-3">
                            {c.live && (
                                <a
                                    href={c.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary"
                                >
                                    ↗ {dict.projects.detailLive}
                                </a>
                            )}
                            {c.repo && (
                                <a
                                    href={c.repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-secondary"
                                >
                                    ↗ {dict.projects.detailCode}
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </header>
            {c.cover && (
                <div className="overflow-hidden rounded-md border border-border">
                    <CldImage
                        src={c.cover}
                        alt={`${c.title} cover`}
                        width={1152}
                        height={648}
                        className="parallax w-full h-auto"
                    />
                </div>
            )}
            {c.images?.length || c.videos?.length ? (
                <div className="reveal">
                    <MediaGallery
                        title={c.title}
                        images={c.images}
                        videos={c.videos}
                    />
                </div>
            ) : null}
            <div className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 pt-6">
                <nav
                    aria-label="Sections"
                    className="sticky top-[85px] md:top-28 z-10 self-start flex md:flex-col gap-1 overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0 py-2 md:py-0 bg-bg/85 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-border md:border-0 text-sm"
                >
                    <p className="hidden md:block text-xs text-dim px-3 pb-2">
                        $ cat README.md
                    </p>
                    {c.sections.map((s, n) => (
                        <a
                            key={s.heading}
                            href={`#s${n}`}
                            className="spy shrink-0 rounded-sm px-3 min-h-11 flex items-center text-dim lowercase"
                            style={tl(n)}
                        >
                            {String(n + 1).padStart(2, '0')} {s.heading}
                        </a>
                    ))}
                </nav>
                <div className="flex flex-col gap-14 max-w-content">
                    {c.sections.map((s, n) => (
                        <section
                            key={s.heading}
                            id={`s${n}`}
                            className="spy-target flex flex-col gap-3 scroll-mt-40"
                            style={tl(n)}
                        >
                            <h2 className="text-2xl font-bold wipe">
                                <span className="text-accent">## </span>
                                {s.heading}
                            </h2>
                            <p className="reveal text-base leading-[1.75] text-muted">
                                {s.body}
                            </p>
                        </section>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center gap-6 pt-8 border-t border-border">
                <Link
                    href={`/${lang}/projects`}
                    className="text-sm text-muted hover:text-accent min-h-11 flex items-center"
                >
                    ← cd ..
                </Link>
                <Link
                    href={`/${lang}/projects/${next.slug}`}
                    className="row rounded-sm px-3 py-2 flex flex-col items-end gap-1 text-right"
                >
                    <span className="text-xs text-dim">next →</span>
                    <span className="font-bold">{next.title}</span>
                </Link>
            </div>
        </article>
    );
};

export default Page;
