/**
 * Accessibility Utility
 * Detects user motion preferences and provides a unified check
 * to disable animations/parallax for users with prefers-reduced-motion.
 */

export const isMotionReduced = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Global CSS class applier (optional context/helper)
 * Can be used to add a .reduced-motion class to body for global CSS overrides.
 */
export const syncMotionPreference = () => {
    if (typeof document === 'undefined') return;

    if (isMotionReduced()) {
        document.documentElement.classList.add('reduced-motion');
    } else {
        document.documentElement.classList.remove('reduced-motion');
    }
};
