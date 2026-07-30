import { caseStudies } from '@/app/lib/case-studies';
import ProjectCard from '@/app/ui/projects/project-card';

const Projects = () => {
    const featuredStudies = caseStudies.filter((c) => c.featured === true);

    return (
        <div className="flex flex-col gap-3">
            <p className="text-sm text-muted">
                <span className="text-accent">02</span> FEATURED PROJECTS
            </p>
            <h2 className="text-3xl font-bold">Featured</h2>
            <p className="text-sm text-muted">~/projects/featured</p>
            <div className="grid gap-4 sm:grid-cols-2 pt-3 pb-3">
                {featuredStudies.map((c, index) => (
                    <ProjectCard key={c.slug} c={c} index={index} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
