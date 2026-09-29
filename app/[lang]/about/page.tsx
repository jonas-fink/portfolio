import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import CareerLog from '../../ui/career-log';
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
        title: dict.meta.aboutTitle,
        description: dict.meta.aboutDescription,
        alternates: localeAlternates(lang, '/about'),
    };
}

const devData = {
    name: 'Jonas Fink',
    image: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto,w_800/copy_of_profile_mjv8kv`,
};

const techStack = [
    'TypeScript',
    'JavaScript',
    'React',
    'MongoDB',
    'SQL',
    'AWS',
    'HTML5',
    'CSS3',
    'GitHub',
    'Postman',
    'AI-Assisted Development',
];

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    const t = dict.about;
    const facts = [
        [t.labelName, devData.name],
        [t.labelBased, t.based],
        [t.labelBackground, t.background],
        [t.labelStatus, t.status],
    ];
    const eyebrow = (n: string, label: string) => (
        <p className="text-sm text-dim reveal">
            <span className="text-accent font-bold">{n}</span> {label}
        </p>
    );
    return (
        <div className="flex flex-col gap-20">
            <section className="grid md:grid-cols-[1fr_320px] gap-10 md:gap-16 items-center">
                <div className="flex flex-col gap-5">
                    <p className="text-sm fade">
                        <span className="text-dim">~ /</span> {t.crumb}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold">
                        <span className="text-accent">$ </span>
                        <span
                            className="type"
                            style={{ '--n': 6, '--dur': '.5s', '--d': '.2s' } as CSSProperties}
                        >
                            whoami
                        </span>
                        <span className="cursor" aria-hidden="true" />
                    </h1>
                    <p className="text-muted fade" style={{ '--d': '.8s' } as CSSProperties}>
                        {devData.name} <span className="text-dim">·</span> {t.handle}
                    </p>
                    <p
                        className="text-lg leading-relaxed max-w-xl fade"
                        style={{ '--d': '1s' } as CSSProperties}
                    >
                        {t.tagline}
                    </p>
                </div>
                <div className="win fade" style={{ '--d': '.5s' } as CSSProperties}>
                    <div className="win-bar">
                        <i />
                        <i />
                        <i />
                        <span className="ml-2">portrait.jpg</span>
                    </div>
                    <Image
                        src={devData.image}
                        alt="Picture of Jonas"
                        width={320}
                        height={320}
                        loading="eager"
                        unoptimized
                        className="w-full h-auto"
                    />
                </div>
            </section>

            <dl className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border -mt-8">
                {facts.map(([label, value]) => (
                    <div key={label} className="bg-bg p-4 md:p-5 flex flex-col gap-2">
                        <dt className="text-[11px] tracking-widest text-dim">{label}</dt>
                        <dd className="text-sm md:text-base flex items-center gap-2">
                            {label === t.labelStatus && (
                                <span className="badge-status-dot" />
                            )}
                            {value}
                        </dd>
                    </div>
                ))}
            </dl>

            <section className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-16">
                <div className="flex flex-col gap-3">
                    {eyebrow('01', t.section1Eyebrow)}
                    <h2 className="text-2xl md:text-3xl font-bold wipe">
                        {t.section1Heading}
                    </h2>
                </div>
                <p className="reveal text-muted leading-[1.8] md:text-lg">
                    {t.section1Body}
                </p>
            </section>

            <section className="grid md:grid-cols-[280px_1fr] gap-4 md:gap-16">
                <div className="flex flex-col gap-3">
                    {eyebrow('02', t.section2Eyebrow)}
                    <h2 className="text-2xl md:text-3xl font-bold wipe">$ npm ls</h2>
                </div>
                <div className="win reveal px-5 py-4 md:px-7 md:py-6 leading-8">
                    <p className="text-accent">
                        jonas@2026.0.0 <span className="text-dim">~/stack</span>
                    </p>
                    <ul className="grid sm:grid-cols-2 sm:gap-x-8">
                        {techStack.map((tech, i) => (
                            <li key={tech}>
                                <span className="text-dim" aria-hidden="true">
                                    {i === techStack.length - 1 ? '└── ' : '├── '}
                                </span>
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="grid md:grid-cols-[280px_1fr] gap-6 md:gap-16">
                <div className="flex flex-col gap-3">
                    {eyebrow('03', t.section3Eyebrow)}
                    <h2 className="text-2xl md:text-3xl font-bold wipe">
                        {t.section3Heading}
                    </h2>
                </div>
                <CareerLog history={t.history} />
            </section>

            <section className="win reveal p-6 md:p-8 flex md:flex-row flex-col md:items-center justify-between gap-5 mb-6">
                <p className="text-xl md:text-2xl font-bold">
                    {dict.contact.subheading}
                </p>
                <div className="flex md:flex-row flex-col gap-3">
                    <a
                        href="/resume.pdf"
                        download="jonas-fink-resume.pdf"
                        className="btn-secondary"
                    >
                        {dict.contact.resumeLink}
                    </a>
                    <Link href={`/${lang}/contact`} className="btn-primary">
                        {dict.hero.reachOut}
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Page;
