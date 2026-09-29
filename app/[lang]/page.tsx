import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '../ui/home/hero';
import Projects from '../ui/home/projects';
import CareerLog from '../ui/career-log';
import { type Locale } from '../i18n/config';
import { getDictionary } from '../i18n/get-dictionary';
import { localeAlternates } from '../i18n/alternates';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    return {
        title: { absolute: dict.meta.homeTitle },
        alternates: localeAlternates(lang, ''),
    };
}

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    return (
        <div className="flex flex-col gap-24">
            <Hero lang={lang} dict={dict} />
            <Projects lang={lang} dict={dict} />
            <section className="flex flex-col gap-6">
                <p className="text-sm text-muted reveal">
                    <span className="text-accent font-bold">03</span>{' '}
                    {dict.about.section3Eyebrow}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold wipe">
                    $ git log career
                </h2>
                <CareerLog history={dict.about.history} />
            </section>
            <section className="win reveal">
                <div className="win-bar">
                    <i />
                    <i />
                    <i />
                    <span className="ml-2">mail — jonas@kassel</span>
                </div>
                <div className="p-6 md:p-8 flex md:flex-row flex-col md:items-center justify-between gap-6">
                    <p className="text-2xl font-bold">
                        {dict.contact.subheading}
                        <span className="cursor ml-1.5" aria-hidden="true" />
                    </p>
                    <Link href={`/${lang}/contact`} className="btn-primary">
                        $ mail jonas
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Page;
