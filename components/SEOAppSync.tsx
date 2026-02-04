import React, { useEffect } from 'react';

export const SEOAppSync: React.FC<{ onBack: () => void }> = ({ onBack }) => {
    useEffect(() => {
        const prevTitle = document.title;
        const metaDesc = document.querySelector('meta[name="description"]');
        const prevDesc = metaDesc?.getAttribute('content') || '';

        window.scrollTo(0, 0);
        document.title = "Eliminar trabajo manual entre aplicaciones | IA_Parallax";
        if (metaDesc) {
            metaDesc.setAttribute('content', 'Optimiza tu operativa eliminando el trabajo manual de copiar y pegar datos entre aplicaciones. Evita errores por duplicar información y recupera el control de tus procesos.');
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
                    className="mb-12 flex items-center gap-2 group text-gray-400 hover:text-black transition-colors font-bold uppercase text-xs tracking-widest"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Volver al inicio
                </button>

                {/* 1. H1 orientado a búsqueda */}
                <header className="mb-16">
                    <h1 className="text-4xl md:text-7xl font-display uppercase text-brand-dark leading-[0.95] md:leading-[1.1] mb-8 drop-shadow-sketch-sm text-balance">
                        Eliminar el <span className="text-brand-blue">trabajo manual</span> entre aplicaciones y hojas de cálculo
                    </h1>

                    {/* 2. Introducción directa al problema */}
                    <div className="bg-brand-gray border-2 border-black p-6 md:p-10 rounded-sketch-sm shadow-sketch transform -rotate-1">
                        <p className="text-[15px] md:text-2xl font-medium text-gray-800 leading-snug md:leading-relaxed italic">
                            Cargar datos de un email a un CRM o descargar adjuntos para subirlos a una carpeta. Si tu equipo pasa horas "moviendo información", no están trabajando, están haciendo de puente humano.
                        </p>
                    </div>
                </header>

                {/* 3. Sección: Dónde se pierde tiempo copiando datos */}
                <section className="mb-24">
                    <h2 className="text-3xl md:text-6xl font-display uppercase text-brand-dark mb-10 leading-tight">
                        Dónde se pierde tiempo al copiar y pegar datos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-orange">El bucle del Email</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Recibir información por correo y tener que escribirla de nuevo en tu herramienta de gestión o en una base de datos interna.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full transform rotate-1">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-orange">El caos del Excel</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Mantener hojas de cálculo actualizadas realizando trabajo administrativo manual para volcar ventas, leads o inventario una y otra vez.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full transform -rotate-1">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-orange">La desconexión de carpetas</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Organizar archivos manuales: descargar el PDF, renombrarlo y subirlo a la carpeta correspondiente. Un caso crítico es la <a href="#/problema/facturas-documentacion" className="text-brand-blue hover:underline decoration-1 underline-offset-4 decoration-brand-blue">gestión de facturas y documentación</a> administrativa.
                            </p>
                        </div>
                        <div className="bg-white border-2 border-black p-6 rounded-sketch-sm shadow-sketch h-full">
                            <h3 className="font-display text-2xl uppercase mb-3 text-brand-orange">Actualización de CRM</h3>
                            <p className="font-bold text-gray-600 leading-snug">
                                Mover leads o estados de pedidos entre diferentes plataformas que no se hablan entre ellas.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. Sección: Errores habituales por mover información a mano */}
                <section className="mb-24 py-12 border-y-4 border-black border-dashed">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Errores por duplicar información a mano
                    </h2>
                    <ul className="space-y-6">
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Datos duplicados que ensucian tus herramientas y generan confusión.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Errores humanos en cifras o nombres que impiden contactar con el cliente.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Información desactualizada que no coincide entre tus diferentes aplicaciones.</p>
                        </li>
                        <li className="flex items-center gap-4 group">
                            <span className="w-12 h-12 bg-red-100 border-2 border-black flex items-center justify-center font-display text-2xl shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">!</span>
                            <p className="font-bold text-xl text-gray-700">Falta de fiabilidad de los datos que te obliga a revisarlo todo dos veces.</p>
                        </li>
                    </ul>
                </section>

                {/* 5. Sección: Cómo funciona una automatización entre aplicaciones */}
                <section className="mb-20 bg-brand-dark text-white p-8 md:p-12 rounded-sketch shadow-sketch-xl">
                    <h2 className="text-3xl md:text-5xl font-display uppercase mb-10 text-brand-blue">
                        Cómo funciona la conexión automática
                    </h2>
                    <div className="space-y-12">
                        <div className="flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-16 h-16 bg-brand-blue text-black border-2 border-white flex items-center justify-center font-display text-3xl shrink-0 rounded-full shadow-sketch">1</div>
                            <div>
                                <h3 className="text-xl font-display uppercase mb-2">Evento disparador</h3>
                                <p className="text-gray-300 font-medium">Ocurre algo: llega un email, se cierra un pago o se rellena un formulario web.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-16 h-16 bg-brand-blue text-black border-2 border-white flex items-center justify-center font-display text-3xl shrink-0 rounded-full shadow-sketch">2</div>
                            <div>
                                <h3 className="text-xl font-display uppercase mb-2">Tratamiento de datos</h3>
                                <p className="text-gray-300 font-medium">El sistema extrae la información relevante y la limpia (elimina espacios, pone mayúsculas, etc.).</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-6 md:items-center">
                            <div className="w-16 h-16 bg-brand-blue text-black border-2 border-white flex items-center justify-center font-display text-3xl shrink-0 rounded-full shadow-sketch">3</div>
                            <div>
                                <h3 className="text-xl font-display uppercase mb-2">Acción en destino</h3>
                                <p className="text-gray-300 font-medium">La información aparece por arte de magia en todas tus otras herramientas conectadas, sin que nadie pulse una tecla.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. Sección: Qué gana la empresa al eliminar este trabajo */}
                <section className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        Beneficios de eliminar las tareas manuales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <span className="text-4xl">⏱️</span>
                            <div>
                                <h4 className="font-display text-lg uppercase mb-1">Tiempo real recuperado</h4>
                                <p className="text-gray-600 font-medium">Tu equipo administrativo deja de copiar datos y empieza a gestionar tareas que realmente aportan valor.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-4xl">🎯</span>
                            <div>
                                <h4 className="font-display text-lg uppercase mb-1">Datos 100% fiables</h4>
                                <p className="text-gray-600 font-medium">Se eliminan los errores de dedo. Lo que sale de un sitio llega al otro exactamente igual.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-4xl">🚀</span>
                            <div>
                                <h4 className="font-display text-lg uppercase mb-1">Escalabilidad</h4>
                                <p className="text-gray-600 font-medium">Puedes procesar 10 o 1.000 registros al día sin tener que contratar a más personas para mover los papeles.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <span className="text-4xl">📊</span>
                            <div>
                                <h4 className="font-display text-lg uppercase mb-1">Control de la información</h4>
                                <p className="text-gray-600 font-medium">Toda la empresa maneja los mismos números. Un ejemplo claro es la <a href="#/segmento/inmobiliaria" className="text-brand-blue hover:underline decoration-1 underline-offset-4 decoration-brand-blue">automatización de leads y agenda para inmobiliarias</a>, donde los datos fluyen solos de Idealista al CRM.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. Sección: Cuándo tiene sentido automatizar */}
                <section className="mb-20 bg-brand-yellow/30 border-2 border-black p-8 md:p-12 rounded-sketch-lg relative">
                    <div className="absolute -top-6 left-12 bg-black text-white px-4 py-1 font-display uppercase text-sm">Checklist de viabilidad</div>
                    <h2 className="text-3xl md:text-5xl font-display uppercase text-brand-dark mb-10">
                        ¿Cuándo tiene sentido automatizar?
                    </h2>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                            <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                            La tarea se repite al menos 3 o 4 veces al día.
                        </li>
                        <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                            <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                            El proceso siempre sigue los mismos pasos lógicos.
                        </li>
                        <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                            <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                            Tu equipo se queja del "aburrimiento" o la "rutina" de ciertas tareas mecánicas.
                        </li>
                        <li className="flex items-center gap-3 font-bold text-gray-700 text-lg">
                            <span className="w-3 h-3 bg-black rounded-full shrink-0"></span>
                            Te da miedo tomar decisiones basadas en Excel porque no sabes si está actualizado.
                        </li>
                    </ul>
                </section>

                {/* 8. CTA final honesto */}
                <footer className="text-center py-16 border-t-4 border-black border-dashed">
                    <h2 className="font-display text-2xl md:text-5xl uppercase mb-8 leading-tight">
                        ¿Tiene sentido automatizar tu operativa?
                    </h2>
                    <p className="max-w-xl mx-auto mb-10 font-medium text-gray-600 text-lg leading-relaxed">
                        Revisamos tus procesos y te decimos con honestidad si automatizar este trabajo tiene sentido o no.
                    </p>
                    <div className="inline-block relative group w-full max-w-[400px]">
                        <div className="absolute inset-0 bg-brand-blue rounded-full transform translate-x-3 translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
                        <button
                            onClick={() => {
                                onBack();
                                setTimeout(() => {
                                    document.getElementById('diagnostico')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                            className="relative w-full flex items-center justify-center bg-black text-white px-6 py-6 text-lg md:text-2xl lg:text-3xl font-display uppercase border-2 border-black hover:-translate-y-1 transition-all rounded-full shadow-sketch-lg"
                        >
                            Analizar si este trabajo manual se puede automatizar
                        </button>
                    </div>
                    <p className="mt-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
                        Diagnóstico técnico real. Sin compromiso comercial.
                    </p>
                </footer>
            </div>
        </div>
    );
};
