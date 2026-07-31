import { Metadata } from 'next';
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
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
                <p className="text-sm pb-3 font-bold">
                    <span className="text-dim">~ /</span> {t.crumb}
                </p>
                <div>
                    <h1 className="text-3xl font-bold">
                        <span className="text-accent font-bold">$</span> contact
                        --new
                    </h1>
                    <h3 className="text-2xl">{t.subheading}</h3>
                </div>
                <p className="text-muted">{t.intro}</p>
            </div>
            <div className="flex md:flex-row flex-col md:justify-between gap-6">
                <div className="flex flex-col gap-6">
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">{t.labelEmail}</h4>
                        <a
                            href="mailto:jonasfink.dev@gmail.com"
                            className="text-accent"
                        >
                            jonasfink.dev@gmail.com
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">{t.labelLocation}</h4>
                        <p>
                            {t.location}{' '}
                            <span className="inline-block -translate-y-0.75">
                                .
                            </span>{' '}
                            GMT+1
                        </p>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">{t.labelGithub}</h4>
                        <a href="https://github.com/jonas-fink" target="_blank">
                            github/jonas-fink
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">{t.labelLinkedin}</h4>
                        <a
                            href="https://www.linkedin.com/in/jonas-fink-225335355/"
                            target="_blank"
                        >
                            linkedin/in/jonas-fink
                        </a>
                    </div>
                    <div className="text-sm">
                        <h4 className="text-dim text-xs">{t.labelResume}</h4>
                        <a
                            href="/resume.pdf"
                            download="jonas-fink-resume.pdf"
                            className="text-accent"
                        >
                            {t.resumeLink}
                        </a>
                    </div>
                </div>
                <ContactForm dict={dict} />
            </div>
        </div>
    );
};

export default Page;
