import { useState, useEffect } from 'react';

export function useLoaded({ src }: { src?: HTMLImageElement['src'] }) {
    const [loaded, setLoaded] = useState('false');

    useEffect(() => {
        if (!src) {
            return undefined;
        }

        setLoaded('loading');

        let active = true;
        const image = new Image();
        image.src = src;
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded('error');
        };

        return () => {
            active = false;
        };
    }, [src]);

    return loaded;
}
