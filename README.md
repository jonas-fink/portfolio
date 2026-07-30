# jonasfink.dev

Personal portfolio of **Jonas Fink** — Full-Stack Developer (MERN) in Kassel, Germany.
A terminal-themed site built as a token-driven design system: accent color, fonts,
and theme are CSS variables, so the whole look is retheme-able from one place.

Live: [jonasfink.dev](https://jonasfink.dev)

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**
- **TypeScript**
- **Tailwind v4** (CSS-variable design tokens in `app/ui/globals.css`)
- **next-cloudinary** for project media
- **Resend** for the contact form (Server Action + honeypot)
- Native SEO: `app/metadata`, generated `robots.ts`, `sitemap.ts`, and `opengraph-image.tsx`

## Structure

```
app/
  layout.tsx            root layout, fonts, site metadata
  page.tsx              home (hero + featured projects)
  about/ contact/       static pages
  projects/             list + [id] case-study detail
  lib/
    case-studies.ts     project content (single source of truth)
    actions.ts          contact-form Server Action
  ui/                   components (layout, home, contact, projects)
```

Projects are content, not code — add or edit entries in `app/lib/case-studies.ts`.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Requires a `.env.local`:

```
RESEND_API_KEY=...
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
```

```bash
pnpm build      # production build
pnpm lint
```

## Deployment

Hosted on Vercel, domain via Cloudflare DNS. Set the two env vars above in the
Vercel project settings.
