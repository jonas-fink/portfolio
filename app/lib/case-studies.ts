export type CaseStudy = {
    slug: string;
    title: string;
    year: string;
    role: string;
    summary: string; // one-liner shown on the index card
    tech: string[];
    cover?: string; // e.g. '/case/fink-dev/cover.png' (under public/)
    live?: string;
    repo?: string;
    sections: { heading: string; body: string }[];
};

export const caseStudies: CaseStudy[] = [
    {
        slug: 'fink-dev',
        title: 'fink.dev',
        year: '2026',
        role: 'Full-Stack Developer',
        summary: 'This portfolio — a Next.js 16 + Tailwind v4 design system.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind v4'],
        live: 'https://fink.dev',
        repo: 'https://github.com/clizzix/fink-dev',
        sections: [
            {
                heading: 'Problem',
                body: 'Needed a portfolio that doubled as a living design system, not a one-off template.',
            },
            {
                heading: 'Solution',
                body: 'Built a token-driven Tailwind v4 setup where accent color, font, and light/dark all swap at runtime via CSS variables — no rebuild.',
            },
        ],
    },
];

export const getCaseStudy = (slug: string) =>
    caseStudies.find((c) => c.slug === slug);
