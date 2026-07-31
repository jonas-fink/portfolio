import { Metadata } from 'next';
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

    return (
        <article className="flex flex-col gap-6 max-w-content pb-6">
            <Link
                href={`/${lang}/projects`}
                className="text-sm text-muted hover:text-accent"
            >
                ← cd ..
            </Link>

            <header className="flex flex-col gap-2">
                <h1 className="text-3xl">{c.title}</h1>
                <div className="text-xs text-dim">
                    {c.year} · {c.role}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                    {c.tech.map((t) => (
                        <span key={t} className="chip">
                            {t}
                        </span>
                    ))}
                </div>
                {(c.live || c.repo) && (
                    <div className="flex gap-3 mt-3">
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
            </header>

            {c.cover && (
                <CldImage
                    src={c.cover}
                    alt={`${c.title} cover`}
                    width={880}
                    height={495}
                    className="rounded-md border border-border w-full h-auto"
                />
            )}

            {c.images?.length || c.videos?.length ? (
                <MediaGallery
                    title={c.title}
                    images={c.images}
                    videos={c.videos}
                />
            ) : null}

            {c.sections.map((s) => (
                <section key={s.heading} className="flex flex-col gap-2">
                    <h2 className="text-lg text-accent">{s.heading}</h2>
                    <p className="text-base leading-[1.65] text-muted">
                        {s.body}
                    </p>
                </section>
            ))}
        </article>
    );
};

export default Page;
