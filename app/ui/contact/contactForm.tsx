'use client';
import { sendContactForm } from '../../lib/actions';
import { useState } from 'react';
import type { Dictionary } from '../../i18n/dictionaries/en';

type Status = 'idle' | 'sending' | 'sent' | keyof Dictionary['contact']['errors'];

const ContactForm = ({ dict }: { dict: Dictionary }) => {
    const t = dict.contact.form;
    const [status, setStatus] = useState<Status>('idle');
    const pending = status === 'sending';

    const handleSubmit = async (formData: FormData) => {
        setStatus('sending');
        const result = await sendContactForm(formData);
        setStatus(result.error ?? 'sent');
    };

    const message =
        status === 'sent'
            ? t.sent
            : status in dict.contact.errors
              ? dict.contact.errors[status as keyof typeof dict.contact.errors]
              : null;

    return (
        <form className="p-6 md:p-7 flex flex-col gap-4" action={handleSubmit}>
            <div>
                <label className="field-label" htmlFor="name">
                    {t.nameLabel}
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder={t.namePlaceholder}
                    className="input"
                />
            </div>
            <div>
                <label className="field-label" htmlFor="email">
                    {t.emailLabel}
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder={t.emailPlaceholder}
                    className="input"
                />
            </div>
            <div
                style={{ position: 'absolute', left: '-9999px' }}
                aria-hidden="true"
            >
                <label htmlFor="sub_website">{t.honeypot}</label>
                <input
                    type="text"
                    id="sub_website"
                    name="sub_website"
                    tabIndex={-1}
                    autoComplete="off"
                />
            </div>
            <div>
                <label className="field-label" htmlFor="message">
                    {t.messageLabel}
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder={t.messagePlaceholder}
                    required
                    className="input"
                />
            </div>
            {message && (
                <p
                    role={status === 'sent' ? 'status' : 'alert'}
                    className={`text-sm px-3.5 py-3 rounded-sm border border-border bg-bg ${
                        status === 'sent' ? 'text-accent' : 'text-red-300'
                    }`}
                >
                    {status === 'sent' ? '✓ ' : '✗ '}
                    {message}
                </p>
            )}
            <button
                type="submit"
                disabled={pending}
                className="btn-primary md:self-start w-full md:w-auto"
            >
                $ {pending ? `${t.sending} …` : `${t.send} ↵`}
            </button>
        </form>
    );
};

export default ContactForm;
