export type CaseStudy = {
    slug: string;
    title: string;
    year: string;
    role: string;
    summary: string;
    tech: string[];
    // cover / images / videos hold Cloudinary public IDs (e.g. 'fink-dev/shot1'), not URLs
    cover?: string;
    live?: string;
    repo?: string;
    featured?: boolean;
    sections: { heading: string; body: string }[];
    images?: string[];
    videos?: string[];
};

export const caseStudies: CaseStudy[] = [
    {
        slug: 'fink-dev',
        title: 'fink.dev',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'This portfolio, built as a living Next.js 16 and Tailwind v4 design system rather than a static template. Every visual choice — color, typography, spacing — is a token, so the whole site can be re-themed at runtime without touching a single component.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind v4'],
        repo: 'https://github.com/jonas-fink/portfolio',
        featured: false,
        sections: [
            {
                heading: 'Problem',
                body: 'I wanted a portfolio that doubled as a living design system rather than a one-off template. That meant no hard-coded colors or fonts scattered across components, and a setup where changing the look of the entire site would come down to editing a handful of values in one place.',
            },
            {
                heading: 'Solution',
                body: 'I built a token-driven Tailwind v4 setup where accent color, font, and the light/dark theme are all defined as CSS variables. Because those variables are read at runtime, the site can swap its entire appearance instantly in the browser — no rebuild, no page reload, and no duplicated theme code.',
            },
        ],
    },
    {
        slug: 'cms',
        title: 'Client Management System for Social Work',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'Dashboards for specialists and coordinators in the field of social work: reports, ' +
            'documentation, workload, vacation/ sick leave, working hours, and appointment ' +
            'management. Shared and RBAC protected file storage per client, notification and ' +
            'invitation system for appointments.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind v4',
            'Node.js',
            'Express.js',
            'AWS S3',
            'MongoDB',
        ],
        repo: 'https://github.com/jonas-fink/cms-spfh',
        featured: true,
        sections: [
            {
                heading: 'Situation',
                body:
                    'In social family support (SPFH), specialists work directly with families in ' +
                    'often complex life situations. Before this CMS, documenting appointments, reports ' +
                    'and support plans was heavily fragmented. Working hours, appointments and travel ' +
                    'time were captured by hand, and reconciling delivered hours against each family’s ' +
                    'approved weekly quota relied on error-prone spreadsheets. Admins had no real-time ' +
                    'view of actual team workload, vacation overlaps or who was currently on duty. ' +
                    'Sensitive case documents were sometimes shared locally or over insecure channels, ' +
                    'and there was no strict, system-level separation between administrative rights and ' +
                    'the write access specialists had to case files.',
            },
            {
                heading: 'Task',
                body:
                    'The goal was a GDPR-compliant, performant and intuitive full-stack platform that ' +
                    'minimizes administrative load and guarantees data security. Functionally it needed ' +
                    'full client management including tandem support (two specialists sharing a case), ' +
                    'complete tamper-proof time tracking with overtime calculation, and automated ' +
                    'per-family quota utilization with fair distribution of cancelled time. Technically ' +
                    'the hard parts were secure authentication for sensitive case files, scalable file ' +
                    'handling that avoids server overhead on large documents, and end-to-end type safety ' +
                    'so that API requests match the backend types at runtime and those types are mirrored ' +
                    'one-to-one in the React frontend.',
            },
            {
                heading: 'Action',
                body:
                    'Authentication uses stateful JWTs: short-lived access tokens (15 min, kept in ' +
                    'frontend memory) and 7-day refresh tokens sent as httpOnly cookies, with only the ' +
                    'SHA-256 hash stored in MongoDB. Refresh-token rotation with reuse detection treats ' +
                    'any replay of an old token as theft and immediately revokes the whole token family. ' +
                    'Express middlewares (protect, adminOnly) enforce not just route access but ' +
                    'field-level write guards — a specialist may edit their family’s contact data but ' +
                    'not its status, hours quota or assignment. The MongoDB layer is a referenced model ' +
                    '(User, Client, Appointment) with sub-documents for tightly coupled data like ' +
                    'calendar-event RSVPs. Business logic runs on aggregations: utilization is ' +
                    'progressPercent = round((totalMinutes / (weeklyHoursQuota × 60)) × 100); cancelled ' +
                    'appointments are credited at a flat 90 minutes (capped at 2 per family/month) and ' +
                    'split fairly across tandem specialists at 45 minutes each with a 1.3 overhead ' +
                    'factor; overtime is recomputed on every clock-out from the ISO-week session total ' +
                    'against the user’s weekly target. The React 19 / Tailwind v4 frontend gives ' +
                    'specialists personalized KPI strips and ring charts, and admins a live dashboard of ' +
                    'who is clocked in plus team-workload tables. Documents upload directly to S3 via a ' +
                    'presigned PUT URL, so the API never proxies the file; metadata is persisted only ' +
                    'after the upload is confirmed. A single WeekView drives both personal and team ' +
                    'calendars via a colorMode prop, and every frontend type mirrors the backend’s Zod ' +
                    'shapes to rule out inconsistent payloads.',
            },
            {
                heading: 'Result',
                body:
                    'Automated appointment totalling plus integrated time tracking removes several hours ' +
                    'of manual transcription and cross-checking per specialist each week. Admins see ' +
                    'bottlenecks and quota overruns instantly through visual indicators — filling hour ' +
                    'rings instead of overflowing bars — and vacation requests are validated with a live ' +
                    'preview of the working days consumed, cutting planning mistakes. The combination of ' +
                    'Zod runtime validation, hashed token storage, restrictive S3 access (download links ' +
                    'expire after one hour) and a complete audit trail on retroactive time-entry edits ' +
                    'delivers strong data security and auditability for the provider.',
            },
            {
                heading: 'Key Takeaways',
                body:
                    'Leaning on the native Node ecosystem paid off: native package.json#imports for path ' +
                    'aliases and Node 22 features (--watch, --env-file) improved developer experience and ' +
                    'cut dependencies. A small custom fetch wrapper that transparently refreshes the token ' +
                    'on a 401 and retries the request proved more maintainable than Axios and kept the ' +
                    'bundle small. For much higher case loads, the next step would be moving the current ' +
                    'time-driven MongoDB aggregations toward an event-driven architecture (e.g. Change ' +
                    'Streams) to compute overtime and utilization metrics asynchronously in the background.',
            },
        ],
        images: [
            'admindashboard_r06kau',
            'socialworkerdashboard_p8ujau',
            'einsatzplaner_koiaev',
            'zeiterfassung_x8sw5e',
        ],
    },
    {
        slug: 'lightme',
        title: 'lightMe - Holistic Health App',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'Nutrition-, Mood- and Movement-Tracking mit API-Kaskade (FatSecret, USDA, OpenFoodFacts), ' +
            'barcode scanner, full auth and stripe subscriptions. ' +
            'Admin dashboard with data insights.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind v4',
            'Node.js',
            'Express.js',
            'MongoDB',
        ],
        live: 'https://lightme-client.onrender.com/',
        repo: 'https://github.com/jonas-fink/lightme-client',
        featured: true,
        sections: [
            {
                heading: 'Situation',
                body:
                    'The fitness and nutrition app market is heavily fragmented — users juggle calorie ' +
                    'counters, activity trackers, sleep diaries and paid coaching programs separately. ' +
                    'For LightMe’s 12-week program, three core problems stood out. Nutrition data was ' +
                    'fragmented and full of gaps: no single API reliably covers all foods, barcodes and ' +
                    'custom creations, so searches failed or returned incomplete macros. Admins and ' +
                    'coaches had no way to evaluate user progress (e.g. percentage weight loss, adherence) ' +
                    'on a cohort basis. And the payment flows across Free, Trial, Basic and Premium tiers ' +
                    'demanded a tamper-proof system that controls trials and survives cancelled payments ' +
                    'without data loss.',
            },
            {
                heading: 'Task',
                body:
                    'The MVP goal (deadline 16 May 2026) was a seamlessly integrated, high-performance ' +
                    'full-stack web app. Functionally it needed an interactive food diary with live ' +
                    'nutrient scaling and camera barcode lookup, a visual dashboard for weight, ' +
                    'measurements, sleep and activity over freely chosen time ranges, and a 14-day, ' +
                    'card-free Premium trial that is strictly once per user. The technical challenges: ' +
                    'in Express 5, req.query is a read-only getter, so type coercions from validation ' +
                    'libraries are lost by default and crash database aggregations; Stripe webhooks ' +
                    'needed hardening against race conditions and duplicate deliveries; and the powerful ' +
                    'admin dashboard could not be allowed to slow the initial load of the regular app.',
            },
            {
                heading: 'Action',
                body:
                    'The frontend keeps the access token in volatile memory only; when it expires (15 min) ' +
                    'an Axios interceptor catches the 401, silently refreshes via the httpOnly cookie ' +
                    '(/auth/refresh) and retries the original request unnoticed. Changing a password ' +
                    'clears the entire refreshTokens[] array in MongoDB, instantly invalidating every ' +
                    'other session platform-wide. Food search runs through a cascading facade in ' +
                    'nutritionService.ts — OpenFoodFacts → FatSecret (OAuth 1.0) → USDA FDC → custom ' +
                    'ingredients — until it gets hits. The Stripe webhook is strict and ack-first: verify ' +
                    'the signature on the raw body, write an idempotency marker (a unique eventId index; ' +
                    'a duplicate-key error short-circuits with 200 OK), return received:true within ~100ms ' +
                    'to avoid retries, and only then process the event asynchronously, deleting the marker ' +
                    'on failure so Stripe’s retry can fire. On the frontend the whole admin dashboard is ' +
                    'React.lazy-loaded so regular users never download it, monolithic pages were split ' +
                    'into focused hooks and panels (the Food Diary page shrank from 991 to 278 lines), and ' +
                    'nutrient scaling (scaleFood) is centralized so scanner, favorites and search all share ' +
                    'one implementation.',
            },
            {
                heading: 'Result',
                body:
                    'The cascading API approach plus a snapshot pattern for recipes (nutrient values are ' +
                    'frozen when an item is added to a recipe) keeps the food diary consistent even if the ' +
                    'underlying food is later edited or deleted. The card-free trial lowers the entry ' +
                    'barrier massively — no payment details for 14 days of Premium — while a persistent ' +
                    'hasUsedTrial flag on the user model blocks repeat abuse. The admin panel computes ' +
                    'demographic and progress-based metrics (e.g. avgWeightLossPct, cohort nutrition ' +
                    'averages), letting the operator tune the 12-week program from real data.',
            },
            {
                heading: 'Key Takeaways',
                body:
                    'A few Express/Mongo pitfalls shaped the build. Because req.query is a getter in ' +
                    'Express 5, delete and Object.assign silently fail and coerced Zod values never reach ' +
                    'the controllers — solved by hard-redefining the whole query object with ' +
                    'Object.defineProperty in a validateQuery middleware. Mongoose auto-casts string IDs ' +
                    'to ObjectIds in normal queries but not inside aggregation $match, so pipelines ' +
                    'returned empty arrays until IDs were cast explicitly with new ' +
                    'mongoose.Types.ObjectId(userId). Missing optional values (steps, distance) turned ' +
                    'whole weekly sums to null until $ifNull was applied consistently. And Express matched ' +
                    '/recipes/:id before /recipes/range, reading "range" as an id — fixed by always ' +
                    'registering static routes before dynamic ones.',
            },
        ],
        images: [
            'userflow_xywbgd',
            'Subscriptions_guqxes',
            'home_rkdjsz',
            'home2_mw0qzv',
            'foodDiary_hfx6lr',
            'ActivityTracking_azln3f',
            'MoodPal_y8mckb',
            'dashboard_qrhapu',
            'admin_qbxmqv',
        ],
    },
    {
        slug: 'reciply',
        title: 'Reciply – Recipe Scraper',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'Paste a social-media cooking reel URL and get back a clean, structured, editable ' +
            'recipe you own. yt-dlp pulls the caption, Gemini parses it into title/ingredients/steps ' +
            'behind Zod validation, and nothing is saved until you confirm. Personal library, ' +
            'favorites, image uploads and a public community feed.',
        tech: [
            'React',
            'TypeScript',
            'Tailwind v4',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Gemini API',
            'Cloudinary',
        ],
        live: 'https://recipely-lhdc.onrender.com/',
        repo: 'https://github.com/jonas-fink/recipe-scraper',
        featured: false,
        sections: [
            {
                heading: 'Situation',
                body:
                    'Recipe content lives in social-media reels, but the actual recipe is trapped in a ' +
                    'caption you have to scroll, screenshot and retype by hand. No tool turned a video URL ' +
                    'into a saved, structured recipe you actually own — the goal was one URL in, one ' +
                    'structured recipe out, kept in your own library.',
            },
            {
                heading: 'Task',
                body:
                    'Build a full-stack app that takes an Instagram/Facebook reel URL and produces a clean, ' +
                    'editable, persisted recipe with user accounts, images and optional community sharing — ' +
                    'without polluting the database with unconfirmed AI output, and hardened enough to ' +
                    'deploy. The core design constraint: extraction must not persist. Parsing returns an ' +
                    'ephemeral draft the user edits and only then saves, so the DB never fills with AI ' +
                    'guesses.',
            },
            {
                heading: 'Action',
                body:
                    'The pipeline is URL → scraper → AI parser → editable preview → save. A caption-first ' +
                    'scraper shells out to yt-dlp (--dump-json, no browser), covering ~80% of reels; Whisper ' +
                    'transcription and headless-browser fallbacks are documented but deliberately deferred ' +
                    'to keep v1 small. Captions go to Gemini with a responseSchema for structured output, ' +
                    'and every result is Zod-validated before it reaches the client. Auth is JWT with ' +
                    'short-lived access tokens (15 min) plus rotating refresh tokens (7 days, stored as a ' +
                    'SHA-256 hash, delivered as an httpOnly cookie) with reuse detection, bcrypt (cost 12) ' +
                    'for passwords, and per-userId ownership scoping on every read, write and delete (404 ' +
                    'instead of leaking existence). Images upload to Cloudinary with the public_id derived ' +
                    'deterministically from the stored URL, and a community feed lets users publish and ' +
                    '"add to my library" as an independent snapshot; recipe identity is the sourceUrl, so ' +
                    'duplicates return a 409 via app-level guards rather than a risky unique index. Expensive ' +
                    'routes (extract, community) are cached in memory, rate limiters cover the global API ' +
                    'plus extract, image-upload and refresh, env is Zod-validated at boot, errors use one ' +
                    '{ message } envelope, and Express 5 async auto-forwarding removed ~16 redundant ' +
                    'try/catch blocks.',
            },
            {
                heading: 'Result',
                body:
                    'v1 runs end-to-end: URL → yt-dlp → Gemini → editable preview → MongoDB, with auth, ' +
                    'per-user libraries, favorites, image uploads and a public community feed with dedup. ' +
                    'It is deploy-hardened — in-memory caching, full rate-limiter coverage, boot-time env ' +
                    'validation and strict ownership isolation. The scope is deliberately held to ' +
                    'caption-based extraction with documented upgrade paths, so the codebase stays small ' +
                    'enough to reason about.',
            },
            {
                heading: 'Key Takeaways',
                body:
                    'Scoping to the caption-first ladder and writing down the Whisper/headless fallbacks ' +
                    'instead of building them kept v1 shippable without closing any doors. Keeping extract ' +
                    'and save separate turned out to be the key architectural call — the database only ever ' +
                    'holds recipes a human confirmed. App-level 409 dedup on sourceUrl avoided a unique ' +
                    'index and its migration risk on existing data, and Express 5’s async auto-forwarding ' +
                    'quietly deleted a whole class of boilerplate. The obvious next step is swapping the ' +
                    'in-memory caches for Redis, already marked at the call site.',
            },
        ],
        images: [
            'landingPage_nszsg1',
            'analyzer_i0mkfi',
            'library_umdtgd',
            'communityRecipes_qfakfc',
            'editMeal_lq6n3q',
        ],
    },
];

import type { Locale } from '../i18n/config';
import { caseStudyTranslations } from './case-studies.i18n';

// Merge DE/ES overrides over the English base. Omitted fields fall back to English.
const localize = (c: CaseStudy, lang: Locale): CaseStudy => {
    if (lang === 'en') return c;
    const t = caseStudyTranslations[c.slug]?.[lang];
    if (!t) return c;
    return {
        ...c,
        title: t.title ?? c.title,
        summary: t.summary ?? c.summary,
        sections: t.sections ?? c.sections,
    };
};

export const getLocalizedStudies = (lang: Locale): CaseStudy[] =>
    caseStudies.map((c) => localize(c, lang));

export const getCaseStudy = (slug: string, lang: Locale) => {
    const c = caseStudies.find((s) => s.slug === slug);
    return c ? localize(c, lang) : undefined;
};
