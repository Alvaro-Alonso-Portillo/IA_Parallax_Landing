import React from 'react';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export const TechStack: React.FC = () => {
    const revealRef = useRevealOnScroll<HTMLDivElement>();
    return (
        <section className="py-8 bg-white border-b-2 border-black">
            <div ref={revealRef} className="max-w-[1440px] mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <span className="font-display uppercase text-xl text-black whitespace-nowrap">
                        POTENCIADO POR:
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 md:gap-16 grayscale opacity-80">
                        {/* Python */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                            alt="Python"
                            className="h-8 sm:h-10 hover:grayscale-0 transition-all duration-300"
                        />
                        {/* OpenAI */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                            alt="OpenAI"
                            className="h-6 sm:h-8 hover:grayscale-0 transition-all duration-300"
                        />
                        {/* Google Cloud */}
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg"
                            alt="Google Cloud"
                            className="h-6 sm:h-8 hover:grayscale-0 transition-all duration-300"
                        />
                        {/* n8n */}
                        <img
                            src="https://res.cloudinary.com/drfr1lzlt/image/upload/v1768302104/df34b36d-279c-496c-91c2-959dd9c9f13d-removebg-preview_q1nmsc.png"
                            alt="n8n"
                            className="h-16 sm:h-20 md:h-24 hover:grayscale-0 transition-all duration-300"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};
