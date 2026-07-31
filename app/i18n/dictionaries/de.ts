import type { DeepPartial } from '../config';
import type { Dictionary } from './en';

// German overrides. Any key omitted here falls back to English (en.ts).
// Reminder: to translate about.history you must provide the WHOLE array.
const de: DeepPartial<Dictionary> = {
    nav: {
        home: 'start',
        projects: 'projekte',
        about: 'über mich',
        contact: 'kontakt',
    },
    hero: {
        available: 'VERFÜGBAR',
        openToWork: 'offen für neue Aufgaben',
        greeting: 'Hi, ich bin Jonas',
        role: 'Full-Stack-Entwickler',
        stack: 'MERN Stack',
        location: 'Kassel',
        intro: 'Von der Sozialen Arbeit zur Full-Stack-Entwicklung. Nach über zehn Jahren in der Sozialen Arbeit und Familienhilfe entwickle ich heute digitale Lösungen, die Barrieren abbauen und Zugänglichkeit verbessern. Meine Mission: nutzerzentrierte Anwendungen zu schaffen, die wirklich einen Unterschied machen.',
        reachOut: 'Kontakt aufnehmen',
    },
    home: {
        featuredEyebrow: 'AUSGEWÄHLTE PROJEKTE',
        featuredHeading: 'Ausgewählt',
    },
    projects: {
        entries: 'Einträge',
        detailLive: 'live',
        detailCode: 'code',
    },
    about: {
        crumb: 'über mich',
        handle: '@jonas-fink',
        tagline:
            'Full-Stack-Entwickler mit der Mission, über 10 Jahre Branchenwissen zu nutzen, um barrierefreie Apps mit Fokus auf Inklusion zu entwickeln',
        labelName: 'NAME',
        labelBased: 'STANDORT',
        labelBackground: 'HINTERGRUND',
        labelStatus: 'STATUS',
        based: 'Kassel, GER // GMT + 1',
        background: '10+ Jahre Soziale Arbeit -> Full-Stack-Dev',
        status: 'offen für neue Aufgaben',
        section1Eyebrow: 'DIE LÄNGERE VERSION',
        section1Heading: 'Ein bisschen über mich',
        section1Body:
            'Ich habe über ein Jahrzehnt in der Sozialen Arbeit und Familienhilfe gearbeitet – Fallarbeit, Koordination, und dabei aus erster Hand erlebt, wie Prozesse und Systeme Menschen oft eher behindern als ihnen zu helfen. Genau diese Perspektive hat mich zur Softwareentwicklung geführt. Mein Wechsel in die Full-Stack-Entwicklung (konkret den MERN Stack) war deshalb kein Bruch mit der Vergangenheit, sondern eine Fortsetzung: digitale Lösungen zu bauen, die Barrieren abbauen und Zugänge verbessern, statt neue Hürden zu schaffen. Nutzerzentriertes Denken war für mich nie nur eine Methode – es war zehn Jahre lang mein Beruf.',
        section2Eyebrow: 'TECH STACK',
        section2Heading: 'Werkzeuge',
        section3Eyebrow: 'BERUFLICHER WERDEGANG',
        section3Heading: 'Der Weg',
        history: [
            {
                year: '2026',
                title: 'Bootcamp abgeschlossen',
                description:
                    'Zertifizierung für Full-Stack App- & Web-Entwicklung (MERN-Stack) – eigene Projekte umgesetzt, vom Klientenmanagement bis zu Health-Tracking-Apps, und deployed.',
            },
            {
                year: '2025 - heute',
                title: 'Bootcamp & erste Projekte',
                description:
                    'Intensives Bootcamp mit Fokus auf den MERN-Stack, sauberen Code und den Einsatz generativer KI zur Automatisierung und als Coding-Assistent. Parallel eigene Full-Stack-Anwendungen entwickelt.',
            },
            {
                year: '2014 - heute',
                title: 'Soziale Arbeit & Ausbildung',
                description:
                    'Über 10 Jahre Erfahrung in der Familienhilfe: Fallarbeit, Koordination und ein geschärfter Blick dafür, wo Prozesse und Systeme Menschen im Weg stehen, statt ihnen zu helfen.',
            },
        ],
    },
    contact: {
        crumb: 'kontakt',
        subheading: 'Lass uns etwas bauen.',
        intro: 'Ob Festanstellung oder Freelance-Projekt – schreib mir kurz, worum es geht.',
        labelEmail: 'E-MAIL',
        labelLocation: 'STANDORT',
        labelGithub: 'GITHUB',
        labelLinkedin: 'LINKEDIN',
        labelResume: 'LEBENSLAUF',
        location: 'Kassel, GER',
        resumeLink: '↓ Lebenslauf (PDF)',
        form: {
            nameLabel: 'NAME*',
            emailLabel: 'E-MAIL*',
            messageLabel: 'NACHRICHT*',
            namePlaceholder: 'dein Name',
            emailPlaceholder: 'du@beispiel.de',
            messagePlaceholder: 'Worum geht es?',
            honeypot: 'Lass dieses Feld leer, wenn du ein Mensch bist',
            send: 'Senden',
            sending: 'Wird gesendet',
            sent: 'Nachricht wurde gesendet',
        },
        errors: {
            required: 'Alle Felder sind erforderlich',
            invalid_email: 'Ungültige E-Mail-Adresse',
            send_failed: 'Fehler beim Senden der Nachricht',
        },
    },
    footer: {
        built: 'gebaut mit Next.js, selbst gehostet',
    },
    meta: {
        homeTitle: 'Jonas Fink — Full-Stack-Entwickler (MERN) in Kassel',
        homeDescription:
            'Full-Stack-Entwickler (MERN) in Kassel. Von 10+ Jahren Sozialer Arbeit zu barrierefreien, nutzerzentrierten Web-Anwendungen.',
        aboutTitle: 'über mich',
        aboutDescription:
            'Jonas Fink — von 10+ Jahren Sozialer Arbeit zur Full-Stack-Entwicklung (MERN). Hintergrund, Tech Stack und beruflicher Werdegang.',
        projectsTitle: 'projekte',
        projectsDescription:
            'Ausgewählte Full-Stack-Case-Studies von Jonas Fink — Klientenmanagement, Health-Tracking und Design-System-Arbeit mit React, TypeScript und Node.',
        contactTitle: 'kontakt',
        contactDescription:
            'Nimm Kontakt mit Jonas Fink auf — Full-Stack-Entwickler in Kassel. Offen für Festanstellungen und Freelance-Projekte.',
    },
};

export default de;
