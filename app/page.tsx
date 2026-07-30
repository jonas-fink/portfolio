import { Metadata } from 'next';
import Hero from './ui/home/hero';
import Projects from './ui/home/projects';

export const metadata: Metadata = {
    title: { absolute: 'Jonas Fink — Full-Stack Developer (MERN) in Kassel' },
    alternates: { canonical: '/' },
};

const Page = () => {
    return (
        <div className="flex flex-col gap-18">
            <Hero />
            <Projects />
        </div>
    );
};

export default Page;
