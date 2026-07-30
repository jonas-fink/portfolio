import { Metadata } from 'next';
import { caseStudies } from '@/app/lib/case-studies';
import ProjectCard from '@/app/ui/projects/project-card';

export const metadata: Metadata = {
    title: 'projects',
    description:
        'Selected full-stack case studies by Jonas Fink — client management, health tracking, and design-system work built with React, TypeScript and Node.',
    alternates: { canonical: '/projects' },
};

const Page = () => {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-sm font-bold">
                <span className="text-dim">~ / </span>projects{' '}
                <span className="inline-block -translate-y-0.75 text-dim">
                    .
                </span>{' '}
                <span className="text-dim">{caseStudies.length} entries</span>
            </p>
            <h1 className="text-3xl font-bold">
                <span className="text-accent ">$</span> ls -al ~/projects
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 pt-3">
                {caseStudies.map((c, index) => (
                    <ProjectCard key={c.slug} c={c} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Page;
