import { locales, defaultLocale, type Locale } from './config';

// Per-locale canonical + hreflang alternates for a route.
// path is the route without locale prefix, e.g. '' (home), '/about', '/projects/cms'.
export function localeAlternates(lang: Locale, path: string) {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[l] = `/${l}${path}`;
    languages['x-default'] = `/${defaultLocale}${path}`;
    return { canonical: `/${lang}${path}`, languages };
}
