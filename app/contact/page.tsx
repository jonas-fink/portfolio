import { Metadata } from 'next';
import ContactForm from '../ui/contact/contactForm';

export const metadata: Metadata = {
    title: 'contact',
};

const Page = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="text-xs">
                    <span className="text-muted">~ /</span> contact
                </p>
                <div>
                    <h2 className="text-3xl font-bold">
                        <span className="text-accent font-bold">$</span> contact
                        --new
                    </h2>
                    <h3 className="text-2xl">Let's build something.</h3>
                </div>
                <p className="text-muted">
                    Whether it’s a permanent position or a freelance project –
                    drop me a quick note about what it involves.
                </p>
            </div>
            <div className="flex justify-between">
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
                            Kassel, DE{' '}
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
                        <a href="https://github.com/jonas-fink" target="_blank">
                            linkedin/in/jonas-fink
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">RESUME</h4>
                        <a
                            href="https://github.com/jonas-fink"
                            target="_blank"
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
