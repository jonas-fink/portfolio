// Source-of-truth dictionary. de.ts / es.ts are partials that override these;
// any key they omit falls back to the English value here (see get-dictionary.ts).
// Note: arrays (e.g. about.history) are replaced wholesale when a locale provides
// them — translate the whole array, not a single entry.

const en = {
    nav: {
        home: 'home',
        projects: 'projects',
        about: 'about',
        contact: 'contact',
    },
    hero: {
        available: 'AVAILABLE',
        openToWork: 'open to work',
        greeting: "Hi, I'm Jonas",
        role: 'Full-Stack Developer',
        stack: 'MERN Stack',
        location: 'Kassel',
        intro: "From Social Work to Full-Stack Development. After more than a decade in social services and family support, I'm now building digital solutions that break down barriers and improve accessibility. My mission: creating user-centered applications that truly make a difference.",
        reachOut: 'reach out',
    },
    home: {
        featuredEyebrow: 'FEATURED PROJECTS',
        featuredHeading: 'Featured',
    },
    projects: {
        entries: 'entries',
        detailLive: 'live',
        detailCode: 'code',
    },
    about: {
        crumb: 'about',
        handle: '@jonas-fink',
        tagline:
            'Full-Stack Developer with a mission to use 10+ years of branche knowledge to build accessible apps with a focus on inclusion',
        labelName: 'NAME',
        labelBased: 'BASED IN',
        labelBackground: 'BACKGROUND',
        labelStatus: 'STATUS',
        based: 'Kassel, GER // GMT + 1',
        background: '10+ years of social Work -> Full-Stack Dev',
        status: 'open to work',
        section1Eyebrow: 'THE LONGER VERSION',
        section1Heading: 'A little bit about me',
        section1Body:
            'I spent over a decade working in social work and family support—handling casework, coordination, and witnessing firsthand how processes and systems often hinder people rather than helping them. It was precisely this perspective that led me to software development. My transition into full-stack development (specifically the MERN stack) was therefore not a break from the past, but a continuation: building digital solutions that dismantle barriers and improve access, rather than creating new hurdles. For me, user-centric thinking was never just a methodology—it was my job for ten years.',
        section2Eyebrow: 'TECH STACK',
        section2Heading: 'Tools',
        section3Eyebrow: 'CAREER HISTORY',
        section3Heading: 'The journey',
        history: [
            {
                year: '2026',
                title: 'Bootcamp completed',
                description:
                    'Certification for Full-Stack App & Web Development (MERN-Stack) - built own projects, from client management systens to health tracking apps and deployed them.',
            },
            {
                year: '2025 - today',
                title: 'Bootcamp & first projects',
                description:
                    'intensive bootcamp focusing on the MERN - Stack, clean code and usage of generative AI for automation and as coding assistant. Developed personal Full-Stack Applications simultaniously',
            },
            {
                year: '2014 - today',
                title: 'Social Work & Education',
                description:
                    'Over 10 years of experience in family support: casework, coordination, and a keen eye for identifying where processes and systems stand in peoples way instead of helping them.',
            },
        ],
    },
    contact: {
        crumb: 'contact',
        subheading: "Let's build something.",
        intro: 'Whether it’s a permanent position or a freelance project – drop me a quick note about what it involves.',
        labelEmail: 'EMAIL',
        labelLocation: 'LOCATION',
        labelGithub: 'GITHUB',
        labelLinkedin: 'LINKEDIN',
        labelResume: 'RESUME',
        location: 'Kassel, GER',
        resumeLink: '↓ Resume (PDF)',
        form: {
            nameLabel: 'NAME*',
            emailLabel: 'EMAIL*',
            messageLabel: 'MESSAGE*',
            namePlaceholder: 'your name',
            emailPlaceholder: 'you@example.com',
            messagePlaceholder: 'What is it about?',
            honeypot: 'Leave this field blank if you are human',
            send: 'Send',
            sending: 'Sending',
            sent: 'Message has been sent',
        },
        errors: {
            required: 'All fields are required',
            invalid_email: 'Invalid email address',
            send_failed: 'Error sending the mail',
        },
    },
    footer: {
        built: 'built with Next.js, self-hosted',
    },
    meta: {
        homeTitle: 'Jonas Fink — Full-Stack Developer (MERN) in Kassel',
        homeDescription:
            'Full-Stack Developer (MERN) in Kassel, Germany. From 10+ years in social work to building accessible, user-centered web applications.',
        aboutTitle: 'about',
        aboutDescription:
            'Jonas Fink — from 10+ years in social work to Full-Stack (MERN) development. Background, tech stack, and career history.',
        projectsTitle: 'projects',
        projectsDescription:
            'Selected full-stack case studies by Jonas Fink — client management, health tracking, and design-system work built with React, TypeScript and Node.',
        contactTitle: 'contact',
        contactDescription:
            'Get in touch with Jonas Fink — full-stack developer in Kassel, Germany. Open to permanent roles and freelance projects.',
    },
};

export default en;
export type Dictionary = typeof en;
