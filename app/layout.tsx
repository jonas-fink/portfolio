import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './ui/globals.css';
import Header from './ui/layout/header';
import Footer from './ui/layout/footer';

const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--ff-jetbrains-mono',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://jonasfink.dev'),
    title: {
        default: 'Jonas Fink — Full-Stack Developer',
        template: '%s · Jonas Fink',
    },
    description:
        'Full-Stack Developer (MERN) in Kassel, Germany. From 10+ years in social work to building accessible, user-centered web applications.',
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
        locale: 'en_US',
        url: 'https://jonasfink.dev',
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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            data-accent="amber"
            className={`${jetbrainsMono.variable} h-full antialiased`}
        >
            <body className="flex flex-col">
                <Header />
                <main className="min-h-screen max-w-6xl pt-36 mx-auto p-6">
                    {children}
                </main>
                <div className="w-full max-w-6xl mx-auto">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
