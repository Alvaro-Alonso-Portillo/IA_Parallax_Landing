import React, { useEffect } from 'react';

const DevTool: React.FC<{ name: string; icon: string; description: string; rotation: string }> = ({ name, icon, description, rotation }) => (
    <div
        className={`bg-white border-4 border-black p-6 shadow-sketch-xl flex items-start gap-4 hover:rotate-0 transition-all duration-300 group relative ${rotation}`}
        style={{ clipPath: 'polygon(1% 2%, 99% 1%, 98% 98%, 2% 96%, 0% 50%)' }}
    >
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>

        <div className="w-16 h-16 shrink-0 grayscale group-hover:grayscale-0 transition-all flex items-center justify-center border-2 border-black bg-[#fdfbf7] shadow-sketch rounded-lg overflow-hidden relative z-10">
            <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        </div>
        <div className="relative z-10">
            <h3 className="text-xl font-display uppercase mb-1 leading-tight">{name}</h3>
            <p className="font-sans text-sm font-bold text-gray-800 leading-snug">{description}</p>
        </div>
    </div>
);

export const Development: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const tools = [
        {
            name: "Python",
            icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
            description: "El cerebro de nuestras automatizaciones. Potencia y flexibilidad absoluta para IA.",
            rotation: "-rotate-1"
        },
        {
            name: "OpenAI / Anthropic",
            icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            description: "Los modelos de lenguaje más avanzados del mercado integrados en tu flujo.",
            rotation: "rotate-2"
        },
        {
            name: "LangChain",
            icon: "https://cdn.worldvectorlogo.com/logos/langchain.svg",
            description: "Framework especializado para construir aplicaciones con IA conectadas a tus datos.",
            rotation: "rotate-1"
        },
        {
            name: "n8n / Zapier",
            icon: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
            description: "Orquestación de flujos de trabajo sin límites entre miles de apps.",
            rotation: "-rotate-2"
        },
        {
            name: "Supabase / SQL",
            icon: "https://cdn.worldvectorlogo.com/logos/supabase-1.svg",
            description: "Bases de datos ultra-rápidas para almacenar todo el conocimiento de tu negocio.",
            rotation: "rotate-1"
        },
        {
            name: "React / Tailwind",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            description: "Interfaces modernas y responsivas para que interactúes con tus sistemas.",
            rotation: "-rotate-1"
        }
    ];

    return (
        <div className="min-h-screen bg-[#fffdf5] relative overflow-hidden">
            {/* Background Hand-drawn Decorations */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                {/* Coffee Stain */}
                <div className="absolute top-40 right-10 w-64 h-64 grayscale contrast-125">
                    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full opacity-40">
                        <circle cx="50" cy="50" r="40" stroke="#5c4033" strokeWidth="8" strokeLinecap="round" strokeDasharray="10 20" />
                        <circle cx="52" cy="52" r="38" stroke="#5c4033" strokeWidth="4" opacity="0.5" />
                    </svg>
                </div>

                {/* Hand-drawn Connections */}
                <svg className="w-full h-full" viewBox="0 0 1200 1000" preserveAspectRatio="none">
                    <path d="M400 350 Q 500 300 600 380" stroke="black" strokeWidth="3" strokeDasharray="10 5" fill="none" />
                    <path d="M700 450 Q 800 550 900 420" stroke="black" strokeWidth="3" strokeDasharray="10 5" fill="none" />
                    <path d="M400 550 Q 500 650 600 580" stroke="black" strokeWidth="3" strokeDasharray="10 5" fill="none" />
                    <path d="M700 650 Q 800 750 900 680" stroke="black" strokeWidth="3" strokeDasharray="10 5" fill="none" />

                    {/* Scribbles */}
                    <circle cx="100" cy="800" r="40" stroke="black" strokeWidth="2" strokeDasharray="5 5" />
                    <path d="M1000 100 L 1100 200 M 1100 100 L 1000 200" stroke="black" strokeWidth="4" />
                </svg>
            </div>

            {/* Back Button */}
            <div className="fixed top-20 md:top-24 left-4 md:left-8 z-40">
                <button
                    onClick={onBack}
                    className="bg-white border-2 border-black p-3 md:p-4 rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-display uppercase text-xs md:text-sm text-black hidden xs:inline">Volver</span>
                </button>
            </div>

            <header className="py-24 md:py-36 bg-brand-orange border-b-8 border-black relative overflow-hidden">
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_0)] [background-size:30px_30px]"></div>

                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <h1 className="text-6xl md:text-[10rem] font-display uppercase leading-none drop-shadow-sketch mb-8">
                        STACK <br />
                        <span className="bg-black text-white px-4 md:px-8 inline-block -rotate-2 transform translate-y-2">TECNOLÓGICO</span>
                    </h1>
                    <p className="font-sans text-xl md:text-3xl font-black max-w-2xl text-black bg-white/40 p-2 inline-block">
                        Construimos con las herramientas más potentes del mundo.
                    </p>
                </div>
            </header>

            <section className="py-20 md:py-32 max-w-7xl mx-auto px-6 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-24 md:mb-32">
                    {tools.map((t, idx) => (
                        <DevTool key={idx} {...t} />
                    ))}
                </div>

                {/* Blueprint Section */}
                <div
                    className="bg-white border-4 border-black p-8 md:p-20 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden"
                    style={{ clipPath: 'polygon(0% 2%, 100% 0%, 100% 98%, 1% 100%)' }}
                >
                    <div className="absolute top-0 right-0 p-4 md:p-12 opacity-5 text-[12rem] font-display rotate-12 select-none pointer-events-none">CODE</div>

                    <div className="relative inline-block mb-16">
                        <h2 className="text-4xl md:text-7xl font-display uppercase relative z-10">Nuestra Filosofía</h2>
                        <div className="absolute bottom-0 left-0 w-full h-4 bg-brand-yellow -z-10 transform -rotate-1"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
                        <div className="group">
                            <div className="text-5xl md:text-6xl mb-6 group-hover:animate-wiggle inline-block">🛡️</div>
                            <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 text-brand-blue">Seguridad Primero</h3>
                            <p className="font-sans font-bold text-base md:text-lg text-gray-800 leading-relaxed">Tus datos nunca salen de tu entorno controlado. Implementamos capas de cifrado y autenticación de nivel bancario.</p>
                        </div>
                        <div className="group">
                            <div className="text-5xl md:text-6xl mb-6 group-hover:animate-float inline-block">🚀</div>
                            <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 text-brand-orange">Escalabilidad</h3>
                            <p className="font-sans font-bold text-base md:text-lg text-gray-800 leading-relaxed">Diseñado para crecer. Ya sea que proceses 1 o 100,000 eventos por hora, el sistema responde con la misma velocidad.</p>
                        </div>
                        <div className="group">
                            <div className="text-5xl md:text-6xl mb-6 group-hover:animate-spin-slow inline-block">🏗️</div>
                            <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 text-brand-yellow">Código Limpio</h3>
                            <p className="font-sans font-bold text-base md:text-lg text-gray-800 leading-relaxed">Arquitectura modular. Si mañana quieres cambiar de CRM o de modelo de IA, tu infraestructura sigue siendo sólida.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 md:py-36 bg-black text-white text-center relative overflow-hidden border-t-8 border-black">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
                <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
                    <h2 className="text-5xl md:text-8xl font-display uppercase mb-10 leading-none tracking-tighter">¿Tienes un reto técnico complejo?</h2>
                    <p className="font-sans text-xl md:text-3xl font-black mb-16 opacity-90 italic bg-brand-orange/20 py-2 inline-block">"Si se puede imaginar y tiene una API, nosotros lo podemos automatizar."</p>
                    <div className="flex justify-center">
                        <a href="#contact" className="group relative">
                            <div className="absolute inset-0 bg-brand-yellow rounded-full transform translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                            <button className="relative bg-white text-black px-12 md:px-20 py-6 md:py-8 text-2xl md:text-3xl font-display uppercase border-4 border-black transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-full">
                                Inicia tu Desarrollo
                            </button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};
