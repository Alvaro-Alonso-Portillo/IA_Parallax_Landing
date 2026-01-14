import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

export const LeadMagnetChat: React.FC = () => {
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
                .from('leads_chat')
                .insert([
                    {
                        email: email,
                        role: userType,
                    },
                ]);

            if (error) throw error;
            setStep('success');

            setTimeout(() => {
                setIsOpen(false);
            }, 3000);

        } catch (error) {
            console.error('Error saving lead:', error);
            alert('Ups, un bug nos ha mordido, intenta de nuevo');
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
        <div className="fixed bottom-10 right-10 z-[9999] flex flex-col items-end">
            {/* Lead Magnet Modal */}
            {isOpen && (
                <div className="mb-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-[300px] w-[90vw] relative animate-in fade-in slide-in-from-bottom-4 duration-300">
                    {/* Comic Chat Tail */}
                    <div className="absolute -bottom-4 right-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-black"></div>
                    <div className="absolute -bottom-[10px] right-6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-white z-10"></div>

                    {step === 'success' ? (
                        <div className="text-center py-4 animate-in zoom-in duration-300">
                            <span className="text-5xl mb-4 block animate-bounce">🚀</span>
                            <h4 className="font-display text-2xl uppercase mb-2 leading-none">¡Recibido!</h4>
                            <p className="font-sans font-bold text-sm text-gray-800 leading-tight">
                                Nuestros robots ya están trabajando en ello.
                            </p>
                        </div>
                    ) : (
                        <>
                            <h4 className="font-display text-2xl uppercase mb-6 leading-none border-b-4 border-black pb-2 inline-block">
                                {step === 'selection' ? '¿Quién eres?' : '¡Te entendemos!'}
                            </h4>

                            {step === 'selection' ? (
                                <div className="flex flex-col gap-4">
                                    <button
                                        onClick={() => handleSelectType('Agencia Saturada')}
                                        className="w-full py-4 bg-brand-blue text-white font-display text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center"
                                    >
                                        Agencia Saturada
                                    </button>
                                    <button
                                        onClick={() => handleSelectType('Negocio en Caos')}
                                        className="w-full py-4 bg-brand-orange text-white font-display text-lg uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all text-center"
                                    >
                                        Negocio en Caos
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="animate-in fade-in duration-300">
                                    <p className="font-sans font-bold text-[0.9rem] mb-4 uppercase leading-tight italic bg-brand-yellow px-2 py-1 border-2 border-black inline-block transform -rotate-1">
                                        ¿Dónde te enviamos el plan de rescate?
                                    </p>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Tu mejor email aquí..."
                                        className="w-full p-3 border-2 border-black mb-4 focus:outline-none focus:ring-4 focus:ring-brand-blue/20 font-sans font-bold placeholder:text-gray-400"
                                        autoFocus
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full py-4 bg-black text-white font-display text-xl uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:bg-brand-yellow hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                <span>ENVIANDO...</span>
                                            </>
                                        ) : (
                                            'ENVIAR PLAN'
                                        )}
                                    </button>
                                </form>
                            )}
                        </>
                    )}
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={handleOpen}
                className={`p-4 bg-black text-white rounded-full border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-300 z-50 overflow-hidden relative group ${isOpen ? 'bg-red-500' : 'bg-brand-yellow hover:bg-white'}`}
                aria-label="Open Chat"
            >
                {isOpen ? (
                    <span className="text-3xl font-bold block transform rotate-0 transition-transform">×</span>
                ) : (
                    <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8 text-black group-hover:scale-110 transition-transform">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-black animate-ping"></span>
                    </div>
                )}
            </button>
        </div>
    );
};
