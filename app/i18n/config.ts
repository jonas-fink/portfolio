export const locales = ['en', 'de', 'es'] as const;
export const defaultLocale = 'en';

export type Locale = (typeof locales)[number];

export const isLocale = (v: string): v is Locale =>
    (locales as readonly string[]).includes(v);

export type DeepPartial<T> = {
    [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};
