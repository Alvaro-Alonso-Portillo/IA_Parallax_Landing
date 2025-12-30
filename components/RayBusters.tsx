import React from 'react';

export const RayBusters: React.FC = () => {
    return (
        <section className="py-24 bg-brand-gray relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-4 text-center">

                <h2 className="text-5xl md:text-8xl font-display uppercase text-brand-dark drop-shadow-sketch-sm mb-6 relative inline-block">
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

                <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">

                    {/* Central Character (Meditating) */}
                    <div className="relative z-10 w-64 h-64 md:w-96 md:h-96">
                        <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d8589fe8dc80cbd5e9e377_Group%201413376294%20(1).svg" alt="Meditating" className="w-full h-full object-contain drop-shadow-sketch-xl animate-float" />
                        {/* Rug/Carpet */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[120%] h-12 bg-red-400 border-2 border-black rounded-[50%] -z-10 shadow-sketch"></div>
                    </div>

                    {/* Orbiting Steps */}
                    {/* Step 1 */}
                    <div className="absolute top-10 left-[10%] md:left-[20%] animate-float-delayed">
                        <div className="w-12 h-12 bg-blue-400 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl shadow-sketch hover:scale-110 transition-transform cursor-pointer group">
                            1
                            <div className="absolute top-full mt-2 w-48 bg-white border border-black p-2 text-base rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                Investigación y relajación
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="absolute top-20 right-[10%] md:right-[20%] animate-float">
                        <div className="w-12 h-12 bg-yellow-400 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl shadow-sketch hover:scale-110 transition-transform cursor-pointer group">
                            2
                            <div className="absolute top-full mt-2 w-48 bg-white border border-black p-2 text-base rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                Create Magic
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="absolute bottom-32 left-[5%] md:left-[15%] animate-float">
                        <div className="w-12 h-12 bg-green-400 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl shadow-sketch hover:scale-110 transition-transform cursor-pointer group">
                            3
                            <div className="absolute bottom-full mb-2 w-48 bg-white border border-black p-2 text-base rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                Launch Rocket
                            </div>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="absolute bottom-20 right-[5%] md:right-[15%] animate-float-delayed">
                        <div className="w-12 h-12 bg-purple-400 rounded-full border-2 border-black flex items-center justify-center font-bold text-xl shadow-sketch hover:scale-110 transition-transform cursor-pointer group">
                            4
                            <div className="absolute bottom-full mb-2 w-48 bg-white border border-black p-2 text-base rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                Profit & Zen
                            </div>
                        </div>
                    </div>

                    {/* Connecting Dotted Lines (Simplified SVG) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none -z-10 text-gray-400 opacity-50" stroke="currentColor" strokeWidth="2" strokeDasharray="8,8">
                        {/* Abstract paths connecting the dots approximately */}
                        <path d="M200,100 Q400,50 600,150" fill="none" />
                        <path d="M600,150 Q700,300 650,450" fill="none" />
                        <path d="M650,450 Q400,550 200,400" fill="none" />
                        <path d="M200,400 Q100,250 200,100" fill="none" />
                    </svg>

                </div>

            </div>
        </section>
    );
};
