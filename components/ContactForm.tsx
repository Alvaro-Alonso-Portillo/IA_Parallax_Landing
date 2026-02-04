import React, { useState } from 'react';

export type FormContext = 'generic' | 'inmobiliaria' | 'respuesta' | 'manual' | 'facturas';

export const ContactForm: React.FC<{ context?: FormContext }> = ({ context = 'generic' }) => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [selectedProblem, setSelectedProblem] = useState('');

    // Sincronizar preselección cuando cambia el contexto
    React.useEffect(() => {
        if (context === 'respuesta' || context === 'inmobiliaria') {
            setSelectedProblem('leads');
        } else if (context === 'manual') {
            setSelectedProblem('manual');
        } else if (context === 'facturas') {
            setSelectedProblem('facturas');
        } else {
            setSelectedProblem('');
        }
    }, [context]);

    const getIntroText = () => {
        switch (context) {
            case 'inmobiliaria':
                return "Revisamos cómo gestionas tus leads y tu agenda. Te diremos con honestidad si estás perdiendo oportunidades.";
            case 'respuesta':
                return "Analizamos tu tiempo de respuesta y el primer contacto con tus leads. Si no es rentable automatizarlo, también te lo diremos.";
            case 'manual':
                return "Revisamos dónde estás copiando datos entre herramientas. Te decimos si ese trabajo manual se puede eliminar.";
            case 'facturas':
                return "Analizamos cómo gestionas facturas y documentos. Te diremos si automatizarlo te ahorrará tiempo real.";
            case 'generic':
            default:
                return "Analizamos tu caso y te decimos si automatizar tiene sentido o no. No es una llamada comercial.";
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log('Enviando diagnóstico con contexto:', data.origin_context);

        // Logic simulation
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="w-full bg-white border-2 border-black p-6 md:p-10 shadow-sketch-lg rounded-sketch text-center animate-in zoom-in duration-300">
                <span className="text-5xl mb-4 block">✅</span>
                <h3 className="font-display text-xl md:text-2xl uppercase mb-2">Hemos recibido tu información</h3>
                <p className="font-sans font-bold text-gray-700 text-base md:text-lg leading-relaxed">
                    Revisaremos tu caso y, si tiene sentido, te escribiremos para comentarlo. Si no lo vemos claro, también te lo diremos.
                </p>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#fcfcfc] border-2 border-black p-6 md:p-10 shadow-sketch-lg rounded-sketch relative">
            {/* Header */}
            <div className="mb-6 md:mb-8">
                <h3 className="font-display text-2xl md:text-3xl uppercase leading-none mb-3 text-black">
                    ¿Hablamos de tu caso?
                </h3>
                <p className="font-sans font-bold text-gray-600 text-base md:text-base leading-snug">
                    {getIntroText()}
                </p>
            </div>

            {/* Form - Single Column Layout */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-5">
                {/* Contexo de origen persistente (Solo interno) */}
                <input type="hidden" name="origin_context" value={context} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Nombre</label>
                        <input
                            type="text"
                            required
                            name="name"
                            autoComplete="name"
                            placeholder="Tu nombre"
                            className="w-full py-5 px-6 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-base md:text-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Email</label>
                        <input
                            type="email"
                            required
                            name="email"
                            autoComplete="email"
                            inputMode="email"
                            placeholder="tu@email.com"
                            className="w-full py-5 px-6 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-base md:text-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1.5">
                    <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Empresa</label>
                    <input
                        type="text"
                        required
                        name="company"
                        autoComplete="organization"
                        placeholder="Nombre de tu empresa"
                        className="w-full py-5 px-6 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-base md:text-sm"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Problema principal</label>
                        <div className="relative">
                            <select
                                required
                                name="problem"
                                value={selectedProblem}
                                onChange={(e) => setSelectedProblem(e.target.value)}
                                className="w-full py-5 pl-6 pr-12 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-base md:text-sm appearance-none cursor-pointer"
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="leads">Leads sin responder</option>
                                <option value="manual">Trabajo manual entre herramientas</option>
                                <option value="facturas">Gestión de facturas y documentos</option>
                                <option value="agenda">Agenda desordenada</option>
                                <option value="otro">Otro</option>
                            </select>
                            <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none text-black">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="font-bold text-[10px] uppercase tracking-widest text-gray-400 pl-5">Volumen aproximado</label>
                        <div className="relative">
                            <select
                                required
                                name="volume"
                                className="w-full py-5 pl-6 pr-12 bg-white border-2 border-black rounded-full focus:outline-none focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/5 transition-all font-sans font-bold text-base md:text-sm appearance-none cursor-pointer"
                            >
                                <option value="" disabled selected>Selecciona una opción</option>
                                <option value="bajo">Bajo (ocasional)</option>
                                <option value="medio">Medio (todas las semanas)</option>
                                <option value="alto">Alto (todos los días)</option>
                            </select>
                            <div className="absolute top-1/2 right-6 -translate-y-1/2 pointer-events-none text-black">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-brand-blue text-white py-6 px-8 font-display text-lg md:text-xl uppercase border-2 border-black rounded-full shadow-sketch md:hover:shadow-sketch-lg md:hover:-translate-y-1 transition-all flex items-center justify-center gap-3 mt-4 disabled:opacity-50 disabled:translate-y-0"
                >
                    {status === 'loading' ? (
                        <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        "Analizar mi caso"
                    )}
                </button>
                <div className="mt-6 text-center">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-snug max-w-[280px] mx-auto">
                        No enviamos spam ni hacemos llamadas comerciales sin contexto.
                    </p>
                </div>
            </form>

            <div className="mt-6 text-center border-t-2 border-black/5 pt-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-snug max-w-[280px] mx-auto">
                    No hacemos demos. Analizamos tu caso y respondemos con criterio.
                </p>
            </div>
        </div>
    );
};
