import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/app/lib/case-studies';

export const generateStaticParams = () =>
    caseStudies.map((c) => ({ id: c.slug }));

export async function generateMetadata(props: {
    params: Promise<{ id: string }>;
}): Promise<Metadata> {
    const c = getCaseStudy((await props.params).id);
    return { title: c?.title ?? 'Not found' };
}

const Page = async (props: { params: Promise<{ id: string }> }) => {
    const c = getCaseStudy((await props.params).id);
    if (!c) notFound();

    return (
        <article className="flex flex-col gap-6 max-w-content">
            <Link
                href="/projects"
                className="text-sm text-muted hover:text-accent"
            >
                ← projects
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
                                ↗ live
                            </a>
                        )}
                        {c.repo && (
                            <a
                                href={c.repo}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-secondary"
                            >
                                ↗ code
                            </a>
                        )}
                    </div>
                )}
            </header>

            {c.cover && (
                <Image
                    src={c.cover}
                    alt={`${c.title} cover`}
                    width={880}
                    height={495}
                    className="rounded-md border border-border w-full h-auto"
                />
            )}

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
