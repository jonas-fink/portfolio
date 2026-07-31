import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale, isLocale } from './app/i18n/config';

function preferredLocale(req: NextRequest): string {
    const header = req.headers.get('accept-language') ?? '';
    // e.g. "de-DE,de;q=0.9,en;q=0.8" -> ['de','de','en']
    for (const part of header.split(',')) {
        const tag = part.split(';')[0].trim().slice(0, 2).toLowerCase();
        if (isLocale(tag)) return tag;
    }
    return defaultLocale;
}

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const hasLocale = locales.some(
        (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
    );
    if (hasLocale) return;

    const url = req.nextUrl.clone();
    url.pathname = `/${preferredLocale(req)}${pathname}`;
    return NextResponse.redirect(url);
}

export const config = {
    matcher: ['/((?!_next|api|icon|opengraph-image|.*\\.).*)'],
};
