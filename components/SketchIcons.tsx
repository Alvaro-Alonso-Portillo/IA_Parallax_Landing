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

export const GlossySocialIcon: React.FC<{ type: 'linkedin' | 'x' | 'instagram' | 'github'; href: string }> = ({ type, href }) => {
    const getStyles = () => {
        switch (type) {
            case 'linkedin': return { bg: 'bg-[#0077B5]', icon: 'text-white' };
            case 'x': return { bg: 'bg-black', icon: 'text-white' };
            case 'instagram': return { bg: 'bg-gradient-to-tr from-[#FFDC80] via-[#FD1D1D] to-[#833AB4]', icon: 'text-white' };
            case 'github': return { bg: 'bg-[#181717]', icon: 'text-white' };
            default: return { bg: 'bg-black', icon: 'text-white' };
        }
    };

    const { bg, icon } = getStyles();

    return (
        <a href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-10 h-10 ${bg} rounded-full border-2 border-black flex items-center justify-center hover:scale-110 transition-transform shadow-sm relative overflow-hidden group`}>
            {/* Glossy Reflection */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white opacity-20 rounded-t-full pointer-events-none"></div>

            {/* Icons */}
            {type === 'linkedin' && (
                <svg className={`w-5 h-5 ${icon}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.025-3.064-1.867-3.064-1.868 0-2.154 1.459-2.154 2.967v5.701h-3v-11h2.88v1.503h.04c.4-.758 1.378-1.558 2.84-1.558 3.036 0 3.599 1.998 3.599 4.594v6.461z" />
                </svg>
            )}
            {type === 'x' && (
                <svg className={`w-4 h-4 ${icon}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )}
            {type === 'instagram' && (
                <svg className={`w-5 h-5 ${icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
            )}
            {type === 'github' && (
                <svg className={`w-5 h-5 ${icon}`} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
            )}
        </a>
    );
};
