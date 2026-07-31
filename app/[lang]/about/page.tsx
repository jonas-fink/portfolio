import { Metadata } from 'next';
import Image from 'next/image';
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
    // ponytail: Cloudinary already does f_auto/q_auto, so next/image runs unoptimized
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
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-center items-center gap-6 md:flex-row flex-col pb-6">
                <div className="flex flex-col gap-6">
                    <p>
                        <span className="text-dim text-sm"> ~ / </span>{' '}
                        {t.crumb}
                    </p>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold">
                            <span className="text-accent">$</span> whoami
                        </h1>
                        <p className="text-muted">
                            {devData.name}{' '}
                            <span className="inline-block -translate-y-0.75">
                                {' '}
                                .{' '}
                            </span>{' '}
                            {t.handle}
                        </p>
                        <p>{t.tagline}</p>
                    </div>
                </div>
                <Image
                    src={devData.image}
                    alt="Picture of Jonas"
                    width={300}
                    height={300}
                    loading="eager"
                    unoptimized
                    className="rounded-xl shadow-[0.5px_0.5px_0px_0.5px_var(--tw-shadow-color)] shadow-amber-500"
                />
            </div>
            <div>
                <div className="flex flex-wrap gap-12">
                    <div>
                        <h3 className="text-xs text-dim">{t.labelName}</h3>
                        <p>{devData.name}</p>
                    </div>
                    <div>
                        <h3 className="text-xs text-dim">{t.labelBased}</h3>
                        <p>{t.based}</p>
                    </div>
                    <div>
                        <h3 className="text-xs text-dim">
                            {t.labelBackground}
                        </h3>
                        <p>{t.background}</p>
                    </div>
                    <div>
                        <h3 className="text-xs text-dim">{t.labelStatus}</h3>
                        <p>{t.status}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 pt-6">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 text-sm items-center text-dim">
                        {' '}
                        <span className="eyebrow text-accent">01</span>{' '}
                        {t.section1Eyebrow}
                    </div>
                    <h2 className="text-2xl font-bold">{t.section1Heading}</h2>
                    <p>{t.section1Body}</p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 text-sm items-center text-dim">
                        {' '}
                        <span className="eyebrow text-accent">02</span>{' '}
                        {t.section2Eyebrow}
                    </div>
                    <h2 className="text-2xl font-bold">{t.section2Heading}</h2>
                    <div className="flex flex-wrap gap-3 pt-6">
                        {techStack.map((tech, index) => (
                            <div key={index} className="pill">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 text-sm items-center text-dim">
                        {' '}
                        <span className="eyebrow text-accent">03</span>{' '}
                        {t.section3Eyebrow}
                    </div>
                    <h2 className="text-2xl font-bold">{t.section3Heading}</h2>
                    <div className="grid grid-cols-1 gap-6 pt-6">
                        {t.history.map((h, i) => (
                            <div
                                key={i}
                                className="md:grid md:grid-cols-8 border-b border-border gap-3 p-6"
                            >
                                <p className="eyebrow text-accent col-span-1 font-bold">
                                    {h.year}
                                </p>
                                <div className="col-span-7">
                                    <h3 className="font-bold pb-3">
                                        {h.title}
                                    </h3>
                                    <p className="text-muted">
                                        {h.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
