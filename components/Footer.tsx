import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="component_footer bg-[#f9f9f9] border-t-2 border-black relative font-sans">
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row relative">

        {/* Left Column - Contact Form (40%) */}
        <div className="w-full lg:w-[40%] bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black p-8 md:p-16 flex flex-col justify-center relative">
          <div className="max-w-xl mx-auto w-full">
            <h3 className="text-4xl md:text-5xl font-display mb-8 text-black">
              Hey amigo! <br /> Trabaja con nosotros
            </h3>

            <form className="flex flex-col gap-6 form_block_footer">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">Elige tu poder!</label>
                <select className="w-full p-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all appearance-none cursor-pointer">
                  <option>Basic</option>
                  <option>Standard</option>
                  <option>Premium</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">¡Oye! ¿Eres alcista o bajista?</label>
                <input type="text" className="w-full p-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">email</label>
                <input type="email" className="w-full p-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">Teléfono</label>
                <input type="text" className="w-full p-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm uppercase">¿Algún comentario que debamos conocer?</label>
                <textarea rows={3} className="w-full p-3 bg-white border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all resize-none"></textarea>
              </div>

              <button className="w-full bg-black text-white border-2 border-black p-4 rounded-lg font-bold uppercase hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-0 hover:translate-x-[2px] hover:translate-y-[2px]">
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Locker Room Scene (60%) */}
        <div className="w-full lg:w-[60%] bg-[#fffdf5] relative overflow-hidden min-h-[600px] flex flex-col items-center justify-end pb-20 border-l-2 border-black">

          {/* Background Lockers */}
          <div className="absolute inset-x-10 bottom-40 top-20 flex gap-4 justify-center opacity-60">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex-1 h-full border-2 border-black bg-gray-50 relative rounded-t-lg group hover:bg-gray-100 transition-colors">
                {/* Name plate */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-6 border-2 border-black bg-white"></div>
                {/* Vents */}
                <div className="w-2/3 h-1 bg-black mx-auto mt-16 rounded-full"></div>
                <div className="w-2/3 h-1 bg-black mx-auto mt-2 rounded-full"></div>
                <div className="w-2/3 h-1 bg-black mx-auto mt-2 rounded-full"></div>
                {/* Handle */}
                <div className="absolute top-1/2 right-3 w-1 h-12 bg-black rounded-full"></div>
              </div>
            ))}
          </div>

          {/* The Bench */}
          <div className="relative z-10 w-3/4 h-20 bg-[#e0c097] border-4 border-black rounded-lg shadow-sketch flex justify-around items-end">
            {/* Bench Legs */}
            <div className="absolute top-full left-6 w-6 h-12 bg-black"></div>
            <div className="absolute top-full right-6 w-6 h-12 bg-black"></div>

            {/* Social Characters Placeholders */}
            <div className="absolute bottom-6 w-full flex justify-around px-12">
              <div className="icon_social_wrap w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sketch group relative">
                <span className="font-display text-xl">Be</span>
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black text-white px-2 py-1 text-sm rounded">Behance</div>
              </div>

              <div className="icon_social_wrap w-24 h-24 bg-brand-blue text-white border-4 border-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sketch group relative -mt-8">
                <span className="font-display text-xl">Tg</span>
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black text-white px-2 py-1 text-sm rounded">Telegram</div>
              </div>

              <div className="icon_social_wrap w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-sketch group relative">
                <span className="font-display text-xl">Ig</span>
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black text-white px-2 py-1 text-sm rounded">Instagram</div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t-[3px] border-black bg-white p-6 relative overflow-visible">
        {/* Push-up Character Placeholder */}
        <div className="absolute left-4 bottom-full mb-[-2px] w-16 h-16 border-2 border-black bg-brand-yellow rounded-full flex items-center justify-center animate-bounce origin-bottom">
          <span className="text-xs font-bold text-center leading-none">Push<br />Up</span>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 pl-16">
          <div className="flex items-center gap-4">
            <span className="font-bold text-sm">© 2025 IA_PARALLAX.</span>
          </div>

          <div className="flex gap-6 text-sm font-bold uppercase underline decoration-2 underline-offset-4">
            <a href="#" className="hover:text-brand-blue">Terms</a>
            <a href="#" className="hover:text-brand-blue">Privacy</a>
            <a href="#" className="hover:text-brand-blue">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};