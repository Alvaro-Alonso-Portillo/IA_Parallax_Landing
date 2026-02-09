import React from 'react';

const CAOS_IMAGE_URL = 'https://res.cloudinary.com/drfr1lzlt/image/upload/v1768985064/Generate_a_new_2k_202601210933_u1b0lk.jpg';
const CRECIMIENTO_IMAGE_URL = 'https://res.cloudinary.com/drfr1lzlt/image/upload/v1768985074/Gemini_Generated_Image_j54k0uj54k0uj54k_mkykii.png';

export const BeforeAfterToggle: React.FC = () => {
    return (
        <section className="pt-20 pb-28 px-4 bg-white border-t-2 border-black overflow-hidden">
            <div className="max-w-[1440px] mx-auto text-center relative z-10">
                {/* Header */}
                <h2 className="text-4xl md:text-6xl font-display uppercase mb-4">Antes / Después</h2>
                <p className="text-gray-500 text-sm md:text-base font-bold uppercase tracking-widest mb-16 px-4">
                    La diferencia entre una empresa que sobrevive y una que escala.
                </p>

                {/* Main Comparison Layout */}
                <div className="flex flex-col md:flex-row gap-16 md:gap-8 lg:gap-16 items-start justify-center relative">

                    {/* Desktop Visual Connector - Large Arrow */}
                    <div className="hidden lg:flex absolute left-1/2 top-40 -translate-x-1/2 z-30 pointer-events-none items-center justify-center">
                        <div className="bg-white border-4 border-black p-4 rounded-full shadow-sketch transform rotate-12 animate-float">
                            <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </div>
                    </div>

                    {/* Column: ANTES */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="flex flex-col gap-2 text-left">
                            <h3 className="font-display text-2xl md:text-3xl uppercase text-gray-900 leading-none">
                                ANTES: <span className="font-black">CAOS OPERATIVO</span>
                            </h3>
                            <div className="h-1.5 w-32 bg-red-400"></div>
                        </div>

                        <div className="relative w-full aspect-video border-4 border-black rounded-sketch overflow-hidden bg-gray-100 shadow-sketch-lg group">
                            <img
                                src={CAOS_IMAGE_URL}
                                alt="Estado de Caos Operativo"
                                width="720"
                                height="400"
                                loading="lazy"
                                className="w-full h-full object-cover grayscale md:grayscale-0 md:group-hover:grayscale transition-all duration-500"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 border-2 border-black px-4 py-1 text-white font-display text-xs uppercase shadow-sketch -rotate-2">
                                EL LAB (CAOS)
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black p-8 rounded-sketch text-left shadow-sketch-lg">
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start">
                                    <div className="shrink-0 mt-1 bg-red-100 p-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000]">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl font-black leading-tight text-gray-900">
                                        Tareas repetidas y manuales que queman al equipo.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="shrink-0 mt-1 bg-red-100 p-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000]">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl font-black leading-tight text-gray-900">
                                        Leads que se enfrían por falta de seguimiento inmediato.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <div className="shrink-0 mt-1 bg-red-100 p-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#000]">
                                        <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl font-black leading-tight text-gray-900">
                                        Información dispersa en mil carpetas y notas adhesivas.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Column: DESPUÉS */}
                    <div className="w-full md:w-1/2 flex flex-col gap-6">
                        <div className="flex flex-col gap-2 text-left">
                            <h3 className="font-display text-2xl md:text-3xl uppercase text-[#2563EB] leading-none">
                                DESPUÉS: <span className="font-black italic text-[#2563EB] bg-transparent">CRECIMIENTO ESCALABLE</span>
                            </h3>
                            <div className="h-1.5 w-48 bg-[#2563EB]"></div>
                        </div>

                        <div className="relative w-full aspect-video border-4 border-black rounded-sketch overflow-hidden bg-gray-100 shadow-sketch-lg">
                            <img
                                src={CRECIMIENTO_IMAGE_URL}
                                alt="Estado de Crecimiento Escalable"
                                width="720"
                                height="400"
                                loading="lazy"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-[#2563EB] border-2 border-black px-4 py-1 text-white font-display text-xs uppercase shadow-sketch rotate-2">
                                EL ÉXITO (SISTEMA)
                            </div>
                        </div>

                        <div className="bg-white border-4 border-black p-8 rounded-sketch text-left shadow-sketch-lg">
                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start italic">
                                    <div className="shrink-0 mt-1 bg-blue-100 p-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#2563EB]">
                                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl font-black leading-tight text-[#1e3a8a]">
                                        Operativa automatizada: el equipo se centra en vender.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start italic">
                                    <div className="shrink-0 mt-1 bg-blue-100 p-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#2563EB]">
                                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl font-black leading-tight text-[#1e3a8a]">
                                        Leads priorizados y atendidos en menos de 2 minutos.
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start italic">
                                    <div className="shrink-0 mt-1 bg-blue-100 p-1 rounded-sm border-2 border-black shadow-[2px_2px_0px_#2563EB]">
                                        <svg className="w-5 h-5 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="font-sans text-xl md:text-2xl font-black leading-tight text-[#1e3a8a]">
                                        Control total de métricas en tiempo real.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
