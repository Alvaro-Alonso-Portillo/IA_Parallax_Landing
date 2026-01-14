import React, { useState, useEffect, useRef } from 'react';

export const ScrollElevator: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Total height of the scrollable area
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;

            // We want the elevator to travel from section 'About' (approx 1500px) to 'RayBusters' (approx 6000px)
            const start = 1200;
            const end = 6500;

            const currentProgress = Math.min(Math.max((currentScroll - start) / (end - start), 0), 1);
            setProgress(currentProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Only show on desktop and when in range
    if (progress <= 0 || progress >= 1) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-0 hidden lg:block overflow-hidden">
            {/* The infinite rope */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-black/10 border-l border-dashed border-black/20"></div>

            {/* The Elevator Assembly */}
            <div
                className="absolute left-1/2 -translate-x-1/2 transition-transform duration-300 ease-out"
                style={{
                    top: '50%',
                    transform: `translate(-50%, -50%) translateY(${(progress - 0.5) * 40}vh)` // More dynamic vertical range
                }}
            >
                {/* The Crane Hook */}
                <div className="relative -top-24">
                    <svg className="w-16 h-16 mx-auto text-black/40" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M50 0 L50 40 Q50 60 70 60 Q90 60 90 40" />
                        <path d="M50 40 Q50 60 30 60 Q10 60 10 40" />
                        <circle cx="50" cy="10" r="4" fill="currentColor" />
                    </svg>
                </div>

                {/* The Ropes */}
                <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 -z-10 text-black/20" viewBox="0 0 100 60">
                    <path d="M50 0 L10 60" stroke="currentColor" strokeWidth="1" />
                    <path d="M50 0 L90 60" stroke="currentColor" strokeWidth="1" />
                    <path d="M50 0 L50 60" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
                </svg>

                {/* The Platform */}
                <div className="relative bg-white border-2 border-black p-2 shadow-sketch w-48 h-40 flex flex-col items-center justify-end overflow-hidden group">
                    {/* Metal bars layout */}
                    <div className="absolute inset-0 border-b-8 border-gray-100/50"></div>
                    <div className="absolute top-2 inset-x-2 h-1 bg-black/5 rounded-full"></div>
                    <div className="absolute top-12 left-0 right-0 h-[2px] bg-black/10"></div>

                    {/* The Character (The mysterious monigote) */}
                    <div className="relative mb-4 scale-150">
                        <img
                            src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768305227/Gemini_Generated_Image_9rh8wa9rh8wa9rh8-removebg-preview_iwqmue.png"
                            className="w-24 h-24 object-contain drop-shadow-sketch group-hover:animate-bounce transition-all"
                            alt="Custom Elevator Character"
                        />
                    </div>

                    {/* Platform Base rail */}
                    <div className="w-full h-4 border-t-2 border-black bg-gray-100 flex items-center justify-around px-4">
                        <div className="w-1 h-3 bg-black/20"></div>
                        <div className="w-1 h-3 bg-black/20"></div>
                        <div className="w-1 h-3 bg-black/20"></div>
                    </div>
                </div>

                {/* Platform Under-shadow */}
                <div className="w-40 h-4 bg-black/5 blur-lg mx-auto rounded-[50%] -mt-2"></div>
            </div>
        </div>
    );
};
