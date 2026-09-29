import { Metadata } from 'next';
import type { CSSProperties, ReactNode } from 'react';
import ContactForm from '../../ui/contact/contactForm';
import { type Locale } from '../../i18n/config';
import { getDictionary } from '../../i18n/get-dictionary';
import { localeAlternates } from '../../i18n/alternates';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    return {
        title: dict.meta.contactTitle,
        description: dict.meta.contactDescription,
        alternates: localeAlternates(lang, '/contact'),
    };
}

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    const t = dict.contact;
    const d = (s: number) => ({ '--d': `${s}s` }) as CSSProperties;
    const facts: [string, ReactNode][] = [
        [
            t.labelEmail,
            <a key="e" href="mailto:jonasfink.dev@gmail.com" className="text-accent">
                jonasfink.dev@gmail.com
            </a>,
        ],
        [t.labelLocation, `${t.location} · GMT+1`],
        [
            t.labelGithub,
            <a key="g" href="https://github.com/jonas-fink" target="_blank">
                github/jonas-fink
            </a>,
        ],
        [
            t.labelLinkedin,
            <a
                key="l"
                href="https://www.linkedin.com/in/jonas-fink-225335355/"
                target="_blank"
            >
                linkedin/in/jonas-fink
            </a>,
        ],
        [
            t.labelResume,
            <a
                key="r"
                href="/resume.pdf"
                download="jonas-fink-resume.pdf"
                className="text-accent"
            >
                {t.resumeLink}
            </a>,
        ],
    ];
    return (
        <div className="grid md:grid-cols-[1fr_520px] gap-10 md:gap-16 pb-6">
            <div className="flex flex-col gap-5">
                <p className="text-sm fade">
                    <span className="text-dim">~ /</span> {t.crumb}
                </p>
                <h1 className="text-4xl md:text-6xl font-bold">
                    <span className="text-accent">$ </span>
                    <span
                        className="type"
                        style={{ '--n': 10, '--dur': '.6s', '--d': '.2s' } as CSSProperties}
                    >
                        mail jonas
                    </span>
                    <span className="cursor" aria-hidden="true" />
                </h1>
                <h2 className="text-2xl font-bold fade" style={d(0.8)}>
                    {t.subheading}
                </h2>
                <p className="text-muted leading-relaxed max-w-md fade" style={d(1)}>
                    {t.intro}
                </p>
            </div>
            <div className="win fade self-start md:row-span-2" style={d(0.5)}>
                <div className="win-bar">
                    <i />
                    <i />
                    <i />
                    <span className="ml-2">mail — jonas@kassel</span>
                </div>
                <ContactForm dict={dict} />
            </div>
            <dl
                className="fade md:col-start-1 grid md:grid-cols-[110px_1fr] gap-x-4 text-sm"
                style={d(1.2)}
            >
                {facts.map(([label, value]) => (
                    <div
                        key={label}
                        className="contents max-md:block max-md:py-3 max-md:border-b max-md:border-border"
                    >
                        <dt className="text-[11px] tracking-widest text-dim md:py-2">
                            {label}
                        </dt>
                        <dd className="md:py-2">{value}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Page;
