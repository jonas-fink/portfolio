import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import '../ui/globals.css';
import Header from '../ui/layout/header';
import Footer from '../ui/layout/footer';
import { locales, type Locale } from '../i18n/config';
import { getDictionary } from '../i18n/get-dictionary';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--ff-jetbrains-mono',
});

const ogLocale: Record<Locale, string> = {
    en: 'en_US',
    de: 'de_DE',
    es: 'es_ES',
};

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    return {
        metadataBase: new URL('https://jonasfink.dev'),
        title: {
            default: 'Jonas Fink — Full-Stack Developer',
            template: '%s · Jonas Fink',
        },
        description: dict.meta.homeDescription,
        keywords: [
            'Jonas Fink',
            'Full-Stack Developer',
            'MERN',
            'React',
            'TypeScript',
            'Next.js',
            'Kassel',
        ],
        authors: [{ name: 'Jonas Fink' }],
        creator: 'Jonas Fink',
        openGraph: {
            type: 'website',
            locale: ogLocale[lang],
            url: `https://jonasfink.dev/${lang}`,
            siteName: 'jonasfink.dev',
            title: 'Jonas Fink — Full-Stack Developer',
            description:
                'Full-Stack Developer (MERN) in Kassel. Building accessible, user-centered web applications.',
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Jonas Fink — Full-Stack Developer',
            description:
                'Full-Stack Developer (MERN) in Kassel. Building accessible, user-centered web applications.',
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = (await params) as { lang: Locale };
    const dict = getDictionary(lang);
    return (
        <html
            lang={lang}
            data-accent="amber"
            className={`${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="flex flex-col">
                <Header lang={lang} dict={dict} />
                <main className="min-h-screen max-w-6xl pt-36 mx-auto p-6">
                    {children}
                </main>
                <div className="w-full max-w-6xl mx-auto">
                    <Footer dict={dict} />
                </div>
            </body>
        </html>
    );
}
