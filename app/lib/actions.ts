'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactForm = async (formData: FormData) => {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        return { error: 'All fields are required' };
    }

    try {
        await resend.emails.send({
            from: 'Contacform <email@jonasfink.dev>', // verified domain later
            to: 'jonasfink.dev@gmail.com',
            subject: `New Message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nE-Mail: ${email}\n\nMessage:\n${message}`,
        });

        return { error: null };
    } catch (error) {
        console.error('Mail Error:', error);
        return { error: 'Error sending the mail' };
    }
};
