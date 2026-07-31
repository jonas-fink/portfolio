'use client';

import { useState } from 'react';
import NavLinks from './nav-links';
import LangSwitcher from './lang-switcher';
import type { Locale } from '../../i18n/config';
import type { Dictionary } from '../../i18n/dictionaries/en';

const Header = ({ lang, dict }: { lang: Locale; dict: Dictionary }) => {
    const [open, setOpen] = useState(false);

    return (
        <header className="flex w-full bg-bg border border-b border-border p-6 justify-between fixed z-99">
            <h1 className="font-bold">
                <span className="text-accent">~/</span>jonasfink.dev
            </h1>
            <div className="flex items-center gap-6">
                <nav className="hidden sm:flex gap-6">
                    <NavLinks lang={lang} dict={dict} />
                </nav>
                <div className="hidden sm:block">
                    <LangSwitcher />
                </div>
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle navigation"
                    className="nav-link sm:hidden"
                >
                    {open ? '[ ✕ ]' : '[ ≡ ]'}
                </button>
            </div>
            {open && (
                <nav
                    onClick={() => setOpen(false)}
                    className="sm:hidden absolute top-full left-0 w-full flex flex-col gap-4 bg-bg border-b border-border p-6"
                >
                    <NavLinks lang={lang} dict={dict} />
                    <LangSwitcher />
                </nav>
            )}
        </header>
    );
};

export default Header;
