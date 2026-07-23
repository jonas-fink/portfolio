import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'about',
};

const devData = {
    name: 'Jonas Fink',
    based: 'Kassel, DE // GMT + 1',
    background: '10+ years of social Work -> Full-Stack Dev',
    status: 'open to work',
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

const history = [
    {
        id: 1,
        year: '2026',
        title: 'Bootcamp completed',
        description:
            'Certification for Full-Stack App & Web Development (MERN-Stack) - built own projects, from client management systens to health tracking apps and deployed them.',
    },
    {
        id: 2,
        year: '2025 - today',
        title: 'Bootcamp & first projects',
        description:
            'intensive bootcamp focusing on the MERN - Stack, clean code and usage of generative AI for automation and as coding assistant. Developed personal Full-Stack Applications simultaniously',
    },
    {
        id: 3,
        year: '2014 - today',
        title: 'Social Work & Education',
        description:
            'Over 10 years of experience in family support: casework, coordination, and a keen eye for identifying where processes and systems stand in peoples way instead of helping them.',
    },
];

const Page = () => {
    return (
        <div className="flex flex-col gap-6">
            <p className="pb-6">
                <span className="text-dim text-sm"> ~/ </span> about
            </p>
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">
                    <span className="text-accent">$</span> whoami
                </h1>
                <p className="text-muted">
                    {devData.name}{' '}
                    <span className="inline-block -translate-y-0.75"> . </span>{' '}
                    @jonas-fink
                </p>
                <p>
                    Full-Stack Developer with a mission to use 10+ years of
                    branche knowledge to build accessible apps with a focus on
                    inclusion
                </p>
            </div>
            <div>
                <div className="flex flex-wrap gap-12">
                    <div>
                        <h3 className="text-xs text-dim">NAME</h3>
                        <p>{devData.name}</p>
                    </div>
                    <div>
                        <h3 className="text-xs text-dim">BASED IN</h3>
                        <p>{devData.based}</p>
                    </div>
                    <div>
                        <h3 className="text-xs text-dim">BACKGROUND</h3>
                        <p>{devData.background}</p>
                    </div>
                    <div>
                        <h3 className="text-xs text-dim">STATUS</h3>
                        <p>{devData.status}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12 pt-6">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 text-sm items-center text-dim">
                        {' '}
                        <span className="eyebrow text-accent">01</span> THE
                        LONGER VERSION
                    </div>
                    <h2 className="text-2xl font-bold">
                        A little bit about me
                    </h2>
                    <p>
                        'I spent over a decade working in social work and family
                        support—handling casework, coordination, and witnessing
                        firsthand how processes and systems often hinder people
                        rather than helping them. It was precisely this
                        perspective that led me to software development. My
                        transition into full-stack development (specifically the
                        MERN stack) was therefore not a break from the past, but
                        a continuation: building digital solutions that
                        dismantle barriers and improve access, rather than
                        creating new hurdles. For me, user-centric thinking was
                        never just a methodology—it was my job for ten years.'
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 text-sm items-center text-dim">
                        {' '}
                        <span className="eyebrow text-accent">02</span> TECH
                        STACK
                    </div>
                    <h2 className="text-2xl font-bold">Tools</h2>
                    <div className="flex flex-wrap gap-3 pt-6">
                        {techStack.map((t, index) => (
                            <div key={index} className="pill">
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3 text-sm items-center text-dim">
                        {' '}
                        <span className="eyebrow text-accent">03</span> CAREER
                        HISTORY
                    </div>
                    <h2 className="text-2xl font-bold">The journey</h2>
                    <div className="grid grid-cols-1 gap-6 pt-6">
                        {history.map((h) => (
                            <div className="grid grid-cols-8 border-b border-border gap-3 p-6">
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
