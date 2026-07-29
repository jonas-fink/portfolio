'use client';
import { sendContactForm } from '../../lib/actions';
import { useState } from 'react';

const ContactForm = () => {
    const [status, setStatus] = useState<string | null>(null);
    const pending = status === 'Sending...';

    const handleSubmit = async (formData: FormData) => {
        setStatus('Sending...');
        const result = await sendContactForm(formData);
        setStatus(result.error ?? 'Message has been sent');
    };
    return (
        <form className="w-1/2 flex flex-col gap-3" action={handleSubmit}>
            <div>
                <label className="field-label" htmlFor="name">
                    NAME*
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="your name"
                    className="input"
                />
            </div>
            <div>
                <label className="field-label" htmlFor="email">
                    EMAIL*
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    className="input"
                />
            </div>
            <div>
                <label className="field-label" htmlFor="message">
                    MESSAGE*
                </label>
                <textarea
                    name="message"
                    id="message"
                    rows={5}
                    placeholder="What is it about?"
                    required
                    className="input"
                />
            </div>
            <button
                type="submit"
                disabled={pending}
                className="btn-primary max-w-max self-end"
            >
                {pending ? 'Sending' : 'Send'}
            </button>
            {status && <p className="text-sm">{status}</p>}
        </form>
    );
};

export default ContactForm;
