import { useEffect, useRef } from 'react';
import { isMotionReduced } from '../utils/accessibility';

/**
 * Hook to reveal elements with a smooth transition when they enter the viewport.
 * 
 * @param threshold - Percentage of the element that must be visible to trigger the reveal (0 to 1).
 * @param delay - Optional delay in milliseconds for staggered animations (desktop only).
 * @returns React ref to be attached to the element.
 */
export const useRevealOnScroll = <T extends HTMLElement>(threshold: number = 0.1, delay: number = 0) => {
    const ref = useRef<T>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        // Check for reduced motion preference using the global utility
        if (isMotionReduced()) {
            // Instantly reveal and ensure no hidden classes are applied
            element.classList.remove('opacity-0', 'translate-y-3');
            element.classList.add('opacity-100', 'translate-y-0');
            return;
        }

        const isMobile = window.innerWidth < 768;

        // Initialize element state
        element.classList.add('opacity-0', 'translate-y-3', 'transition-all', 'duration-200', 'ease-out');

        // Apply delay only on desktop and if provided
        if (delay > 0 && !isMobile) {
            element.style.transitionDelay = `${delay}ms`;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                // Apply reveal classes
                element.classList.remove('opacity-0', 'translate-y-3');
                element.classList.add('opacity-100', 'translate-y-0');

                // Stop observing after first reveal (once)
                observer.unobserve(element);
            }
        }, {
            threshold,
            // Small rootMargin to trigger slightly before the element fully enters
            rootMargin: '0px 0px -50px 0px'
        });

        observer.observe(element);

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, [threshold, delay]);

    return ref;
};
