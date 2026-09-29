import type { Dictionary } from '../i18n/dictionaries/en';

// short fake hashes so the history reads like `git log`
const hashes = ['a3f9c21', '7be04d8', '01c5e77', 'e42b9f0', '5d1a6c3'];

const CareerLog = ({ history }: { history: Dictionary['about']['history'] }) => (
    <div className="relative pl-10 flex flex-col gap-9">
        <div
            aria-hidden="true"
            className="draw absolute left-[7px] top-2 bottom-2 w-0.5 bg-linear-to-b from-accent to-border"
        />
        {history.map((h, i) => (
            <div key={h.year} className="reveal relative flex flex-col gap-1.5">
                <span
                    aria-hidden="true"
                    className="absolute -left-[39px] top-1 size-3.5 rounded-full border-2 border-accent bg-bg"
                />
                <p className="text-sm">
                    <span className="text-accent">{hashes[i % hashes.length]}</span>{' '}
                    <span className="text-dim">({h.year})</span>
                </p>
                <h3 className="text-lg font-bold">{h.title}</h3>
                <p className="text-muted leading-relaxed max-w-2xl">
                    {h.description}
                </p>
            </div>
        ))}
    </div>
);

export default CareerLog;
