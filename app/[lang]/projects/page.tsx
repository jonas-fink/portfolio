import { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { getLocalizedStudies } from '@/app/lib/case-studies';
import ProjectList from '@/app/ui/projects/project-list';
import { type Locale } from '../../i18n/config';
import { getDictionary } from '../../i18n/get-dictionary';
import { localeAlternates } from '../../i18n/alternates';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    return {
        title: dict.meta.projectsTitle,
        description: dict.meta.projectsDescription,
        alternates: localeAlternates(lang, '/projects'),
    };
}

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    const studies = getLocalizedStudies(lang);
    return (
        <div className="flex flex-col gap-6">
            <p className="text-sm font-bold fade">
                <span className="text-dim">~ / </span>projects{' '}
                <span className="inline-block -translate-y-0.75 text-dim">
                    .
                </span>{' '}
                <span className="text-dim">
                    {studies.length} {dict.projects.entries}
                </span>
            </p>
            <h1 className="text-3xl md:text-5xl font-bold">
                <span className="text-accent">$ </span>
                <span
                    className="type"
                    style={{ '--n': 13, '--dur': '.8s', '--d': '.2s' } as CSSProperties}
                >
                    ls ~/projects
                </span>
                <span className="cursor" aria-hidden="true" />
            </h1>
            <ProjectList studies={studies} lang={lang} />
        </div>
    );
};

export default Page;
