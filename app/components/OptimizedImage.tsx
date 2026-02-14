"use client";

import React from "react";
import Image, { ImageProps } from "next/image";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
    src: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className,
    priority,
    ...props
}) => {
    // If src is external or data URL, fallback (or let standard Image handle it)
    if (!src || src.startsWith("http") || src.startsWith("data:")) {
        return <Image src={src} alt={alt} className={className} priority={priority} {...props} />;
    }

    // Parse file info
    const lastDotIndex = src.lastIndexOf(".");
    if (lastDotIndex === -1) {
        return <Image src={src} alt={alt} className={className} priority={priority} {...props} />;
    }

    const basePath = src.substring(0, lastDotIndex);

    // Encode paths to handle spaces in filenames
    // We use encodeURI because src is a partial URL path like "/folder/My Image.png"
    const encodedBasePath = encodeURI(basePath);
    const encodedSrc = encodeURI(src);

    // Define responsive widths matching our optimization script
    const widths = [320, 640, 960, 1280];

    // Generate srcSet strings
    const avifSrcSet = widths
        .map((w) => `${encodedBasePath}-${w}w.avif ${w}w`)
        .join(", ");

    const webpSrcSet = widths
        .map((w) => `${encodedBasePath}-${w}w.webp ${w}w`)
        .join(", ");

    const avifSrc = `${encodedBasePath}.avif`;
    // const webpSrc = `${encodedBasePath}.webp`;

    // We use the <picture> element for format switching
    return (
        <picture className={`block relative overflow-hidden w-full h-full ${className || ''}`}>
            <source
                srcSet={avifSrcSet}
                sizes={props.sizes || "100vw"}
                type="image/avif"
            />
            <source
                srcSet={webpSrcSet}
                sizes={props.sizes || "100vw"}
                type="image/webp"
            />
            {/* Fallback to optimized base AVIF or original */}
            <source srcSet={avifSrc} type="image/avif" />

            <img
                src={encodedSrc}
                alt={alt}
                className={`w-full h-full object-cover ${className || ""}`}
                // Pass style if provided, but position absolute is often needed for fill replacement
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, ...props.style }}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
            />
        </picture>
    );
};

export default OptimizedImage;
