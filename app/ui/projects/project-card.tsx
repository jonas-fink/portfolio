import Link from 'next/link';
import type { CaseStudy } from '@/app/lib/case-studies';

const ProjectCard = ({ c, index }: { c: CaseStudy; index: number }) => {
    const cardNumber = String(index + 1).padStart(2, '0');
    return (
        <Link
            href={`/projects/${c.slug}`}
            className="card transition-colors hover:border-accent flex flex-col justify-between"
        >
            <div>
                <span className="text-accent text-xs">[{cardNumber}]</span>
                <h2 className="text-xl mb-1">{c.title}</h2>
                <div className="text-xs text-dim mb-3">
                    {c.year} · {c.role}
                </div>
                <p className="text-sm text-muted mb-4">{c.summary}</p>
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
};

export default ProjectCard;
