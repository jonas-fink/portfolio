'use client';

import React from 'react';
import Link from 'next/link';
import NavLinks from './nav-links';

const Header = () => {
    return (
        <header className="flex w-full bg-bg border border-b border-border p-6 justify-between fixed">
            <h1 className="font-bold">
                <span className="text-accent">~/</span>jonasfink.dev
            </h1>
            <div>
                <nav className="flex gap-6">
                    <NavLinks />
                </nav>
            </div>
        </header>
    );
};

export default Header;
