const ContactForm = () => {
    return (
        <form className="w-1/2 flex flex-col gap-3">
            <div>
                <label className="field-label" htmlFor="name">
                    NAME*
                </label>
                <input
                    type="text"
                    id="name"
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
                    id="email"
                    placeholder="you@example.com"
                    className="input"
                />
            </div>
            <div>
                <label className="field-label" htmlFor="message">
                    MESSAGE*
                </label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="What is it about?"
                    className="input"
                />
            </div>
            <button type="submit" className="btn-primary max-w-max self-end">
                send
            </button>
        </form>
    );
};

export default ContactForm;
