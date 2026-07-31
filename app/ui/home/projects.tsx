import { getLocalizedStudies } from '@/app/lib/case-studies';
import ProjectCard from '@/app/ui/projects/project-card';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';

const Projects = ({ lang, dict }: { lang: Locale; dict: Dictionary }) => {
    const featuredStudies = getLocalizedStudies(lang).filter(
        (c) => c.featured === true,
    );

    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-muted">
                <span className="text-accent">02</span> {dict.home.featuredEyebrow}
            </p>
            <h2 className="text-3xl font-bold">{dict.home.featuredHeading}</h2>
            <p className="text-sm text-muted">~/projects/featured</p>
            <div className="grid gap-4 sm:grid-cols-2 pt-3 pb-3">
                {featuredStudies.map((c, index) => (
                    <ProjectCard
                        key={c.slug}
                        c={c}
                        index={index}
                        lang={lang}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
