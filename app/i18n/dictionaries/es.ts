import type { DeepPartial } from '../config';
import type { Dictionary } from './en';

// Spanish overrides. Any key omitted here falls back to English (en.ts).
// Reminder: to translate about.history you must provide the WHOLE array.
const es: DeepPartial<Dictionary> = {
    nav: {
        home: 'inicio',
        projects: 'proyectos',
        about: 'sobre mí',
        contact: 'contacto',
    },
    hero: {
        available: 'DISPONIBLE',
        openToWork: 'abierto a nuevas oportunidades',
        greeting: 'Hola, soy Jonas',
        role: 'Desarrollador Full-Stack',
        stack: 'MERN Stack',
        location: 'Kassel',
        intro: 'Del trabajo social al desarrollo full-stack. Tras más de una década en servicios sociales y apoyo a familias, hoy construyo soluciones digitales que derriban barreras y mejoran la accesibilidad. Mi misión: crear aplicaciones centradas en las personas que marquen una diferencia real.',
        reachOut: 'contactar',
    },
    home: {
        featuredEyebrow: 'PROYECTOS DESTACADOS',
        featuredHeading: 'Destacados',
    },
    projects: {
        entries: 'entradas',
        detailLive: 'en vivo',
        detailCode: 'código',
    },
    about: {
        crumb: 'sobre mí',
        handle: '@jonas-fink',
        tagline:
            'Desarrollador Full-Stack con la misión de aprovechar más de 10 años de experiencia en el sector para crear apps accesibles con foco en la inclusión',
        labelName: 'NOMBRE',
        labelBased: 'UBICACIÓN',
        labelBackground: 'TRAYECTORIA',
        labelStatus: 'ESTADO',
        based: 'Kassel, GER // GMT + 1',
        background: '10+ años de trabajo social -> Full-Stack Dev',
        status: 'abierto a nuevas oportunidades',
        section1Eyebrow: 'LA VERSIÓN LARGA',
        section1Heading: 'Un poco sobre mí',
        section1Body:
            'Pasé más de una década trabajando en el ámbito social y el apoyo a familias —gestión de casos, coordinación, y viendo de primera mano cómo los procesos y los sistemas a menudo obstaculizan a las personas en lugar de ayudarlas. Fue precisamente esa perspectiva la que me llevó al desarrollo de software. Mi transición al desarrollo full-stack (concretamente el MERN Stack) no fue, por tanto, una ruptura con el pasado, sino una continuación: construir soluciones digitales que derriben barreras y mejoren el acceso, en lugar de crear nuevos obstáculos. Para mí, pensar en las personas nunca fue solo una metodología —fue mi trabajo durante diez años.',
        section2Eyebrow: 'TECH STACK',
        section2Heading: 'Herramientas',
        section3Eyebrow: 'TRAYECTORIA PROFESIONAL',
        section3Heading: 'El camino',
        history: [
            {
                year: '2026',
                title: 'Bootcamp completado',
                description:
                    'Certificación en desarrollo de apps y web full-stack (MERN Stack) — proyectos propios, desde gestión de clientes hasta apps de seguimiento de salud, desarrollados y desplegados.',
            },
            {
                year: '2025 - hoy',
                title: 'Bootcamp y primeros proyectos',
                description:
                    'Bootcamp intensivo centrado en el MERN Stack, el código limpio y el uso de IA generativa para la automatización y como asistente de código. En paralelo, desarrollo de aplicaciones full-stack propias.',
            },
            {
                year: '2014 - hoy',
                title: 'Trabajo social y formación',
                description:
                    'Más de 10 años de experiencia en apoyo a familias: gestión de casos, coordinación y una mirada atenta para detectar dónde los procesos y sistemas se interponen en el camino de las personas en lugar de ayudarlas.',
            },
        ],
    },
    contact: {
        crumb: 'contacto',
        subheading: 'Construyamos algo.',
        intro: 'Ya sea un puesto fijo o un proyecto freelance, escríbeme unas líneas sobre de qué se trata.',
        labelEmail: 'EMAIL',
        labelLocation: 'UBICACIÓN',
        labelGithub: 'GITHUB',
        labelLinkedin: 'LINKEDIN',
        labelResume: 'CV',
        location: 'Kassel, GER',
        resumeLink: '↓ CV (PDF)',
        form: {
            nameLabel: 'NOMBRE*',
            emailLabel: 'EMAIL*',
            messageLabel: 'MENSAJE*',
            namePlaceholder: 'tu nombre',
            emailPlaceholder: 'tu@ejemplo.com',
            messagePlaceholder: '¿De qué se trata?',
            honeypot: 'Deja este campo en blanco si eres humano',
            send: 'Enviar',
            sending: 'Enviando',
            sent: 'El mensaje ha sido enviado',
        },
        errors: {
            required: 'Todos los campos son obligatorios',
            invalid_email: 'Dirección de email no válida',
            send_failed: 'Error al enviar el mensaje',
        },
    },
    footer: {
        built: 'hecho con Next.js, alojamiento propio',
    },
    meta: {
        homeTitle: 'Jonas Fink — Desarrollador Full-Stack (MERN) en Kassel',
        homeDescription:
            'Desarrollador Full-Stack (MERN) en Kassel, Alemania. De 10+ años en trabajo social a crear aplicaciones web accesibles y centradas en las personas.',
        aboutTitle: 'sobre mí',
        aboutDescription:
            'Jonas Fink — de 10+ años en trabajo social al desarrollo Full-Stack (MERN). Trayectoria, tech stack e historial profesional.',
        projectsTitle: 'proyectos',
        projectsDescription:
            'Case studies full-stack seleccionadas de Jonas Fink — gestión de clientes, seguimiento de salud y trabajo de design systems con React, TypeScript y Node.',
        contactTitle: 'contacto',
        contactDescription:
            'Ponte en contacto con Jonas Fink — desarrollador full-stack en Kassel, Alemania. Abierto a puestos fijos y proyectos freelance.',
    },
};

export default es;
