import React from 'react';
import type { Dictionary } from '../../i18n/dictionaries/en';

const Footer = ({ dict }: { dict: Dictionary }) => {
    return (
        <div className="flex md:justify-between justify-center gap-6 p-6 border-t border-border">
            <p className="flex">
                © 2026 Jonas Fink{' '}
                <span className="hidden md:flex">· {dict.footer.built}</span>
            </p>
            <div className="flex gap-3 text-muted">
                <a href="https://github.com/jonas-fink" target="_blank">
                    github
                </a>
                <a
                    href="https://www.linkedin.com/in/jonas-fink-225335355/"
                    target="_blank"
                >
                    linkedin
                </a>
            </div>
        </div>
    );
};

export default Footer;
