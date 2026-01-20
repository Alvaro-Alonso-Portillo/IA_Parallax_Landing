import { useEffect, useRef } from 'react';
import { isMotionReduced } from '../utils/accessibility';

/**
 * Hook to apply a subtle parallax effect to decorative elements.
 * 
 * @param speed - The multiplier for the scroll movement (e.g., 0.02 for very subtle).
 * @param direction - 1 for downward, -1 for upward.
 * @returns React ref to be attached to the element.
 */
export const useParallaxDecorative = <T extends HTMLElement>(speed: number = 0.02, direction: number = 1) => {
    const ref = useRef<T>(null);
    const frameId = useRef<number | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check conditions: Desktop and no reduced motion
        const isDesktop = window.innerWidth >= 1024;

        if (isMotionReduced() || !isDesktop) {
            // Ensure no residual transform on mobile/reduced motion
            element.style.transform = '';
            return;
        }

        const handleScroll = () => {
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }

            frameId.current = requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                // Amplitude target: 8-12px. 
                // With speed 0.02, 500px of scroll translates to 10px movement.
                const yPos = scrollY * speed * direction;

                if (ref.current) {
                    ref.current.style.transform = `translateY(${yPos}px)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Initial set
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (frameId.current) {
                cancelAnimationFrame(frameId.current);
            }
        };
    }, [speed, direction]);

    return ref;
};
