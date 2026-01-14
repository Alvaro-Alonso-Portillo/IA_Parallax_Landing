import React, { useEffect } from 'react';

const DevTool: React.FC<{ name: string; icon: string; description: string }> = ({ name, icon, description }) => (
    <div className="bg-white border-2 border-black p-6 shadow-sketch flex items-start gap-4 hover:-translate-y-1 transition-all group">
        <div className="w-16 h-16 shrink-0 grayscale group-hover:grayscale-0 transition-all flex items-center justify-center border-2 border-black bg-gray-50 rounded-lg overflow-hidden">
            <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        </div>
        <div>
            <h3 className="text-xl font-display uppercase mb-1">{name}</h3>
            <p className="font-sans text-sm font-bold text-gray-600">{description}</p>
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
            description: "El cerebro de nuestras automatizaciones. Potencia y flexibilidad absoluta para IA."
        },
        {
            name: "OpenAI / Anthropic",
            icon: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
            description: "Los modelos de lenguaje más avanzados del mercado integrados en tu flujo."
        },
        {
            name: "LangChain",
            icon: "https://cdn.worldvectorlogo.com/logos/langchain.svg",
            description: "Framework especializado para construir aplicaciones con IA conectadas a tus datos."
        },
        {
            name: "n8n / Zapier",
            icon: "https://cdn.worldvectorlogo.com/logos/zapier-1.svg",
            description: "Orquestación de flujos de trabajo sin límites entre miles de apps."
        },
        {
            name: "Supabase / SQL",
            icon: "https://cdn.worldvectorlogo.com/logos/supabase-1.svg",
            description: "Bases de datos ultra-rápidas para almacenar todo el conocimiento de tu negocio."
        },
        {
            name: "React / Tailwind",
            icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
            description: "Interfaces modernas y responsivas para que interactúes con tus sistemas."
        }
    ];

    return (
        <div className="min-h-screen bg-[#fffdf5]">
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

            <header className="py-20 md:py-32 bg-brand-orange border-b-4 border-black relative overflow-hidden">
                {/* Decorative Grid Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]"></div>

                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <h1 className="text-5xl md:text-9xl font-display uppercase leading-none drop-shadow-sketch mb-6">
                        STACK <br />
                        <span className="bg-black text-white px-2 md:px-4 inline-block -rotate-1">TECNOLÓGICO</span>
                    </h1>
                    <p className="font-sans text-lg md:text-2xl font-black max-w-2xl text-black/80">
                        Construimos con las herramientas más potentes del mundo para que tu sistema nunca se quede atrás.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24 max-w-6xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-24">
                    {tools.map((t, idx) => (
                        <DevTool key={idx} {...t} />
                    ))}
                </div>

                {/* Blueprint Section */}
                <div className="bg-white border-[3px] md:border-4 border-black p-6 md:p-16 shadow-sketch-xl rounded-sketch relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 text-7xl md:text-9xl font-display rotate-12 select-none pointer-events-none">CODE</div>

                    <h2 className="text-3xl md:text-6xl font-display uppercase mb-8 md:mb-12 border-b-4 border-black pb-4 inline-block">Nuestra Filosofía</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        <div>
                            <div className="text-4xl md:text-5xl mb-4">🛡️</div>
                            <h3 className="text-xl md:text-2xl font-display uppercase mb-2 text-brand-blue">Seguridad Primero</h3>
                            <p className="font-sans font-bold text-sm md:text-base text-gray-600">Tus datos nunca salen de tu entorno controlado. Implementamos capas de cifrado y autenticación de nivel bancario.</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl mb-4">🚀</div>
                            <h3 className="text-xl md:text-2xl font-display uppercase mb-2 text-brand-orange">Escalabilidad</h3>
                            <p className="font-sans font-bold text-sm md:text-base text-gray-600">Diseñado para crecer. Ya sea que proceses 1 o 100,000 eventos por hora, el sistema responde con la misma velocidad.</p>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl mb-4">🏗️</div>
                            <h3 className="text-xl md:text-2xl font-display uppercase mb-2 text-brand-yellow text-shadow-black">Código Limpio</h3>
                            <p className="font-sans font-bold text-sm md:text-base text-gray-600">Arquitectura modular. Si mañana quieres cambiar de CRM o de modelo de IA, tu infraestructura sigue siendo sólida.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 md:py-24 bg-brand-dark text-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
                    <h2 className="text-4xl md:text-7xl font-display uppercase mb-8 leading-none">¿Tienes un reto técnico complejo?</h2>
                    <p className="font-sans text-lg md:text-2xl font-medium mb-12 opacity-80 italic">"Si se puede imaginar y tiene una API, nosotros lo podemos automatizar."</p>
                    <a href="#contact" className="inline-block bg-white text-black px-8 md:px-12 py-4 md:py-6 text-xl md:text-2xl font-display uppercase border-4 border-black shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all rounded-full">
                        Inicia tu Desarrollo
                    </a>
                </div>
            </section>
        </div>
    );
};
