import React, { useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { CallbackForm } from './CallbackForm';

export const SchedulePage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/iaparallax/30min';

    return (
        <div className="min-h-screen bg-black relative">
            {/* Back Button */}
            <div className="fixed top-8 left-8 z-50">
                <button
                    onClick={onBack}
                    className="bg-white border-4 border-black p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2 group"
                >
                    <span className="font-display uppercase text-sm text-black">← Volver al inicio</span>
                </button>
            </div>

            <div className="flex flex-col lg:flex-row min-h-screen">
                {/* Left Side: Calendly */}
                <div className="w-full lg:w-1/2 bg-brand-yellow flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_0)] [background-size:30px_30px]"></div>

                    <div className="relative z-10 w-full max-w-2xl">
                        <div className="mb-8 text-center">
                            <h2 className="text-4xl md:text-6xl font-display uppercase leading-none drop-shadow-sm">
                                YO ELIJO <br /> MI HORA
                            </h2>
                            <p className="font-comic text-xl mt-4 opacity-70">Para los que aman el control total.</p>
                        </div>

                        {/* Calendly Frame */}
                        <div
                            className="bg-white border-4 border-black p-2 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] h-[600px] md:h-[700px] relative overflow-hidden"
                            style={{ clipPath: 'polygon(1% 1%, 99% 0%, 100% 98%, 0% 100%)' }}
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 text-4xl font-display rotate-12">CALENDLY</div>
                            <InlineWidget
                                url={calendlyUrl}
                                styles={{ height: '100%', width: '100%' }}
                            />
                        </div>
                    </div>
                </div>

                {/* VS Element */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 hidden lg:flex items-center justify-center pointer-events-none">
                    <div className="bg-black text-white w-24 h-24 rounded-full border-8 border-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] transform hover:scale-110 transition-transform">
                        <span className="font-display text-5xl italic animate-pulse">VS</span>
                    </div>
                </div>
                {/* Mobile VS */}
                <div className="lg:hidden w-full h-12 bg-black flex items-center justify-center z-30">
                    <span className="font-display text-white text-3xl italic">VS</span>
                </div>

                {/* Right Side: Callback */}
                <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-8 md:p-16 relative overflow-hidden">
                    {/* Background Dots */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_0)] [background-size:15px_15px]"></div>

                    <div className="relative z-10 w-full max-w-md flex flex-col items-center">
                        <div className="mb-12 text-center">
                            <h2 className="text-4xl md:text-6xl font-display uppercase leading-none">
                                NO TENGO <br /> TIEMPO
                            </h2>
                            <p className="font-comic text-xl mt-4 opacity-70">Llamada rápida, soluciones directas.</p>
                        </div>

                        {/* Phone Illustration */}
                        <div className="mb-8 relative group">
                            <div className="text-[10rem] animate-wiggle inline-block drop-shadow-sketch group-hover:scale-110 transition-transform">☎️</div>
                            <div className="absolute -top-4 -right-4 bg-red-600 text-white font-display text-xl px-4 py-2 rotate-12 animate-pulse border-4 border-black">
                                ¡RING! ¡RING!
                            </div>
                        </div>

                        <CallbackForm />

                        <div className="mt-12 p-6 bg-brand-gray/20 border-2 border-dashed border-black/40 rounded-lg text-center font-bold italic text-gray-500">
                            "Menos es más. Una llamada de 5 min puede ahorrarte 5 horas de caos."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
