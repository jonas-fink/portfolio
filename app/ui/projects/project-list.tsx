'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CldImage } from 'next-cloudinary';
import type { CaseStudy } from '@/app/lib/case-studies';
import type { Locale } from '@/app/i18n/config';

// ponytail: "ai" is derived from the stack, add a flag to CaseStudy if that gets fuzzy
const filters = {
    all: () => true,
    '--featured': (c: CaseStudy) => !!c.featured,
    '--ai': (c: CaseStudy) => c.tech.some((t) => t.includes('Gemini')),
};
type Filter = keyof typeof filters;

const ProjectList = ({ studies, lang }: { studies: CaseStudy[]; lang: Locale }) => {
    const [filter, setFilter] = useState<Filter>('all');
    const shown = studies.filter(filters[filter]);

    return (
        <>
            <div
                role="group"
                aria-label="Filter"
                className="flex gap-2 overflow-x-auto -mx-6 px-6 sm:mx-0 sm:px-0"
            >
                {(Object.keys(filters) as Filter[]).map((f) => (
                    <button
                        key={f}
                        type="button"
                        aria-pressed={filter === f}
                        onClick={() => setFilter(f)}
                        className={`chip shrink-0 min-h-11 cursor-pointer transition-colors ${
                            filter === f
                                ? 'bg-accent border-accent text-on-accent font-bold'
                                : 'hover:border-accent hover:text-accent'
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <div className="border-t border-border">
                {shown.map((c) => (
                    <Link
                        key={c.slug}
                        href={`/${lang}/projects/${c.slug}`}
                        className="row reveal grid gap-4 md:grid-cols-[48px_240px_1fr_24px] md:gap-7 md:items-center py-6 md:px-4 border-b border-border"
                    >
                        <span className="text-xs text-accent">
                            [{String(studies.indexOf(c) + 1).padStart(2, '0')}]
                        </span>
                        {c.images?.[0] && (
                            <CldImage
                                src={c.images[0]}
                                width={480}
                                height={270}
                                alt=""
                                className="rounded-md border border-border w-full aspect-video object-cover bg-surface"
                            />
                        )}
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-wrap items-baseline gap-x-3">
                                <h2 className="text-xl font-bold">{c.title}</h2>
                                {c.featured && (
                                    <span className="text-[11px] tracking-widest text-accent">
                                        ★ FEATURED
                                    </span>
                                )}
                            </div>
                            <p className="text-xs text-dim">
                                {c.year} · {c.role}
                            </p>
                            <p className="text-sm text-muted leading-relaxed max-w-2xl">
                                {c.summary}
                            </p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                                {c.tech.map((t) => (
                                    <span key={t} className="chip text-xs px-2.5 py-1">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <span
                            aria-hidden="true"
                            className="arrow text-dim text-xl hidden md:block"
                        >
                            →
                        </span>
                    </Link>
                ))}
            </div>
            <p className="text-xs text-dim">-- end of listing --</p>
        </>
    );
};

export default ProjectList;
