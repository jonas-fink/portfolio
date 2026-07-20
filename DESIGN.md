# Portfolio Design System (Tailwind v4 / Next.js)

Extracted from the akkila.dev-inspired portfolio design. Built for **Tailwind
v4** (CSS-first config, no `tailwind.config.ts` needed) — just drop
`globals.css` into `app/globals.css` (App Router) or `styles/globals.css`
(Pages Router) and make sure `@tailwindcss/postcss` (or the Vite plugin) is
set up per the [Tailwind v4 install docs](https://tailwindcss.com/docs/installation).

Tokens live as plain CSS variables on `:root`, then get mapped to Tailwind
utilities via `@theme inline { --color-accent: var(--accent); … }` — that
indirection is what lets `.light` / `data-accent` / `data-font` swap the
whole theme at runtime without rebuilding Tailwind's generated CSS.

## Fonts

Load one or more mono fonts via `next/font/google` in `app/layout.tsx`:

```tsx
import { JetBrains_Mono } from 'next/font/google';
const jetbrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    variable: '--font-mono',
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de" className={jetbrainsMono.variable} data-accent="green">
            <body>{children}</body>
        </html>
    );
}
```

Other options wired into `globals.css`: Fira Code, IBM Plex Mono, Space Mono
— set `data-font="fira-code"` etc. on `<html>` and load the matching
`next/font/google` import.

## Theme switches

- **Dark/light:** add/remove class `light` on `<html>` (defaults to dark).
- **Accent color:** set `data-accent="green" | "cyan" | "amber" | "violet"` on `<html>`,
  or add your own preset in `globals.css` under `[data-accent="..."]`.
- **Mono font:** set `data-font="jetbrains-mono" | "fira-code" | "ibm-plex-mono" | "space-mono"`.

All three map straight to the "Akzentfarbe / Schriftart / Dark-Light" tweaks
from the design preview.

## Tokens (CSS variables)

| Variable       | Role                                         |
| -------------- | -------------------------------------------- |
| `--bg`         | Page background                              |
| `--surface`    | Card / input background                      |
| `--border`     | Hairline borders                             |
| `--text`       | Primary text                                 |
| `--text-muted` | Secondary text (body copy, descriptions)     |
| `--text-dim`   | Tertiary text (labels, eyebrows, meta)       |
| `--accent`     | Accent color (green/cyan/amber/violet)       |
| `--on-accent`  | Text/icon color drawn on top of accent fills |

Exposed as Tailwind colors: `bg-bg`, `bg-surface`, `border-border`, `text-text`,
`text-muted`, `text-dim`, `bg-accent` / `text-accent`, `text-on-accent`.

## Component classes

Defined in `globals.css` under `@layer components` — use directly as
`className`, or copy the utility string inline if you'd rather not use `@apply`.

- `.btn-primary` / `.btn-secondary` — CTA buttons
- `.card` — bordered surface container (project cards, form panels)
- `.pill` / `.chip` / `.badge-status` (+ `.badge-status-dot`) — status pills, tech-stack chips
- `.nav-link` / `.nav-link-active` — top nav items
- `.eyebrow` / `.eyebrow-num` — numbered section labels ("02 · FEATURED WORK")
- `.field-label` / `.input` — form fields

## Example: project card

```tsx
<div className="card">
    <div className="text-xs text-accent mb-2">[01]</div>
    <h3 className="text-xl mb-1.5">Project Title</h3>
    <div className="text-xs text-dim mb-3.5">2026 · Full-Stack Developer</div>
    <p className="text-base leading-[1.65] text-muted mb-4 max-w-[620px]">
        Description…
    </p>
    <a href="#" className="text-sm text-accent">
        ↗ live
    </a>
</div>
```

## Example: nav

```tsx
<nav className="flex gap-6">
    <span className={pathname === '/' ? 'nav-link-active' : 'nav-link'}>
        home
    </span>
    <span className={pathname === '/projects' ? 'nav-link-active' : 'nav-link'}>
        projects
    </span>
    <span className={pathname === '/about' ? 'nav-link-active' : 'nav-link'}>
        about
    </span>
    <span className={pathname === '/contact' ? 'nav-link-active' : 'nav-link'}>
        contact
    </span>
</nav>
```
