import React, { useEffect } from 'react';

const TemplateCard: React.FC<{ title: string; price: string; features: string[]; image: string }> = ({ title, price, features, image }) => (
    <div className="bg-white border-4 border-black p-6 shadow-sketch hover:shadow-sketch-lg hover:-translate-y-2 transition-all flex flex-col group h-full">
        <div className="w-full aspect-[4/3] border-2 border-black mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-brand-yellow border-2 border-black px-3 py-1 font-display text-xs uppercase -rotate-6">
                PREMIUM
            </div>
        </div>

        <h3 className="text-3xl font-display uppercase mb-2">{title}</h3>
        <div className="text-2xl font-bold mb-4 text-brand-blue">{price}</div>

        <ul className="space-y-2 mb-8 flex-grow">
            {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-sans font-bold text-sm">
                    <span className="text-brand-orange">▶</span> {f}
                </li>
            ))}
        </ul>

        <button className="w-full bg-black text-white p-4 border-2 border-black font-display uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-0 hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
            PRE-COMPRAR
        </button>
    </div>
);

export const Templates: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const templates = [
        {
            title: "IA Agent Bundle",
            price: "$299",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg",
            features: ["3 Agentes Personalizados", "Integración con Telegram", "Dashboard de métricas"]
        },
        {
            title: "CRM Automation",
            price: "$149",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d409f1a1b8c8d480153f0c_Group%201413376299.png",
            features: ["Lead Scoring IA", "Email Sequences", "Sincronización Hubspot"]
        },
        {
            title: "Content Factory",
            price: "$199",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png",
            features: ["Multi-redes Social", "Generación de Imágenes", "Planificación 30 días"]
        },
        {
            title: "Onboarding Bot",
            price: "$120",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1e576a54ab84d9991fc4e_%D0%B2%D1%96%D0%BA%D0%BD%D0%BE.png",
            features: ["Bienvenida Automática", "Recogida de Datos", "Firma de Contratos"]
        },
        {
            title: "Meeting Assistant",
            price: "$89",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif",
            features: ["Resumen de Zoom/Meet", "Extracción de Tareas", "Envío de Acta"]
        },
        {
            title: "E-commerce Support",
            price: "$249",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif",
            features: ["Rastreo de Pedidos", "FAQs Inteligentes", "Gestión de Devoluciones"]
        },
        {
            title: "SEO Writer IA",
            price: "$179",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1540b33d5d141c464_keycat.avif",
            features: ["Búsqueda de Keywords", "Redacción Automática", "Optimización On-page"]
        },
        {
            title: "Auto-Billing System",
            price: "$135",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d409f1a1b8c8d480153f0c_Group%201413376299.png",
            features: ["Facturación Automática", "Recordatorio de Impagos", "Integración Stripe"]
        },
        {
            title: "Customer Success IA",
            price: "$210",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg",
            features: ["Predicción de Churn", "Alertas de Inactividad", "Reportes Mensuales"]
        },
        {
            title: "HR Automator",
            price: "$159",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png",
            features: ["Filtro de CVs", "Agendado de Entrevistas", "Feedback Automático"]
        }
    ];

    return (
        <div className="min-h-screen bg-brand-light">
            {/* Back Button */}
            <div className="fixed top-24 left-8 z-40">
                <button
                    onClick={onBack}
                    className="bg-white border-2 border-black p-4 rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-display uppercase text-sm">Volver al Home</span>
                </button>
            </div>

            <header className="py-32 bg-brand-yellow border-b-4 border-black relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 select-none pointer-events-none text-brand-dark/10 text-[15vw] font-display leading-none">
                    ASSETS
                </div>
                <div className="max-w-6xl mx-auto px-8 relative z-10">
                    <h1 className="text-7xl md:text-9xl font-display uppercase leading-none drop-shadow-sketch mb-4">
                        Plantillas <br />
                        Listas para USAR.
                    </h1>
                    <p className="font-sans text-2xl font-black max-w-2xl bg-white border-2 border-black p-4 inline-block -rotate-1">
                        Pon tu negocio en piloto automático en cuestión de minutos.
                    </p>
                </div>
            </header>

            <section className="py-24 max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {templates.map((t, idx) => (
                        <TemplateCard key={idx} {...t} />
                    ))}
                </div>
            </section>

            {/* Special Offer Section */}
            <section className="py-24 bg-brand-gray border-y-4 border-black relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                    <div className="bg-white border-4 border-black p-12 shadow-sketch-xl rotate-1">
                        <h2 className="text-5xl font-display uppercase mb-6">EL PACK COMPLETO</h2>
                        <p className="font-sans text-xl font-bold mb-8">
                            Obtén acceso a todas nuestras plantillas actuales y futuras de por vida por un pago único.
                        </p>
                        <div className="text-6xl font-display text-brand-orange mb-8">$999</div>
                        <button className="bg-brand-blue text-white px-12 py-6 border-4 border-black shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all font-display text-2xl uppercase">
                            RESERVAR ACCESO DE POR VIDA
                        </button>
                    </div>
                </div>
                {/* Decorative Floating Icon */}
                <div className="absolute top-10 left-10 text-8xl animate-float opacity-20">🚀</div>
                <div className="absolute bottom-10 right-10 text-8xl animate-float-delayed opacity-20">💎</div>
            </section>

            <div className="py-20 text-center">
                <p className="font-comic text-2xl">¿No encuentras lo que buscas? <br /> <span className="text-brand-blue underline cursor-pointer">Crea una para ti</span></p>
            </div>
        </div>
    );
};
