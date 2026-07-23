import { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/app/lib/case-studies';

export const metadata: Metadata = {
    title: 'projects',
};

const Page = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="eyebrow">
                <span className="eyebrow-num">02</span> CASE STUDIES
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
                {caseStudies.map((c) => (
                    <Link
                        key={c.slug}
                        href={`/projects/${c.slug}`}
                        className="card transition-colors hover:border-accent"
                    >
                        <h2 className="text-xl mb-1">{c.title}</h2>
                        <div className="text-xs text-dim mb-3">
                            {c.year} · {c.role}
                        </div>
                        <p className="text-sm text-muted mb-4">{c.summary}</p>
                        <div className="flex flex-wrap gap-2">
                            {c.tech.map((t) => (
                                <span key={t} className="chip">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Page;
