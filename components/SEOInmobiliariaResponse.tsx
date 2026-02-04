import React, { useEffect } from 'react';

export const SEOInmobiliariaResponse: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        const prevTitle = document.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        const prevDesc = metaDesc?.getAttribute('content') || '';

        window.scrollTo(0, 0);
        document.title = "Respuesta automática a leads inmobiliarios | IA_Parallax";
        if (metaDesc) {
            metaDesc.setAttribute('content', 'No pierdas más ventas por tardar en contestar. Implementa una respuesta automática a leads inmobiliarios por WhatsApp y filtra interesados 24/7.');
        }

        return () => {
            document.title = prevTitle;
            if (metaDesc) metaDesc.setAttribute('content', prevDesc);
        };
    }, []);

    return (
        <div className="bg-white min-h-screen pt-24 pb-16 px-4 md:px-8 font-sans selection:bg-brand-blue selection:text-white">
            <div className="max-w-4xl mx-auto">
                {/* Navigation */}
                <button
                    onClick={onBack}
                    className="mb-12 flex items-center gap-2 group text-gray-500 hover:text-black transition-colors font-bold uppercase text-xs tracking-widest"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
                </button>

                {/* 1. H1 orientado a búsqueda */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-7xl font-display uppercase text-brand-dark leading-[0.95] md:leading-[1.1] mb-8 drop-shadow-sketch-sm">
                        Automatización de la <span className="text-brand-orange">respuesta a leads</span> inmobiliarios
                    </h1>

                    {/* 2. Introducción directa */}
                    <div className="bg-brand-gray border-2 border-black p-6 md:p-8 rounded-sketch-sm shadow-sketch transform -rotate-1">
                        <p className="text-sm md:text-xl font-medium text-gray-800 leading-snug md:leading-relaxed">
                            Si un interesado contacta por un inmueble y no recibe respuesta inmediata, seguirá buscando en el siguiente anuncio. El tiempo medio de interés por una propiedad es corto. Esperar a mañana para responder un mensaje de hoy es, en la mayoría de los casos, haber perdido ya el lead.
                        </p>
                    </div>
                </header>

                {/* 3. Sección: Por qué se pierden leads inmobiliarios */}
                <section className="mb-24 flex flex-col gap-8">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Pérdida de leads inmobiliarios por falta de inmediatez
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch">
                            <p className="font-bold text-gray-700 text-lg">
                                Entran fuera de horario comercial y nadie los atiende.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch transform rotate-1">
                            <p className="font-bold text-gray-700 text-lg">
                                El equipo está enseñando pisos y no puede contestar WhatsApps.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch transform -rotate-1">
                            <p className="font-bold text-gray-700 text-lg">
                                El interesado se olvida de tu agencia porque otra le contestó antes.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Sección: Qué se automatiza en la primera respuesta */}
                <section className="mb-24 bg-brand-dark text-white p-8 md:p-12 rounded-sketch shadow-sketch-xl flex flex-col gap-10">
                    <h2 className="text-3xl md:text-5xl font-display uppercase mb-10 text-brand-orange">
                        Respuesta inmediata por WhatsApp para inmobiliarias
                    </h2>
                    <ul className="space-y-8">
                        <li className="flex items-start gap-4 border-b border-white/10 pb-6">
                            <span className="text-3xl text-brand-yellow">✓</span>
                            <div>
                                <h3 className="font-display uppercase text-xl mb-2">Acuse de recibo inmediato</h3>
                                <p className="text-gray-300 font-medium">Enviamos un mensaje de WhatsApp al instante agradeciendo el interés y confirmando que hemos recibido la solicitud.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4 border-b border-white/10 pb-6">
                            <span className="text-3xl text-brand-yellow">✓</span>
                            <div>
                                <h3 className="font-display uppercase text-xl mb-2">Preguntas de cribado inicial</h3>
                                <p className="text-gray-300 font-medium">Solicitamos datos clave de forma automática: si tiene casa que vender, su presupuesto o la urgencia de compra.</p>
                            </div>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="text-3xl text-brand-yellow">✓</span>
                            <div>
                                <h3 className="font-display uppercase text-xl mb-2">Envío de documentación</h3>
                                <p className="text-gray-300 font-medium">Podemos enviar el dossier del inmueble o planos de forma automática si el lead los solicita por el chat.</p>
                            </div>
                        </li>
                    </ul>
                </section>

                {/* 5. Sección: Cómo funciona la respuesta automática */}
                <section className="mb-24 pt-8 border-t-2 border-black/5">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-6 text-center">
                        Gestión de leads fuera de horario comercial
                    </h2>
                    <p className="text-center text-gray-600 font-bold mb-12 max-w-2xl mx-auto text-sm md:text-base leading-snug">
                        La mayoría de los contactos inmobiliarios entran cuando la oficina está cerrada, justo cuando nadie puede atenderlos.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-brand-yellow border-2 border-black rounded-full flex items-center justify-center font-display text-2xl mx-auto mb-4 shadow-sketch">1</div>
                            <h4 className="font-display uppercase text-lg mb-2">Lead entra</h4>
                            <p className="text-gray-600 font-medium">Llega un mensaje o un correo de un portal inmobiliario.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-brand-yellow border-2 border-black rounded-full flex items-center justify-center font-display text-2xl mx-auto mb-4 shadow-sketch">2</div>
                            <h4 className="font-display uppercase text-lg mb-2">Sistema responde</h4>
                            <p className="text-gray-600 font-medium">En menos de 60 segundos, el interesado recibe un mensaje personalizado.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-16 h-16 bg-brand-yellow border-2 border-black rounded-full flex items-center justify-center font-display text-2xl mx-auto mb-4 shadow-sketch">3</div>
                            <h4 className="font-display uppercase text-lg mb-2">Tú tomas el relevo</h4>
                            <p className="text-gray-600 font-medium italic">
                                El comercial recibe una alerta con el lead ya filtrado. Se acabó tener que <a href="#/problema/trabajo-manual" className="text-brand-blue hover:underline decoration-1 underline-offset-4 decoration-brand-blue">copiar y pegar datos a mano</a> hacia el CRM o Excel.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 6. Sección: Cuándo este sistema tiene sentido */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Contacto inicial automático 24/7
                    </h2>
                    <div className="bg-brand-gray/30 border-2 border-black p-8 rounded-sketch-sm">
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 font-bold text-gray-700">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Recibes más WhatsApps de los que puedes contestar al momento.
                            </li>
                            <li className="flex items-center gap-3 font-bold text-gray-700">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Muchos leads te contactan por la noche o en festivos.
                            </li>
                            <li className="flex items-center gap-3 font-bold text-gray-700">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                Tu equipo comercial está saturado y tarda horas en dar la primera respuesta.
                            </li>
                        </ul>
                        <p className="font-sans font-bold text-gray-500 text-sm">
                            Si además de la respuesta necesitas gestionar cierres, consulta nuestra solución de <a href="#/segmento/inmobiliaria" className="text-brand-blue hover:underline decoration-1 underline-offset-4 decoration-brand-blue">automatización de leads y agenda para inmobiliarias</a>.
                        </p>
                    </div>
                </section>

                {/* 7. CTA final alineado con diagnóstico honesto */}
                <footer className="text-center py-16 border-t-4 border-black border-dashed">
                    <h2 className="font-display text-2xl md:text-5xl uppercase mb-8 leading-tight">
                        ¿Tiene sentido automatizar tu respuesta inicial?
                    </h2>
                    <p className="max-w-xl mx-auto mb-10 font-medium text-gray-600 text-lg leading-relaxed">
                        Revisamos cómo gestionas tus leads actualmente y te decimos con total honestidad si este sistema encaja en tu operativa o si aún no es rentable para tu agencia.
                    </p>
                    <div className="inline-block relative group">
                        <div className="absolute inset-0 bg-brand-orange rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                        <button
                            onClick={() => {
                                onBack();
                                setTimeout(() => {
                                    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="relative inline-flex bg-black text-white px-12 py-6 text-xl md:text-3xl font-display uppercase border-2 border-black hover:-translate-y-1 transition-all rounded-full shadow-sketch-lg"
                        >
                            Analizar si estoy perdiendo leads
                        </button>
                    </div>
                    <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Diagnóstico operativo real. Sin compromiso comercial.
                    </p>
                </footer>
            </div>
        </div>
    );
};
