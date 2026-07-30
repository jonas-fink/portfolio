import { Metadata } from 'next';
import ContactForm from '../ui/contact/contactForm';

export const metadata: Metadata = {
    title: 'contact',
    description:
        'Get in touch with Jonas Fink — full-stack developer in Kassel, Germany. Open to permanent roles and freelance projects.',
    alternates: { canonical: '/contact' },
};

const Page = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="text-sm pb-3 font-bold">
                    <span className="text-dim">~ /</span> contact
                </p>
                <div>
                    <h1 className="text-3xl font-bold">
                        <span className="text-accent font-bold">$</span> contact
                        --new
                    </h1>
                    <h3 className="text-2xl">Let&apos;s build something.</h3>
                </div>
                <p className="text-muted">
                    Whether it’s a permanent position or a freelance project –
                    drop me a quick note about what it involves.
                </p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between gap-6">
                <div className="flex flex-col gap-6">
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">EMAIL</h4>
                        <a
                            href="mailto:jonasfink.dev@gmail.com"
                            className="text-accent"
                        >
                            jonasfink.dev@gmail.com
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">STANDORT</h4>
                        <p>
                            Kassel, GER{' '}
                            <span className="inline-block -translate-y-0.75">
                                .
                            </span>{' '}
                            GMT+1
                        </p>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">GITHUB</h4>
                        <a href="https://github.com/jonas-fink" target="_blank">
                            github/jonas-fink
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">LINKEDIN</h4>
                        <a
                            href="https://www.linkedin.com/in/jonas-fink-225335355/"
                            target="_blank"
                        >
                            linkedin/in/jonas-fink
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">RESUME</h4>
                        <a
                            href="/resume.pdf"
                            download="jonas-fink-resume.pdf"
                            className="text-accent"
                        >
                            ↓ Resume (PDF)
                        </a>
                    </div>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default Page;
