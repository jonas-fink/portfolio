'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales, isLocale } from '../../i18n/config';

const names: Record<string, string> = {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
};

export default function LangSwitcher() {
    const router = useRouter();
    const segments = usePathname().split('/'); // ['', 'de', 'about', …]
    const current = isLocale(segments[1]) ? segments[1] : 'en';
    const rest = isLocale(segments[1])
        ? segments.slice(2).join('/')
        : segments.slice(1).join('/');

    return (
        <select
            aria-label="Language"
            value={current}
            onChange={(e) =>
                router.push(`/${e.target.value}${rest ? `/${rest}` : ''}`)
            }
            // ponytail: mobile nav closes on click; don't let the select bubble
            onClick={(e) => e.stopPropagation()}
            className="nav-link bg-bg cursor-pointer w-full sm:w-auto min-h-11 sm:min-h-0"
        >
            {locales.map((l) => (
                <option key={l} value={l}>
                    {names[l]}
                </option>
            ))}
        </select>
    );
}
