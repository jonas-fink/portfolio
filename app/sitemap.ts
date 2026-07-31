import type { MetadataRoute } from 'next';
import { caseStudies } from '@/app/lib/case-studies';
import { locales, defaultLocale } from '@/app/i18n/config';

const BASE = 'https://jonasfink.dev';

// One entry per locale per route, each carrying the full hreflang alternates set.
function localized(path: string): MetadataRoute.Sitemap {
    const languages = Object.fromEntries(
        locales.map((l) => [l, `${BASE}/${l}${path}`]),
    );
    return locales.map((l) => ({
        url: `${BASE}/${l}${path}`,
        lastModified: new Date(),
        alternates: {
            languages: { ...languages, 'x-default': `${BASE}/${defaultLocale}${path}` },
        },
    }));
}

export default function sitemap(): MetadataRoute.Sitemap {
    const paths = [
        '',
        '/projects',
        '/about',
        '/contact',
        ...caseStudies.map((c) => `/projects/${c.slug}`),
    ];
    return paths.flatMap(localized);
}
