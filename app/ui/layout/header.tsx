'use client';

import { useState } from 'react';
import NavLinks from './nav-links';
import LangSwitcher from './lang-switcher';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';
import Link from 'next/link';

const Header = ({ lang, dict }: { lang: Locale; dict: Dictionary }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex w-full bg-bg/75 backdrop-blur-md border-b border-border px-6 py-5 justify-between items-center fixed z-99">
            <Link href={`/${lang}`} className="font-bold">
                <span className="text-accent">~/</span>jonasfink.dev
            </Link>
            <div className="flex items-center gap-6">
                <nav className="hidden sm:flex gap-6">
                    <NavLinks lang={lang} dict={dict} />
                </nav>
                <div
                    aria-hidden="true"
                    className="hidden md:flex items-center gap-3 text-xs text-accent"
                >
                    <div className="w-24 h-1.5 border border-border p-px">
                        <div className="scroll-bar h-full bg-accent" />
                    </div>
                    <span className="scroll-pct w-8" />
                </div>
                <div className="hidden sm:block">
                    <LangSwitcher />
                </div>
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    className="nav-link sm:hidden min-h-11 min-w-11"
                >
                    {open ? '[ ✕ ]' : '[ ≡ ]'}
                </button>
            </div>
            <div
                aria-hidden="true"
                className="scroll-bar absolute left-0 -bottom-px h-px w-full bg-accent"
            />
            {open && (
                <nav
                    onClick={() => setOpen(false)}
                    className="sm:hidden absolute top-full left-0 w-full h-[calc(100dvh-100%)] flex flex-col bg-bg border-b border-border p-6 [&_a]:text-3xl [&_a]:font-bold [&_a]:py-4 [&_a]:border-b [&_a]:border-border"
                >
                    <NavLinks lang={lang} dict={dict} />
                    <div className="mt-auto">
                        <LangSwitcher />
                    </div>
                </nav>
            )}
        </header>
    );
};

export default Header;
