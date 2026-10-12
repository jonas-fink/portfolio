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
        featured: false,
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
            '03-home_wka7ms',
            '06-mood-pal_lb6lga',
            '08-activity_mtoiiu',
            '07-body-compass_d8ml18',
            '04-dashboard_aiqnog',
            '02-pricing_gwm0cm',
            '05-food-diary_hzkrgi',
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
    {
        slug: 'ksoko',
        title: 'KSoKo – Social Compass',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'A low-barrier social compass for Kassel: municipal events, community ' +
            'activities and counselling services on one map and in filterable lists, ' +
            'savable into a personal library that doubles as a calendar. Three ' +
            'independent data pipelines (daily scraper, Nominatim geocoding backfill, ' +
            'CSV partner import) feed one unified read API, plus a guest-usable chatbot ' +
            'with structural guardrails against hallucinated recommendations.',
        tech: [
            'React',
            'TypeScript',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Gemini API',
            'AWS S3',
            'Docker',
        ],
        repo: 'https://github.com/jonas-fink/SokoRefactor',
        featured: true,
        sections: [
            {
                heading: 'Situation',
                body:
                    'In Kassel and comparable cities, knowledge about affordable family ' +
                    'offerings and social counselling services is scattered. Debt counselling, ' +
                    'addiction support, family services, asylum advice, public offices — spread ' +
                    'across dozens of individual pages, municipal portals and PDFs. The very ' +
                    'people who need this information most urgently, families and financially ' +
                    'disadvantaged households, have the least time and institutional knowledge ' +
                    'to piece it together. There was no single low-barrier surface connecting ' +
                    '"what is happening" (events, activities) with "who helps" (counselling ' +
                    'services), let alone one that made both savable into a personal calendar.',
            },
            {
                heading: 'Task',
                body:
                    'The goal was a web application, starting with Kassel as the pilot city, ' +
                    'that makes events and counselling services accessible on a map and in ' +
                    'filterable lists, allows saving them into a personal library and calendar, ' +
                    'and delivers provider details such as opening hours, address and phone ' +
                    'number without a paywall or ticketing friction. The non-goals defined the ' +
                    'task almost as much as the goals: no "second Eventim" with a commercial ' +
                    'focus, no coldly bureaucratic interface — the application had to feel warm ' +
                    'and accessible. Technically, the task was to design a data model and an ' +
                    'architecture that merges three fundamentally different data sources — ' +
                    'manually created activities, a scraped municipal events calendar and ' +
                    'partner-supplied counselling data — into one consistent read API without ' +
                    'duplicating logic per content type.',
            },
            {
                heading: 'Action',
                body:
                    'The system is a classic three-tier MERN architecture (Express 5, ' +
                    'MongoDB/Mongoose 9, React 19 + TypeScript, Node.js) in which a ' +
                    'scraping/import pipeline sits alongside the API as an independent, ' +
                    'asynchronous data producer rather than as part of the request path. The ' +
                    'client talks exclusively to the Express API — never directly to MongoDB, ' +
                    'Cloudinary, S3 or Gemini — so authorization, validation (Zod) and rate ' +
                    'limiting are enforced in exactly one place. For the data model, the three ' +
                    'content types Activity, ScrapedEvent and Beratung deliberately remained ' +
                    'separate Mongoose models instead of a shared base collection — they share ' +
                    'too few fields to justify inheritance. They are unified at the API boundary ' +
                    'instead: GET /events merges Activity and ScrapedEvent into one ' +
                    'date-sorted list, and a single polymorphic Favorite model (itemType + ' +
                    'itemId via Mongoose refPath, compound unique index) makes all three equally ' +
                    'savable — a saved item with a date is therefore already the calendar entry, ' +
                    'and a separate Appointment model was deliberately left out. Categories run ' +
                    'as a validated whitelist rather than foreign keys, so filtering stays a ' +
                    'simple $in query instead of a populate() in every controller. Geodata is a ' +
                    'required field on Activity and Beratung (GeoJSON Point with a 2dsphere ' +
                    'index); for ScrapedEvent, where the city only supplies a venue name as ' +
                    'text, the coordinate is backfilled asynchronously via Nominatim. ' +
                    'Authentication uses a short-lived JWT access token (15 minutes, kept only ' +
                    'in client memory, never in localStorage) together with a rotating, httpOnly ' +
                    'refresh-token cookie (7 days); every refresh token belongs to a family, and ' +
                    'reusing an already-rotated token immediately revokes the entire family — ' +
                    'the standard protection against a stolen but belatedly used refresh token. ' +
                    'Passwords are hashed with bcrypt, roles (user/creator/admin) run through a ' +
                    'requireRole(...) middleware factory plus a generic isDocOwner(Model) for ' +
                    'owner-or-admin rules; counselling-service data is deliberately restricted ' +
                    'to adminOnly write access instead of the laxer creator role used for ' +
                    'activities, because a wrong entry on a debt counselling service carries a ' +
                    'different risk than a wrong event. On the data side, three independent ' +
                    'pipelines feed the same read surface: a daily cron scraper against the ' +
                    'municipal events calendar with idempotent upsert on externalId, a geocoding ' +
                    'backfill against Nominatim (currently around 60% of the roughly 3,180 ' +
                    'scraped venues resolved automatically), and a CSV partner import with its ' +
                    'own parser for counselling organizations. A chatbot (POST /chat) helps ' +
                    'users phrase a need in their own words and is deliberately usable by guests ' +
                    'too, because the moment someone asks for help is often exactly the moment ' +
                    'they do not want to create an account. The response structure makes ' +
                    'safeguards mandatory fields rather than optional extras: every answer ' +
                    'carries a handoff (a concrete human next step), a disclaimer is mandatory ' +
                    'for financial, asylum or health topics, and a deterministic keyword check ' +
                    'for emergency numbers runs before every model call — if it matches, neither ' +
                    'the database nor Gemini is consulted. A knownOnly() filter discards every ' +
                    'ID returned by the model that does not actually exist, structurally ruling ' +
                    'out hallucinated recommendations; if Gemini fails, a deterministic keyword ' +
                    'table takes over as fallback. Voice input returns a verbatim, untranslated ' +
                    'transcript for review before sending — a German translation would be ' +
                    'exactly what the feature’s target group could not verify. New accounts ' +
                    'land in a skippable onboarding wizard; preferencesSetAt is set on skip as ' +
                    'well, so "deliberately not answered" stays distinguishable from "never ' +
                    'asked", and filter state lives entirely in the URL. A security review ' +
                    'surfaced three silent bugs that went unnoticed in normal operation: a ' +
                    'misconfigured trust proxy setting that lumped all users into one bucket for ' +
                    'the IP-based rate limiter behind the reverse proxy, temp files never ' +
                    'cleaned up on the error path during file upload, and client-side error ' +
                    'handling that collapsed different API errors into one meaningless message. ' +
                    'The application runs as a three-container Docker Compose stack (MongoDB ' +
                    'with no published port, client behind nginx), automated via GitHub Actions ' +
                    'on a self-hosted runner on every push to main.',
            },
            {
                heading: 'Result',
                body:
                    'The application is fully functional for the MVP scope and running in ' +
                    'production: users discover activities, municipal events and counselling ' +
                    'services on a map and in lists filtered by category, language, target group ' +
                    'and price, save them into a personal library that doubles as a calendar, ' +
                    'and admin-curated counselling services provide opening hours, preferred ' +
                    'contact channels and downloadable application documents via time-limited ' +
                    'presigned S3 links. The chatbot offers guests and logged-in users alike a ' +
                    'conversational entry point by text or voice, with structural safeguards ' +
                    'against wrong recommendations and a 90-day history retention for logged-in ' +
                    'users. A suite of 80 tests on Node.js’ built-in test runner covers ' +
                    'exactly the places where a silent regression would be expensive: filter ' +
                    'composition, category mapping, closed vocabularies, chat guardrails, ' +
                    'import/scrape parsing and calendar math. Open and deliberately not hidden: ' +
                    'Gemini still runs on the free tier, which must be moved to a paid tier ' +
                    'before real users because of possible special categories of personal data ' +
                    '(Art. 9 GDPR); the privacy policy exists as a legally unreviewed draft; ' +
                    'feedback entries currently only land in the database with no delivery path; ' +
                    'and MongoDB runs without authentication, which is only defensible because ' +
                    'the port is not published and the host is not publicly reachable.',
            },
            {
                heading: 'Key Takeaways',
                body:
                    'Node.js’ built-in test runner proved sufficient for a project of this ' +
                    'size — no extra framework, no extra configuration layer. Recurring patterns ' +
                    'like the native <dialog> element for the filter panel and chat modal saved a ' +
                    'dedicated modal library, and a theme switch with no React context at all ' +
                    '(the DOM itself as state, set by an inline script to prevent a flash of ' +
                    'unstyled content) showed that not every piece of global state needs a ' +
                    'context. The biggest lesson came from the security review: the trust proxy ' +
                    'misconfiguration ran unnoticed for a long time because it only becomes ' +
                    'visible under multi-user load — an indication that rate limiting and ' +
                    'similar infrastructure middleware need explicit tests, not just a look at ' +
                    'the code. For growing user numbers, the next steps would be moving the ' +
                    'Gemini integration to a paid quota with a real cost cap, introducing a ' +
                    'central env validation module that reports missing S3 or Gemini credentials ' +
                    'at startup instead of at the first upload, and improving the geocoding hit ' +
                    'rate through better fallback queries rather than through more code.',
            },
        ],
        images: [
            'Hero_bqvrcc',
            'ChatModal_y6zull',
            'filterMain_x6gigq',
            'Beratung_n5eaxt',
        ],
    },
    {
        slug: 'amplify',
        title: 'Amplify – Shared Project Boards',
        year: '2026',
        role: 'Full-Stack Developer',
        summary:
            'A shared project board for a small team: tasks, an archive, files and ' +
            'invites in one place that people and agents (Cursor, Claude, ChatGPT) ' +
            'read and write alike. Membership stays the boundary — an agent acts as ' +
            'the signed-in user and only sees that user’s projects.',
        tech: [
            'Next.js',
            'React',
            'TypeScript',
            'Tailwind v4',
            'Postgres',
            'Auth.js',
            'MCP',
            'Cloudflare R2',
            'Docker',
        ],
        live: 'https://amplify.tail2593e2.ts.net',
        repo: 'https://github.com/jonas-fink/applify',
        sections: [
            {
                heading: 'Situation',
                body:
                    'On a small team, work on a project is split across the board, the ' +
                    'chat, and an assistant’s session. Status, assignment, checklists and ' +
                    'files live in one place, the next instruction to Cursor, Claude or ' +
                    'ChatGPT in another, and none of it knows who is actually a member of ' +
                    'the project. An agent that is supposed to create a task needs either ' +
                    'a second source of truth or an access path that reaches further than ' +
                    'the account of the person who asked. There was no single surface on ' +
                    'which a person and an agent read and write the same projects, with ' +
                    'the agent limited to the projects of the signed-in user.',
            },
            {
                heading: 'Task',
                body:
                    'The goal was a board for a small team: projects with the statuses ' +
                    'open, in progress and done, an archive, priority, assignees, ' +
                    'subtasks, invite links and files. The non-goals defined the task ' +
                    'almost as much as the goals: no second Jira with sprints, estimates ' +
                    'and custom workflows, and no general agent platform that connects ' +
                    'arbitrary tools. Technically, the task was to design one write path ' +
                    'that the interface and the agent tools share, that checks membership ' +
                    'in that path rather than in every caller, and to provide an agent ' +
                    'sign-in that connectors can finish. Connectors cannot reach localhost ' +
                    'or any port other than 443, so reachability was part of the task ' +
                    'rather than a deploy step that comes afterwards.',
            },
            {
                heading: 'Action',
                body:
                    'The application is a Next.js 16 app (App Router, React 19, ' +
                    'TypeScript, Tailwind v4) with Postgres via the postgres driver on ' +
                    'Supabase, no ORM, Zod at the write boundaries, and Auth.js ' +
                    'credentials whose passwords are hashed with bcrypt. Task writes ' +
                    'go through a single module, task-writes: a transaction checks ' +
                    'project_members first and only then inserts or updates. Server ' +
                    'Actions in the UI and the six MCP tools (applify_list_projects, ' +
                    'applify_list_tasks, ' +
                    'applify_create_task, applify_create_subtask, applify_update_task, ' +
                    'applify_update_subtask) call that same module, so a task created by ' +
                    'an agent passes the same rules as one from the form. Agent ' +
                    'authentication deliberately has a single verifier. A bearer key ' +
                    'with the apl_ prefix is stored as a SHA-256 hash, shown to the user ' +
                    'only once, and capped at ten keys per account. Claude and ChatGPT ' +
                    'arrive via OAuth with an authorization code and PKCE S256; only ' +
                    'claude.ai and chatgpt.com are accepted as clients, the authorization ' +
                    'code is deleted on exchange, and the access token is itself a row ' +
                    'in api_keys. The MCP handler therefore never grows a second auth ' +
                    'path. Invite links store only the hash of the token, with expiry ' +
                    'and revocation. Files live in a private R2 bucket; the upload uses ' +
                    'a short-lived presigned PUT URL, the row stays pending until the ' +
                    'object’s size and type are confirmed, at 50 MB and an allowlist of ' +
                    'file types. The archive is a status rather than a second table: the ' +
                    'board shows only open, in progress and done, while the summary route ' +
                    'still counts archived tasks, so completed history does not disappear ' +
                    'when it leaves the board. An optional Gemini narration only rephrases ' +
                    'that deterministic summary and runs only when a key is set. The app ' +
                    'ships as a Docker Compose stack via GitHub Actions on a self-hosted ' +
                    'runner on every push to main. The app container binds only ' +
                    '127.0.0.1:3000; a Tailscale sidecar serves it through Funnel on port ' +
                    '443, because 443 on the host is already taken by another application ' +
                    'and connectors cannot reach a different port.',
            },
            {
                heading: 'Result',
                body:
                    'The application works for this scope and is running: signed-in ' +
                    'members see their boards, search the title and description of their ' +
                    'own projects, invite people by link, remove members — their ' +
                    'assignments are cleared and the last owner stays — create tasks ' +
                    'with priority, due date and a checklist, move finished work into ' +
                    'the archive, and attach files to a project or a task. The same ' +
                    'person can connect an agent under their account; the agent lists ' +
                    'and writes only where they are a member. Open and deliberately not ' +
                    'hidden: there is no automated test suite; the schema is applied by ' +
                    'hand in the Supabase SQL editor and not by the container; the app ' +
                    'role bypasses row-level security, yet RLS is on and there are no ' +
                    'policies for anon, so a leaked anon key cannot read the tables, ' +
                    'including password hashes and invite tokens; OAuth access tokens ' +
                    'last seven days; a Gemini briefing sends task text to Google and ' +
                    'runs only when GEMINI_API_KEY is set.',
            },
            {
                heading: 'Key Takeaways',
                body:
                    'One shared write module mattered more than a second API. The ' +
                    'interface and the agent pass through the same transaction, the same ' +
                    'membership check and the same Zod boundaries, so the two entrances ' +
                    'cannot drift apart. Reusing the OAuth access token as a row in ' +
                    'api_keys kept MCP authentication to a single function: the handler ' +
                    'checks a hash and receives a user id, whether the key was created ' +
                    'by hand or exchanged by Claude. The biggest lesson was in the ' +
                    'deploy. Funnel on port 443 was a product requirement, not an ' +
                    'afterthought, because a connector that cannot reach localhost or an ' +
                    'occupied host port effectively does not have the feature. For the ' +
                    'step beyond a personal tailnet, the next steps would be a test ' +
                    'suite exactly where a silent regression would be expensive — ' +
                    'membership and token exchange — an env check at startup that ' +
                    'reports missing R2 or Gemini credentials instead of at the first ' +
                    'upload, and access tokens shorter than today’s seven days.',
            },
        ],
        images: [
            'projects_dashboard_lsxml9',
            'aisummary_vuk7em',
            'createtask_jbafnr',
            'taskboard_hrqhaf',
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
