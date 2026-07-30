import type { MetadataRoute } from 'next';
import { caseStudies } from '@/app/lib/case-studies';

const BASE = 'https://jonasfink.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/projects', '/about', '/contact'].map((path) => ({
        url: `${BASE}${path}`,
        lastModified: new Date(),
    }));

    const projects = caseStudies.map((c) => ({
        url: `${BASE}/projects/${c.slug}`,
        lastModified: new Date(),
    }));

    return [...routes, ...projects];
}
