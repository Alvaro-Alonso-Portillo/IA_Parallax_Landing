import React, { useEffect, useState } from 'react';
import { PreOrderModal } from './PreOrderModal';

interface TemplateCardProps {
    title: string;
    price: string;
    features: string[];
    image: string;
    badge?: string;
    onPreOrder: (title: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ title, price, features, image, badge, onPreOrder }) => (
    <div className="bg-white border-4 border-black p-6 shadow-sketch hover:shadow-sketch-lg hover:-translate-y-2 transition-all flex flex-col group h-full relative">
        {/* Dynamic Badge */}
        {badge && (
            <div className="absolute -top-3 -right-3 z-30 bg-red-600 text-white border-2 border-black px-4 py-2 font-display text-sm uppercase rotate-12 shadow-sketch">
                {badge}
            </div>
        )}

        <div className="w-full aspect-[4/3] border-2 border-black mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 bg-brand-yellow border-2 border-black px-3 py-1 font-display text-xs uppercase -rotate-6">
                PREMIUM
            </div>
        </div>

        <h3 className="text-3xl font-display uppercase mb-2">{title}</h3>

        {/* Enhanced Price */}
        <div className="font-accent text-4xl md:text-5xl my-4 text-[#d97706] drop-shadow-sm">
            {price}
        </div>

        <ul className="space-y-2 mb-8 flex-grow">
            {features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 font-sans font-bold text-sm">
                    <span className="text-brand-orange">▶</span> {f}
                </li>
            ))}
        </ul>

        <button
            onClick={() => onPreOrder(title)}
            className="w-full bg-black text-white p-6 md:p-4 border-2 border-black font-display uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-0 hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
            PRE-COMPRAR
        </button>
    </div>
);

