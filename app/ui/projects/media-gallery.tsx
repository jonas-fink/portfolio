'use client';
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
}) => (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
        {images?.map((id) => (
            <CldImage
                key={id}
                src={id}
                width={880}
                height={495}
                alt={`${title} — screenshot`}
                className="rounded-md border border-border w-full h-auto snap-center shrink-0"
                loading="eager"
                draggable="false"
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
);

export default MediaGallery;
