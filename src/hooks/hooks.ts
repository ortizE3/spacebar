import { useState, useEffect, useRef } from 'react';

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
};


export function useInView<T extends HTMLElement>(
    options?: IntersectionObserverInit,
    debounceMs: number = 100 // debounce delay in ms
) {
    const ref = useRef<T | null>(null);
    const [isInView, setIsInView] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);

                timeoutRef.current = setTimeout(() => {
                    setIsInView(entry.isIntersecting);
                }, debounceMs);
            },
            { threshold: 0.1, ...options }
        );

        observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [options, debounceMs]);

    return { ref, isInView };
}

export function usePageVisibility() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsVisible(document.visibilityState === 'visible');
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    return isVisible;
}
