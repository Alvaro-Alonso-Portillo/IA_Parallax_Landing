import React from 'react';

const ResultCard: React.FC<{ label: string; value: string; description: string; rotation: string; tapeColor: string }> = ({ label, value, description, rotation, tapeColor }) => (
    <div className={`relative ${rotation} hover:rotate-0 transition-transform duration-500 group`}>
        {/* The Tape Effect */}
        <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-10 ${tapeColor} border-2 border-black z-30 opacity-90 shadow-sm transform -rotate-2 group-hover:rotate-1 transition-transform`}>
            {/* Tape texture/lines */}
            <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_5px,black_5px,black_6px)]"></div>
        </div>

        {/* The Card with Irregular Clip Path */}
        <div
            className="bg-[#fdfbf7] p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-2 min-h-[260px] relative z-20 border-4 border-black"
            style={{
                clipPath: 'polygon(2% 2%, 98% 1%, 99% 97%, 3% 99%, 1% 50%)',
                backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 0)',
                backgroundSize: '24px 24px'
            }}
        >
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

            <div className="mt-4 relative">
                {/* Irregular Label */}
                <div
                    className="bg-black text-white px-4 py-2 font-display text-sm uppercase mb-4 inline-block transform -rotate-2"
                    style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                >
                    {label}
                </div>

                <div className="font-display text-5xl md:text-6xl text-brand-blue my-4 leading-none group-hover:scale-110 transition-transform drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
                    {value}
                </div>

                <p className="font-sans font-bold text-xl leading-tight text-gray-900 border-l-4 border-brand-orange/30 pl-4 py-1">
                    {description}
                </p>
            </div>

            {/* Hand-drawn scribble at bottom */}
            <div className="mt-auto pt-6 overflow-hidden">
                <svg width="100%" height="20" viewBox="0 0 200 20" fill="none" className="opacity-40">
                    <path d="M0 10C20 5 40 15 60 10C80 5 100 15 120 10C140 5 160 15 180 10C200 5 220 15 240 10" stroke="black" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </div>
        </div>

        {/* Halftone Shadow Effect (Simulated with a layer behind) */}
        <div
            className="absolute inset-0 bg-brand-dark/10 -z-10 translate-x-4 translate-y-4 opacity-50"
            style={{
                clipPath: 'polygon(2% 2%, 98% 1%, 99% 97%, 3% 99%, 1% 50%)',
                backgroundImage: 'radial-gradient(black 1.5px, transparent 0)',
                backgroundSize: '6px 6px'
            }}
        ></div>
    </div>
);

export const ResultsSection: React.FC = () => {
    return (
        <section className="py-32 bg-[#fffdfa] relative overflow-hidden border-y-8 border-black">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,black_2px,transparent_0)] [background-size:40px_40px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 overflow-hidden">
                <div className="mb-10 md:mb-20 text-center">
                    <div className="inline-block relative">
                        <h2 className="text-4xl sm:text-5xl md:text-8xl font-display uppercase text-brand-dark drop-shadow-sketch-sm leading-[1.1] md:leading-normal">
                            Resultados <br className="md:hidden" />
                            <span className="text-brand-yellow px-2 bg-black inline-block transform -rotate-1 text-white mt-2 md:mt-0">Reales</span>
                        </h2>
                        <svg className="absolute -bottom-4 md:-bottom-6 left-0 w-full" height="15" viewBox="0 0 400 15" fill="none">
                            <path d="M5 10C50 2 150 12 200 8C250 4 350 14 395 6" stroke="#ffd900" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-20 sm:gap-16 md:gap-12 py-8">
                    <ResultCard
                        label="Agencia de Marketing"
                        value="15h"
                        description="Ahorro semanal en cualificación de leads mediante IA."
                        rotation="-rotate-2 md:-rotate-3"
                        tapeColor="bg-brand-yellow"
                    />
                    <ResultCard
                        label="E-commerce"
                        value="24/7"
                        description="Soporte al cliente sin contratar personal extra."
                        rotation="rotate-1 md:rotate-2"
                        tapeColor="bg-black"
                    />
                    <ResultCard
                        label="Inmobiliaria"
                        value="+40%"
                        description="De visitas agendadas automáticamente por nuestro agente."
                        rotation="-rotate-1"
                        tapeColor="bg-brand-orange"
                    />
                </div>

                <div className="mt-16 md:mt-24 text-center">
                    <div className="inline-block relative group px-4 w-full md:w-auto">
                        <div className="absolute inset-0 bg-brand-yellow transform rotate-2 translate-x-1 translate-y-1 group-hover:rotate-0 transition-transform hidden md:block"></div>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full md:w-auto relative bg-black text-white font-display text-xl md:text-3xl px-8 md:px-12 py-5 md:py-6 border-2 border-black group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform uppercase shadow-sketch md:shadow-none"
                        >
                            ¿QUIERES RESULTADOS? 🔥
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
};
