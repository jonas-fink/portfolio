import { Metadata } from 'next';
import { Suspense } from 'react';
import Hero from './ui/home/hero';
import Projects from './ui/home/projects';

export const metadata: Metadata = {
    title: 'home',
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
