'use client';
import { useRef, useState } from 'react';
import { CldImage, getCldVideoUrl } from 'next-cloudinary';

// native scroll-snap strip, no arrows/autoplay/JS
const MediaGallery = ({
    title,
    images,
    videos,
}: {
    title: string;
    images?: string[];
    videos?: string[];
}) => {
    // native <dialog> — Escape, focus trap and backdrop come free
    const dialog = useRef<HTMLDialogElement>(null);
    const [zoomed, setZoomed] = useState<string | null>(null);

    const zoom = (id: string) => {
        setZoomed(id);
        dialog.current?.showModal();
    };

    return (
        <>
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
                {images?.map((id) => (
                    <CldImage
                        key={id}
                        src={id}
                        width={880}
                        height={495}
                        alt={`${title} — screenshot`}
                        className="rounded-md border border-border w-full h-auto snap-center shrink-0 cursor-zoom-in"
                        loading="eager"
                        draggable="false"
                        onClick={() => zoom(id)}
                    />
                ))}
                {videos?.map((id) => (
                    <video
                        key={id}
                        src={getCldVideoUrl({ src: id })}
                        controls
                        preload="metadata"
                        className="rounded-md border border-border w-full h-auto snap-center shrink-0"
                    />
                ))}
            </div>

            <dialog
                ref={dialog}
                onClose={() => setZoomed(null)}
                onClick={() => dialog.current?.close()}
                className="bg-bg backdrop:bg-black/80 w-screen h-screen max-w-none max-h-none p-0 overflow-auto"
            >
                {zoomed && (
                    // h-full + max-w-none: wide shots render taller than the viewport is
                    // wide, so the container scrolls horizontally instead of shrinking them
                    <CldImage
                        src={zoomed}
                        width={1920}
                        height={1080}
                        alt={`${title} — screenshot enlarged`}
                        className="h-full w-auto max-w-none cursor-zoom-out"
                    />
                )}
            </dialog>
        </>
    );
};

export default MediaGallery;
