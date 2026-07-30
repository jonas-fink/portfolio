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
            <h1 className="text-5xl font-bold ">
                <span className="text-accent">$</span> Hi, I'm Jonas
            </h1>
            <p className="text-muted">
                Full-Stack Developer{' '}
                <span className="inline-block -translate-y-0.75">.</span> MERN
                Stack <span className="inline-block -translate-y-0.75"> .</span>{' '}
                Kassel
            </p>
            <p>
                From Social Work to Full-Stack Development. After more than a
                decade in social services and family support, I’m now building
                digital solutions that break down barriers and improve
                accessibility. My mission: creating user-centered applications
                that truly make a difference.
            </p>
            <div className="flex md:flex-row flex-col gap-3 md:w-1/3">
                <Link href="/contact" className="btn-primary md:w-1/2">
                    reach out
                </Link>
                <Link href="/projects" className="btn-secondary md:w-1/2">
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
                <a href="mailto:jonasfink.dev@gmail.com">
                    jonasfink.dev@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Hero;
