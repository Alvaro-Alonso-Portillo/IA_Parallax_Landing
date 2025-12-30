import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-black/5 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          {/* Logo - Assuming text if no SVG available, or keep existing SVG */}
          <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/681a5abe37971c9a973bd261_logo7.svg" className="w-32" alt="Logo" />
          <p className="font-medium text-gray-500">© 2025 MEME, No Rights Reserved (It's crypto!).</p>
        </div>

        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 bg-black text-white rounded-full border-2 border-black flex items-center justify-center font-bold hover:scale-110 hover:bg-brand-blue transition-all shadow-sketch">Be</a>
          <a href="#" className="w-12 h-12 bg-brand-blue text-white rounded-full border-2 border-black flex items-center justify-center font-bold hover:scale-110 hover:bg-brand-yellow hover:text-black transition-all shadow-sketch">Tg</a>
          <a href="#" className="w-12 h-12 bg-pink-500 text-white rounded-full border-2 border-black flex items-center justify-center font-bold hover:scale-110 hover:bg-brand-orange transition-all shadow-sketch">In</a>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="w-full overflow-hidden mt-12 opacity-80">
        <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d88d3d863d4384cb57b484_Group%201413376295.png" className="w-full min-w-[1000px]" alt="Decor" />
      </div>
    </footer>
  );
};