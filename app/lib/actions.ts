'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactForm = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    const sub_website = formData.get('sub_website') as string;

    if (sub_website) {
        console.log('Bot erkannt (Honeypot)');
        return { error: null };
    }

    if (!name || !email || !message) {
        return { error: 'required' as const };
    }

    // ponytail: Server Action ist direkt aufrufbar, Browser-Validierung zählt nicht
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { error: 'invalid_email' as const };
    }

    try {
        await resend.emails.send({
            from: 'Contacform <email@jonasfink.dev>',
            to: 'jonasfink.dev@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nE-Mail: ${email}\n\nMessage:\n${message}`,
        });

        return { error: null };
    } catch (error) {
        console.error('Mail Error:', error);
        return { error: 'send_failed' as const };
    }
};
