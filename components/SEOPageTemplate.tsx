import React from 'react';

interface UseCase {
    title: string;
    description: string;
}

interface SEOPageTemplateProps {
    title: string;
    introProblem: string;
    eliminatedList: string[];
    gainedList: string[];
    useCases: UseCase[];
    ctaText?: string;
    onBack: () => void;
}

export const SEOPageTemplate: React.FC<SEOPageTemplateProps> = ({
    title,
    introProblem,
    eliminatedList,
    gainedList,
    useCases,
    ctaText = "Analizar mi caso ahora",
    onBack
}) => {
    return (
        <div className="bg-white min-h-screen pt-24 pb-16 px-4 md:px-8 font-sans">
            <div className="max-w-4xl mx-auto">
                {/* Navigation / Back */}
                <button
                    onClick={onBack}
                    className="mb-12 flex items-center gap-2 group text-gray-500 hover:text-black transition-colors font-bold uppercase text-xs tracking-widest"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
                </button>

                {/* Header Section */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-7xl font-display uppercase text-brand-dark leading-[1.1] mb-8 drop-shadow-sketch-sm">
                        {title}
                    </h1>
                    <div className="bg-brand-gray border-2 border-black p-6 md:p-8 rounded-sketch-sm shadow-sketch transform -rotate-1">
                        <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
                            {introProblem}
                        </p>
                    </div>
                </header>

                {/* Comparative Section: Eliminated vs Gained */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* What is eliminated */}
                    <div className="bg-white border-2 border-black p-8 rounded-sketch shadow-sketch-lg">
                        <h2 className="font-display text-xl md:text-2xl uppercase mb-6 text-brand-orange">Qué eliminamos</h2>
                        <ul className="space-y-4">
                            {eliminatedList.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-brand-orange font-bold text-lg mt-0.5">✕</span>
                                    <span className="font-bold text-gray-700 leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What the company gains */}
                    <div className="bg-brand-blue/5 border-2 border-black p-8 rounded-sketch shadow-sketch-lg transform rotate-1">
                        <h2 className="font-display text-xl md:text-2xl uppercase mb-6 text-brand-blue">Qué gana tu empresa</h2>
                        <ul className="space-y-4">
                            {gainedList.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-brand-blue font-bold text-lg mt-0.5">✓</span>
                                    <span className="font-bold text-black leading-tight">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Operational Use Cases */}
                <section className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10 text-center">
                        Casos de uso <span className="text-brand-yellow bg-black px-2 inline-block transform -rotate-1">operativos</span>
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="bg-white border-2 border-black p-6 md:p-8 rounded-sketch-sm shadow-sketch hover:shadow-sketch-lg transition-all">
                                <h3 className="font-display text-xl md:text-2xl uppercase mb-3 text-brand-blue">{useCase.title}</h3>
                                <p className="font-medium text-gray-600 leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Final CTA */}
                <footer className="text-center py-12 border-t-2 border-black/5">
                    <h2 className="font-display text-2xl md:text-4xl uppercase mb-8 max-w-2xl mx-auto">
                        ¿Tu operativa se parece a esto? Analizamos tu caso sin compromiso.
                    </h2>
                    <div className="inline-block relative group">
                        <div className="absolute inset-0 bg-brand-yellow rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                        <button
                            onClick={() => {
                                onBack();
                                setTimeout(() => {
                                    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="relative inline-flex bg-black text-white px-12 py-5 text-xl md:text-2xl font-display uppercase border-2 border-black hover:-translate-y-1 transition-all rounded-full"
                        >
                            {ctaText}
                        </button>
                    </div>
                    <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Respuesta técnica en menos de 24h.
                    </p>
                </footer>
            </div>
        </div>
    );
};
