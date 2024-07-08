import { useState, forwardRef } from 'react';

import noImage from '../assets/images/no-image.png';

interface ImageProps {
    src: string;
    alt: string;
    className?: string;
    fallback?: string;
}
function Image({ src, alt, className, fallback = noImage, ...props }: ImageProps, ref: React.Ref<HTMLImageElement>) {
    const [fallbackSrc, setFallbackSrc] = useState('');
    const handleError = () => setFallbackSrc(fallback);
    return <img ref={ref} src={fallbackSrc || src} alt={alt} {...props} onError={handleError} className={className} />;
}

export default forwardRef(Image);
