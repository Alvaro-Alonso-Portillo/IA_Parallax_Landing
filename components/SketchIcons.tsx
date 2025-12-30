import React from 'react';

export const Cloud1: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 200 100" className={className} fill="white" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20,70 Q10,60 20,50 Q30,30 60,30 Q80,10 110,20 Q140,10 160,40 Q190,40 180,70 Q190,90 160,90 L40,90 Q10,90 20,70 Z" />
    </svg>
);

export const Cloud2: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 240 120" className={className} fill="white" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30,80 Q20,60 40,50 Q60,20 100,30 Q130,10 170,30 Q210,30 220,70 Q230,100 190,100 L60,100 Q20,100 30,80 Z" />
    </svg>
);

export const CloudWithAntenna: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 250 180" className={className} fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        {/* Antenna */}
        <path d="M80,80 L60,30 M60,30 L40,40 M60,30 L80,20 M70,50 L90,40 M65,60 L50,55" />
        <path d="M160,80 L180,30 M180,30 L160,20 M180,30 L200,40 M170,50 L190,40 M175,60 L190,55" />

        {/* Cloud Body */}
        <path d="M40,100 Q20,80 50,70 Q70,40 120,50 Q160,30 200,60 Q240,60 230,100 Q250,130 210,140 L70,140 Q30,140 40,100 Z" fill="white" />
    </svg>
);

export const FistIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
        <path d="M7 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
        <path d="M15 11V7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4" />
        <path d="M19 11V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2.5" />
        <path d="M21 15a2 2 0 0 1-2 2H7l-3 3-1-1 3-3V7" fill="white" /> {/* Simplified fist shape */}
        <circle cx="5" cy="18" r="2" fill="white" stroke="currentColor" /> {/* Thumb */}
        <rect x="7" y="10" width="14" height="10" rx="3" fill="white" stroke="currentColor" />
        <line x1="11" y1="10" x2="11" y2="20" />
        <line x1="15" y1="10" x2="15" y2="20" />
        <line x1="19" y1="10" x2="19" y2="20" />
    </svg>
);

export const SoonSticker: React.FC = () => (
    <div className="absolute -top-5 -right-5 transform rotate-12 z-20">
        <div className="relative bg-white border-2 border-black rounded-[50%] px-3 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center min-w-[60px]">
            <span className="font-display uppercase text-xs font-bold tracking-widest">Soon</span>
            {/* Stars */}
            <svg className="absolute -top-2 -left-2 w-4 h-4 text-brand-yellow fill-current animate-spin-slow" viewBox="0 0 24 24"><path d="M12 2l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></svg>
            <svg className="absolute -bottom-2 -right-2 w-3 h-3 text-brand-yellow fill-current" viewBox="0 0 24 24"><path d="M12 2l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" /></svg>
        </div>
    </div>
);

export const GlossySocialIcon: React.FC<{ type: 'web' | 'telegram' | 'instagram' | 'behance'; href: string }> = ({ type, href }) => {
    const getStyles = () => {
        switch (type) {
            case 'web': return { bg: 'bg-[#ea4c89]', icon: 'text-white' }; // Pink (Dribbble-like in image)
            case 'telegram': return { bg: 'bg-[#2AABEE]', icon: 'text-white' };
            case 'instagram': return { bg: 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]', icon: 'text-white' };
            case 'behance': return { bg: 'bg-[#0057ff]', icon: 'text-white' };
            default: return { bg: 'bg-black', icon: 'text-white' };
        }
    };

    const { bg, icon } = getStyles();

    return (
        <a href={href} className={`w-10 h-10 ${bg} rounded-full border-2 border-black flex items-center justify-center hover:scale-110 transition-transform shadow-sm relative overflow-hidden group`}>
            {/* Glossy Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-20 rounded-t-full pointer-events-none"></div>

            {/* Icons */}
            {type === 'web' && <svg className={`w-5 h-5 ${icon}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8z" /><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>} {/* Generic Web/Dribbble */}
            {type === 'telegram' && <svg className={`w-5 h-5 ${icon}`} fill="currentColor" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.28 7.27-6.36c.38-.35-.08-.55-.6-.3l-9.64 6.35L2 12.02c-.91-.3-.96-1 .2-1.47l19.34-7.48c.89-.37 1.67.23 1.37 1.47l-3.3 15.54c-.24 1.13-.88 1.43-1.78.89l-4.9-3.73z" /></svg>}
            {type === 'instagram' && <svg className={`w-5 h-5 ${icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>}
            {type === 'behance' && <span className={`${icon} font-bold text-sm`}>Bē</span>}
        </a>
    );
};
