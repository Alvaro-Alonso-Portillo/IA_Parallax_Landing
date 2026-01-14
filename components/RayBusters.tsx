import React from 'react';

export const RayBusters: React.FC = () => {
    return (
        <section className="py-24 bg-brand-gray relative overflow-hidden">
            <div className="w-full mx-auto px-0 text-center">

                <h2 className="max-w-[1440px] mx-auto text-5xl md:text-8xl font-display uppercase text-brand-dark drop-shadow-sketch-sm mb-6 relative inline-block px-4">
                    NUESTROS CAZADORES DE BUGS
                    {/* Decorator */}
                    <span className="absolute -top-8 -right-12 text-6xl animate-bounce">🧘</span>
                </h2>

                <div className="max-w-2xl mx-auto mb-16 px-4">
                    <p className="font-sans text-xl font-medium text-black">
                        No arreglamos fallos técnicos.
                        <br />
                        Eliminamos procesos mal planteados, tareas innecesarias y herramientas que no se hablan entre sí.
                    </p>
                </div>

                <div className="relative w-full h-[700px] md:h-[900px] flex items-center justify-center overflow-hidden">

                    {/* Central Character/Illustration */}
                    <div className="relative z-0 w-full h-full flex items-center justify-center pointer-events-none">
                        <img
                            src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1e576a54ab84d9991fc4e_%D0%B2%D1%96%D0%BA%D0%BD%D0%BE.png"
                            alt="Central Scene"
                            className="w-full max-w-4xl h-full object-contain drop-shadow-sketch-xl opacity-90"
                        />
                        {/* Shadow/Rug effect */}
                        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-[60%] h-12 bg-black/5 blur-xl rounded-[50%] -z-10"></div>
                    </div>

                    {/* Orbiting Steps as Sticky Notes/Cards */}

                    {/* Step 1: Arriba Izquierda */}
                    <div className="absolute top-[12%] left-[4%] md:left-[8%] animate-float-delayed z-20 max-w-[280px] md:max-w-[340px]">
                        <div className="bg-blue-100 border-[3px] border-black p-6 md:p-8 shadow-sketch-lg rotate-[-3deg] transition-transform hover:rotate-0 hover:scale-110 cursor-default relative">
                            <div className="absolute -top-5 -left-5 w-12 h-12 md:w-16 md:h-16 bg-blue-400 rounded-full border-[3px] border-black flex items-center justify-center font-display text-2xl md:text-3xl shadow-sm z-30">1</div>
                            <h4 className="font-display text-2xl md:text-4xl mb-3 uppercase tracking-tighter leading-none">Diagnóstico 🔍</h4>
                            <p className="font-sans text-base md:text-xl font-bold text-gray-800 leading-snug">Analizamos tus procesos actuales y encontramos los cuellos de botella.</p>
                        </div>
                    </div>

                    {/* Step 2: Arriba Derecha */}
                    <div className="absolute top-[18%] right-[4%] md:right-[8%] animate-float z-20 max-w-[280px] md:max-w-[340px]">
                        <div className="bg-yellow-100 border-[3px] border-black p-6 md:p-8 shadow-sketch-lg rotate-[4deg] transition-transform hover:rotate-0 hover:scale-110 cursor-default relative">
                            <div className="absolute -top-5 -right-5 w-12 h-12 md:w-16 md:h-16 bg-yellow-400 rounded-full border-[3px] border-black flex items-center justify-center font-display text-2xl md:text-3xl shadow-sm z-30">2</div>
                            <h4 className="font-display text-2xl md:text-4xl mb-3 uppercase tracking-tighter leading-none">Estrategia 🧠</h4>
                            <p className="font-sans text-base md:text-xl font-bold text-gray-800 leading-snug">Diseñamos un sistema personalizado que conecte tus herramientas.</p>
                        </div>
                    </div>

                    {/* Step 3: Abajo Izquierda */}
                    <div className="absolute bottom-[22%] left-[4%] md:left-[6%] animate-float z-20 max-w-[280px] md:max-w-[340px]">
                        <div className="bg-green-100 border-[3px] border-black p-6 md:p-8 shadow-sketch-lg rotate-[3deg] transition-transform hover:rotate-0 hover:scale-110 cursor-default relative">
                            <div className="absolute -top-5 -left-5 w-12 h-12 md:w-16 md:h-16 bg-green-400 rounded-full border-[3px] border-black flex items-center justify-center font-display text-2xl md:text-3xl shadow-sm z-30">3</div>
                            <h4 className="font-display text-2xl md:text-4xl mb-3 uppercase tracking-tighter leading-none">Despliegue 🚀</h4>
                            <p className="font-sans text-base md:text-xl font-bold text-gray-800 leading-snug">Implementamos la IA y las automatizaciones en tu día a día.</p>
                        </div>
                    </div>

                    {/* Step 4: Abajo Derecha */}
                    <div className="absolute bottom-[18%] right-[4%] md:right-[12%] animate-float-delayed z-20 max-w-[280px] md:max-w-[340px]">
                        <div className="bg-purple-100 border-[3px] border-black p-6 md:p-8 shadow-sketch-lg rotate-[-4deg] transition-transform hover:rotate-0 hover:scale-110 cursor-default relative">
                            <div className="absolute -top-5 -right-5 w-12 h-12 md:w-16 md:h-16 bg-purple-400 rounded-full border-[3px] border-black flex items-center justify-center font-display text-2xl md:text-3xl shadow-sm z-30">4</div>
                            <h4 className="font-display text-2xl md:text-4xl mb-3 uppercase tracking-tighter leading-none">Zen & Escala 🧘</h4>
                            <p className="font-sans text-base md:text-xl font-bold text-gray-800 leading-snug">Tú supervisas los resultados mientras el sistema trabaja solo.</p>
                        </div>
                    </div>

                    {/* Connecting Dotted Lines (Simplified SVG) - Fuller Paths */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 text-black/10" stroke="currentColor" strokeWidth="3" strokeDasharray="10,12" fill="none">
                        <path d="M20%,20% Q50%,15% 80%,25%" />
                        <path d="M80%,25% Q85%,50% 80%,75%" />
                        <path d="M80%,75% Q50%,85% 20%,70%" />
                        <path d="M20%,70% Q15%,45% 20%,20%" />
                    </svg>

                </div>

            </div>
        </section>
    );
};
