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
    featured?: boolean;
    sections: { heading: string; body: string }[];
};

export const caseStudies: CaseStudy[] = [
    {
        slug: 'fink-dev',
        title: 'fink.dev',
        year: '2026',
        role: 'Full-Stack Developer',
        summary: 'This portfolio, built as a living Next.js 16 and Tailwind v4 design system rather than a static template. Every visual choice — color, typography, spacing — is a token, so the whole site can be re-themed at runtime without touching a single component.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind v4'],
        live: 'https://fink.dev',
        repo: 'https://github.com/clizzix/fink-dev',
        featured: false,
        sections: [
            {
                heading: 'Problem',
                body: 'I wanted a portfolio that doubled as a living design system rather than a one-off template. That meant no hard-coded colors or fonts scattered across components, and a setup where changing the look of the entire site would come down to editing a handful of values in one place.',
            },
            {
                heading: 'Solution',
                body: 'I built a token-driven Tailwind v4 setup where accent color, font, and the light/dark theme are all defined as CSS variables. Because those variables are read at runtime, the site can swap its entire appearance instantly in the browser — no rebuild, no page reload, and no duplicated theme code.',
            },
        ],
    },
    {
        slug: 'cms',
        title: 'Client Management System for Social Work',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'Dashboards for specialists and coordinators in the field of social work: reports, ' +
            'documentation, workload, vacation/ sick leave, working hours, and appointment ' +
            'management. Shared and RBAC protected file storage per client, notification and ' +
            'invitation system for appointments.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind v4',
            'Node.js',
            'Express.js',
            'AWS S3',
            'MongoDB',
        ],
        live: 'No live demo (This is a project with focus on data security, its build to work in a VPN)',
        repo: 'https://github.com/jonas-fink/cms-spfh',
        featured: true,
        sections: [
            {
                heading: 'Problem',
                body:
                    'Having worked in this field myself, I saw how many organizations stitch together ' +
                    'a handful of disconnected tools to run their administration. The daily processes ' +
                    'grind against constant friction: there is no transparency into who is actually ' +
                    'carrying how much workload, and avoidable mistakes creep in because — even in 2026 — ' +
                    'people are still reconciling lists by hand.',
            },
            {
                heading: 'Solution',
                body:
                    'A single, role-driven platform replaces the scattered tools. One shell renders ' +
                    'the right workspace for each role: social workers see their assigned families, log ' +
                    'appointments, upload reports, track working time and request vacation, while admins ' +
                    'oversee caseload, working-time and workload across the whole team. ' +
                    'Ring-chart workload views make each person’s actual load visible at a glance, ' +
                    'ending the manual list-comparing. A shared weekly planner merges client appointments ' +
                    'and internal events like team meetings, where both admins and social workers send tandem ' +
                    'invitations, pick available colleagues and RSVP through an in-app notification bell. ' +
                    'The same request-and-approve flow covers vacation, overtime reduction and sick leave.',
            },
        ],
    },
];

export const getCaseStudy = (slug: string) =>
    caseStudies.find((c) => c.slug === slug);
