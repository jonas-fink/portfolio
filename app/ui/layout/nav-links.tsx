'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';

export default function NavLinks({
    lang,
    dict,
}: {
    lang: Locale;
    dict: Dictionary;
}) {
    const pathname = usePathname();
    const links = [
        { name: dict.nav.home, href: '' },
        { name: dict.nav.projects, href: '/projects' },
        { name: dict.nav.about, href: '/about' },
        { name: dict.nav.contact, href: '/contact' },
    ];

    return (
        <>
            {links.map((link) => {
                const href = `/${lang}${link.href}`;
                return (
                    <Link
                        key={link.href}
                        href={href}
                        className={
                            pathname === href
                                ? 'nav-link-active'
                                : 'nav-link'
                        }
                    >
                        {link.name}
                    </Link>
                );
            })}
        </>
    );
}
