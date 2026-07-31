import { Metadata } from 'next';
import Hero from '../ui/home/hero';
import Projects from '../ui/home/projects';
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
        <div className="flex flex-col gap-18">
            <Hero lang={lang} dict={dict} />
            <Projects lang={lang} dict={dict} />
        </div>
    );
};

export default Page;
