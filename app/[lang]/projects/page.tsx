import { Metadata } from 'next';
import { getLocalizedStudies } from '@/app/lib/case-studies';
import ProjectCard from '@/app/ui/projects/project-card';
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
            <p className="text-sm font-bold">
                <span className="text-dim">~ / </span>projects{' '}
                <span className="inline-block -translate-y-0.75 text-dim">
                    .
                </span>{' '}
                <span className="text-dim">
                    {studies.length} {dict.projects.entries}
                </span>
            </p>
            <h1 className="text-3xl font-bold">
                <span className="text-accent ">$</span> ls -al ~/projects
            </h1>
            <div className="grid gap-4 sm:grid-cols-2 pt-3">
                {studies.map((c, index) => (
                    <ProjectCard key={c.slug} c={c} index={index} lang={lang} />
                ))}
            </div>
        </div>
    );
};

export default Page;
