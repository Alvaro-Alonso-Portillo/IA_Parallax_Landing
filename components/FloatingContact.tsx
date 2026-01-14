import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export const FloatingContact: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<'selection' | 'email' | 'success'>('selection');
    const [userType, setUserType] = useState<string>('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
            setIsOpen(false);
        }
    };

    const handleOpen = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setStep('selection');
            setEmail('');
        }
    };

    const handleSelectType = (type: string) => {
        setUserType(type);
        setStep('email');
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            const { error } = await supabase
                .from('contacts')
                .insert([
                    {
                        email: email,
                        power: userType, // Guardamos el tipo de usuario en la columna 'power'
                        message: `Lead captado desde botón flotante (${userType})`,
                    },
                ]);

            if (error) throw error;
            setStep('success');

            // Cerrar automáticamente después de 3 segundos
            setTimeout(() => {
                setIsOpen(false);
            }, 3000);

        } catch (error) {
            console.error('Error saving lead:', error);
            alert('Hubo un error. Inténtalo de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end">
            {/* Popover / Modal */}
            {isOpen && (
                <div className="mb-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-[280px] w-[90vw] relative animate-in fade-in slide-in-from-bottom-4 duration-300">
                    <div className="absolute -bottom-4 right-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-black"></div>
                    <div className="absolute -bottom-[10px] right-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white z-10"></div>

                    {step === 'success' ? (
                        <div className="text-center py-4 animate-in zoom-in duration-300">
                            <span className="text-4xl mb-4 block">🚀</span>
                            <h4 className="font-display text-2xl uppercase mb-2">¡RECIBIDO!</h4>
                            <p className="font-sans font-bold text-sm text-gray-600">Te contactaremos pronto.</p>
                        </div>
                    ) : (
                        <>
                            <h4 className="font-display text-2xl uppercase mb-4 leading-none">
                                {step === 'selection' ? '👋 Hey, ¿qué buscas?' : '📩 ¡Casi listo!'}
                            </h4>

                            {step === 'selection' ? (
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() => handleSelectType('Agencia')}
                                        className="w-full py-3 bg-brand-blue text-white font-display text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                    >
                                        Soy Agencia
                                    </button>
                                    <button
                                        onClick={() => handleSelectType('Negocio')}
                                        className="w-full py-3 bg-brand-orange text-white font-display text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
                                    >
                                        Soy Negocio
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="animate-in fade-in duration-300">
                                    <p className="font-sans font-bold text-sm mb-2 uppercase">Soy {userType}:</p>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Tu mejor email aquí..."
                                        className="w-full p-3 border-2 border-black mb-3 focus:outline-none focus:ring-2 focus:ring-black font-sans font-medium"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-3 bg-brand-yellow text-black font-display text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all disabled:opacity-50"
                                    >
                                        {loading ? 'Enviando...' : 'Empezar'}
                                    </button>
                                </form>
                            )}
                        </>
                    )}
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={handleOpen}
                className={`p-4 bg-brand-yellow text-black rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-yellow-400 transition-all duration-300 group ${isOpen ? 'rotate-45 bg-red-400 hover:bg-red-500' : ''}`}
                aria-label="Contact us"
            >
                {isOpen ? (
                    <span className="text-2xl font-bold leading-none">×</span>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-8 h-8"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12.375m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                    </svg>
                )}
            </button>
        </div>
    );
};


