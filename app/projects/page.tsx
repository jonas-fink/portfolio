import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/app/lib/case-studies';

export const metadata: Metadata = {
    title: 'projects',
};

const Page = () => {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-sm">
                <span className="text-dim">~ / </span>projects{' '}
                <span className="inline-block -translate-y-0.75 text-dim">
                    .
                </span>{' '}
                <span className="text-dim">{caseStudies.length} einträge</span>
            </p>
            <div className="text-3xl">
                <span className="text-accent">$</span> ls -al ~/projects
            </div>
            <div className="grid gap-4 sm:grid-cols-2 pt-3">
                {caseStudies.map((c, index) => {
                    const cardNumber = String(index + 1).padStart(2, '0');
                    return (
                        <Link
                            key={c.slug}
                            href={`/projects/${c.slug}`}
                            className="card transition-colors hover:border-accent flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-accent text-xs">
                                    [{cardNumber}]
                                </span>
                                <h2 className="text-xl mb-1">{c.title}</h2>
                                <div className="text-xs text-dim mb-3">
                                    {c.year} · {c.role}
                                </div>
                                <p className="text-sm text-muted mb-4">
                                    {c.summary}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {c.tech.map((t) => (
                                    <span key={t} className="chip">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Page;