export const Templates: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handlePreOrder = (title: string) => {
        setSelectedTemplate(title);
        setIsModalOpen(true);
    };

    const templates = [
        {
            title: "Pack Agentes IA",
            price: "$299",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg",
            features: ["3 Agentes Personalizados", "Integración con Telegram", "Panel de métricas"],
            badge: "POPULAR"
        },
        {
            title: "Automatización CRM",
            price: "$149",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d409f1a1b8c8d480153f0c_Group%201413376299.png",
            features: ["Lead Scoring IA", "Secuencias de Email", "Sincronización Hubspot"]
        },
        {
            title: "Fábrica de Contenidos",
            price: "$199",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png",
            features: ["Multi-redes Social", "Generación de Imágenes", "Planificación 30 días"],
            badge: "AHORRA TIEMPO"
        },
        {
            title: "Bot de Onboarding",
            price: "$120",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1e576a54ab84d9991fc4e_%D0%B2%D1%96%D0%BA%D0%BD%D0%BE.png",
            features: ["Bienvenida Automática", "Recogida de Datos", "Firma de Contratos"]
        },
        {
            title: "Asistente de Reuniones",
            price: "$89",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1b90511ce48cd4d3b_snork.avif",
            features: ["Resumen de Zoom/Meet", "Extracción de Tareas", "Envío de Acta"]
        },
        {
            title: "Soporte E-commerce",
            price: "$249",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f0540b33d5d141c396_notdog.avif",
            features: ["Rastreo de Pedidos", "FAQs Inteligentes", "Gestión de Devoluciones"],
            badge: "POPULAR"
        },
        {
            title: "Redactor SEO IA",
            price: "$179",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d1d4f1540b33d5d141c464_keycat.avif",
            features: ["Búsqueda de Keywords", "Redacción Automática", "Optimización On-page"]
        },
        {
            title: "Sistema Auto-Factura",
            price: "$135",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d409f1a1b8c8d480153f0c_Group%201413376299.png",
            features: ["Facturación Automática", "Recordatorio de Impagos", "Integración Stripe"]
        },
        {
            title: "IA Customer Success",
            price: "$210",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg",
            features: ["Predicción de Churn", "Alertas de Inactividad", "Reportes Mensuales"],
            badge: "AHORRA TIEMPO"
        },
        {
            title: "Automatizador RRHH",
            price: "$159",
            image: "https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d85869983afc658b8861ea_pepe%20(1).png",
            features: ["Filtro de CVs", "Agendado de Entrevistas", "Feedback Automático"]
        }
    ];

    return (
        <div className="min-h-screen bg-brand-light">
            <PreOrderModal
                templateName={selectedTemplate}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Back Button */}
            <div className="fixed top-20 md:top-24 left-4 md:left-8 z-40">
                <button
                    onClick={onBack}
                    className="bg-white border-2 border-black p-3 md:p-4 rounded-full shadow-sketch hover:shadow-sketch-lg hover:-translate-y-1 transition-all flex items-center gap-2 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="font-display uppercase text-xs md:text-sm hidden xs:inline text-black">Volver</span>
                </button>
            </div>

            <header className="py-20 md:py-32 bg-brand-yellow border-b-4 border-black relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 md:p-10 select-none pointer-events-none text-brand-dark/10 text-[20vw] md:text-[15vw] font-display leading-none">
                    TPLS
                </div>
                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <h1 className="text-5xl md:text-9xl font-display uppercase leading-none drop-shadow-sketch mb-6">
                        Plantillas <br />
                        Listas para USAR.
                    </h1>
                    <p className="font-sans text-lg md:text-2xl font-black max-w-2xl bg-white border-2 border-black p-3 md:p-4 inline-block -rotate-1 shadow-sm">
                        Pon tu negocio en piloto automático en cuestión de minutos.
                    </p>
                </div>
            </header>

            <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
                    {templates.map((t, idx) => (
                        <TemplateCard key={idx} {...t} onPreOrder={handlePreOrder} />
                    ))}
                </div>
            </section>

            {/* Special Offer Section */}
            <section className="py-24 md:py-32 bg-brand-gray border-y-8 border-black relative overflow-hidden">
                <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
                    <div className="bg-white border-[6px] border-brand-yellow p-8 md:p-16 shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] rotate-0 transform hover:-rotate-1 transition-transform">
                        <div className="absolute -top-6 -left-6 bg-black text-white px-6 py-2 font-display text-xl uppercase -rotate-6 shadow-sketch">
                            OFERTA LIMITADA
                        </div>

                        <h2 className="text-4xl md:text-7xl font-display uppercase mb-8">EL PACK COMPLETO</h2>
                        <p className="font-sans text-xl md:text-2xl font-black mb-12 max-w-2xl mx-auto leading-tight">
                            Obtén acceso a <span className="text-brand-blue uppercase underline">todas</span> nuestras plantillas actuales y futuras de por vida por un pago único.
                        </p>

                        <div className="font-accent text-7xl md:text-9xl text-red-600 mb-12 drop-shadow-sketch-sm">
                            $999
                        </div>

                        <button
                            onClick={() => handlePreOrder('EL PACK COMPLETO (Suscripción de por vida)')}
                            className="w-full sm:w-auto bg-brand-orange text-white px-8 py-8 md:px-16 md:py-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all font-display text-lg md:text-3xl uppercase"
                        >
                            QUIERO EL TESORO COMPLETO 💎
                        </button>
                    </div>
                </div>
                {/* Decorative Floating Icon */}
                <div className="absolute top-10 left-10 text-9xl animate-float opacity-20">🚀</div>
                <div className="absolute bottom-10 right-10 text-9xl animate-float-delayed opacity-20">💎</div>
            </section>

            <div className="py-20 text-center">
                <p className="font-comic text-2xl">¿No encuentras lo que buscas? <br />
                    <button
                        onClick={() => {
                            onBack();
                            setTimeout(() => {
                                document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                        }}
                        className="text-brand-blue underline cursor-pointer hover:text-black transition-colors"
                    >
                        Crea una para ti
                    </button>
                </p>
            </div>
        </div>
    );
};
