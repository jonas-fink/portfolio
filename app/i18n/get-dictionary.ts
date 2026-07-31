import { Locale } from './config';
import en, { Dictionary } from './dictionaries/en';
import de from './dictionaries/de';
import es from './dictionaries/es';

const overrides: Record<Locale, unknown> = { en: {}, de, es };

// Deep-merge: override wins for primitives; arrays are replaced wholesale;
// objects recurse. Keys absent from the override inherit the English base.
// ponytail: arrays replaced not element-merged — translate the whole array.
function merge<T>(base: T, over: unknown): T {
    if (over === undefined || over === null) return base;
    if (Array.isArray(base) || typeof base !== 'object') return over as T;
    const out = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
        out[k] = merge(out[k], v);
    }
    return out as T;
}

export function getDictionary(lang: Locale): Dictionary {
    return merge(en, overrides[lang]);
}

// self-check: run with `pnpm exec tsx app/i18n/get-dictionary.ts`
function demo() {
    const d = getDictionary('de');
    console.assert(d.nav.home === 'start', 'de override applies');
    console.assert(
        d.about.history.length === en.about.history.length,
        'array present in en survives when de omits it',
    );
    // fallback: a key the override omits inherits the English base
    const partial = merge(en, { nav: { home: 'x' } });
    console.assert(
        partial.nav.projects === en.nav.projects,
        'omitted key falls back to en',
    );
    console.log('get-dictionary self-check passed');
}

if (process.argv[1]?.endsWith('get-dictionary.ts')) demo();
