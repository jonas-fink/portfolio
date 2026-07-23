import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-between gap-6 p-6 border-t border-border">
            <p>© 2026 Jonas Fink · built with Next.js, self-hosted</p>
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
