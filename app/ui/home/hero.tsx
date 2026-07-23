import Link from 'next/link';

const Hero = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="badge-status max-w-max">
                <span className="badge-status-dot" />
                AVAILABLE{' '}
                <span className="inline-block -translate-y-0.5">.</span> open to
                work
            </div>
            <h1 className="text-5xl font-bold">
                <span className="text-accent">$</span> hi, ich bin Jonas Fink
            </h1>
            <p className="text-muted">
                Full-Stack Developer{' '}
                <span className="inline-block -translate-y-0.75">.</span> MERN
                Stack <span className="inline-block -translate-y-0.75"> .</span>{' '}
                Kassel
            </p>
            <p>
                Nach über 10 Jahren in der Sozialen Arbeit und Familienhilfe
                habe ich mich zum Full-Stack Developer umgeschult. Meine
                Mission: digitale Lösungen, die Barrieren abbauen und Zugang
                erleichtern — nutzerzentrierte Anwendungen, die wirklich
                gebraucht werden.
            </p>
            <div className="flex gap-3">
                <Link href="/contact" className="btn-primary">
                    Kontakt aufnehmen
                </Link>
                <Link href="/projects" className="btn-secondary">
                    $ ls projects/
                </Link>
            </div>
            <div className="flex gap-6 text-sm text-muted">
                <a href="https://github.com/jonas-fink" target="_blank">
                    github/jonas-fink
                </a>
                <a
                    href="https://www.linkedin.com/in/jonas-fink-225335355/"
                    target="_blank"
                >
                    linkedin/in/jonas-fink
                </a>
                <a href="mailto:fink.jon@hotmail.com">fink.jon@hotmail.com</a>
            </div>
        </div>
    );
};

export default Hero;
