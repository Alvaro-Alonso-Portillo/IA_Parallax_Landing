import React, { useEffect } from 'react';

const CapabilityCard: React.FC<{ title: string; description: string; icon: string; color: string }> = ({ title, description, icon, color }) => (
    <div className={`p-8 border-4 border-black shadow-sketch hover:shadow-sketch-lg transition-all ${color} flex flex-col items-center text-center group`}>
        <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-display uppercase mb-4 leading-none text-brand-dark border-b-2 border-black/10 pb-2 w-full">
            {title}
        </h3>
        <p className="font-sans font-bold text-base md:text-lg leading-snug text-gray-700">
            {description}
        </p>
    </div>
);

export const Capabilities: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const capabilities = [
        {
            title: "Automatización de Ventas",
            description: "Creamos agentes de IA que califican leads, agendan reuniones y hacen seguimiento 24/7 en WhatsApp y Telegram.",
            icon: "💰",
            color: "bg-brand-blue/20"
        },
        {
            title: "Atención al Cliente IA",
            description: "Reducimos la carga de soporte en un 80% con bases de conocimiento inteligentes que resuelven dudas complejas al instante.",
            icon: "🤝",
            color: "bg-brand-yellow/20"
        },
        {
            title: "Fábrica de Contenido",
            description: "Sistemas automáticos que redactan posts, generan imágenes y programan contenidos en todas tus redes sociales.",
            icon: "🎨",
            color: "bg-brand-orange/20"
        },
        {
            title: "Extracción y Análisis",
            description: "Nuestra IA lee facturas, contratos o excels y extrae la información clave directamente a tu CRM sin errores.",
            icon: "📊",
            color: "bg-green-100"
        },
        {
            title: "Integración de Ecosistemas",
            description: "Hacemos que tus herramientas (Slack, Sheets, CRM, Web) hablen entre sí de forma fluida y sin fricciones.",
            icon: "🔌",
            color: "bg-purple-100"
        },
        {
            title: "Consultoría Estratégica",
            description: "Analizamos tu negocio paso a paso para encontrar los 'Bugs' de ineficiencia y diseñar la solución técnica perfecta.",
            icon: "🧠",
            color: "bg-red-100"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
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

            <header className="py-20 md:py-32 bg-brand-dark text-white border-b-4 border-black relative overflow-hidden text-center">
                {/* Decorative BG */}
                <div className="absolute inset-0 opacity-10 flex flex-wrap gap-4 p-4 pointer-events-none select-none overflow-hidden">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <span key={i} className="font-display text-2xl md:text-4xl">IA_PARALLAX</span>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <h1 className="text-4xl md:text-9xl font-display uppercase leading-tight mb-6">
                        Poder Sin Límite <br />
                        <span className="text-brand-blue underline decoration-4 decoration-white underline-offset-8">Para tu Negocio</span>
                    </h1>
                    <p className="font-sans text-lg md:text-3xl font-medium max-w-3xl mx-auto opacity-90 italic">
                        "No adaptamos tu negocio a la IA. Adaptamos la IA para que tu negocio sea imparable."
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
                    {capabilities.map((cap, idx) => (
                        <CapabilityCard key={idx} {...cap} />
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 md:py-24 bg-brand-gray border-y-4 border-black">
                <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
                    <h2 className="text-3xl md:text-5xl font-display uppercase mb-12 md:mb-16 underline decoration-brand-orange underline-offset-8">Nuestro Método</h2>
                    <div className="flex flex-col gap-8 md:gap-12 text-left relative">
                        {/* Connecting Vertical Line */}
                        <div className="absolute left-[31px] md:left-[39px] top-0 bottom-0 w-1 bg-black border-l-2 border-dashed border-white/20"></div>

                        {[
                            { step: "01", title: "Descubrimiento", desc: "Auditamos tus procesos actuales para detectar fugas de tiempo y dinero." },
                            { step: "02", title: "Prototipado", desc: "Diseñamos un flujo de trabajo optimizado y elegimos el stack tecnológico ideal." },
                            { step: "03", title: "Despliegue", desc: "Implementamos la solución y entrenamos tus modelos con tus datos reales." }
                        ].map((m, i) => (
                            <div key={i} className="flex gap-4 md:gap-8 items-start relative z-10">
                                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-brand-yellow border-[3px] md:border-4 border-black rounded-full flex items-center justify-center font-display text-2xl md:text-3xl shadow-sketch">
                                    {m.step}
                                </div>
                                <div className="bg-white border-[3px] md:border-4 border-black p-5 md:p-6 shadow-sketch flex-grow transform rotate-1">
                                    <h3 className="text-xl md:text-2xl font-display uppercase mb-2">{m.title}</h3>
                                    <p className="font-sans font-bold text-base md:text-lg text-gray-700 leading-tight">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 md:py-32 text-center bg-white px-6">
                <h2 className="text-4xl md:text-7xl font-display uppercase mb-12">¿Preparado para el siguiente nivel?</h2>
                <button
                    onClick={() => {
                        onBack();
                        setTimeout(() => {
                            document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}
                    className="inline-flex w-full sm:w-auto justify-center bg-brand-orange text-white px-8 py-6 md:px-12 md:py-6 text-xl md:text-3xl font-display uppercase border-4 border-black shadow-sketch hover:shadow-sketch-lg hover:-translate-y-2 transition-all rounded-full"
                >
                    Empezar Ahora 🚀
                </button>
            </section>
        </div>
    );
};
