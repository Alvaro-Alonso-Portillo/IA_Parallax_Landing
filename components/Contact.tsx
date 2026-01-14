import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">

        <div className="flex flex-col lg:flex-row gap-16 items-end relative z-10">

          {/* Left: Form */}
          <div className="w-full lg:w-1/2 relative">
            {/* Decorator */}
            <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67cad69f3992b0e11978a58c_Group%201413376293.svg" className="absolute -top-10 -left-10 w-24 animate-bounce" alt="" />

            <div className="bg-white p-8 md:p-12 rounded-[255px_25px_225px_25px/25px_225px_25px_255px] border-4 border-black shadow-sketch-xl relative">
              <div className="mb-8">
                <h2 className="text-5xl font-display uppercase leading-none mb-2">HABLEMOS DE TU NEGOCIO</h2>
                <p className="font-sans font-bold text-gray-500 text-xl">
                  Cuéntanos cómo trabajas y qué te quita más tiempo.
                  <br />
                  Te diremos qué se puede automatizar y por dónde empezar.
                </p>
              </div>

              <form className="flex flex-col gap-6">
                <div className="group">
                  <label className="font-bold text-base uppercase mb-2 block group-focus-within:text-brand-blue transition-colors">Elige tu poder</label>
                  <div className="relative">
                    <select className="w-full p-4 bg-gray-50 border-2 border-black rounded-sketch focus:outline-none focus:shadow-sketch transition-all appearance-none cursor-pointer">
                      <option>Basic Plan</option>
                      <option>Standard Plan</option>
                      <option>Premium Agency</option>
                    </select>
                    <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">▼</div>
                  </div>
                </div>

                <div className="group">
                  <label className="font-bold text-base uppercase mb-2 block group-focus-within:text-brand-orange transition-colors">Tu Nombre</label>
                  <input type="text" placeholder="Enter your name" className="w-full p-4 bg-gray-50 border-2 border-black rounded-sketch focus:outline-none focus:shadow-sketch transition-all placeholder:text-gray-400" />
                </div>

                <div className="group">
                  <label className="font-bold text-base uppercase mb-2 block group-focus-within:text-brand-yellow transition-colors">Your Email</label>
                  <input type="email" placeholder="@email" className="w-full p-4 bg-gray-50 border-2 border-black rounded-sketch focus:outline-none focus:shadow-sketch transition-all placeholder:text-gray-400" />
                </div>

                <div className="group">
                  <label className="font-bold text-base uppercase mb-2 block group-focus-within:text-brand-blue transition-colors">Tu WhatsApp</label>
                  <input type="text" placeholder="@Telegram" className="w-full p-4 bg-gray-50 border-2 border-black rounded-sketch focus:outline-none focus:shadow-sketch transition-all placeholder:text-gray-400" />
                </div>

                <div className="group">
                  <label className="font-bold text-base uppercase mb-2 block group-focus-within:text-brand-orange transition-colors">¿Algún comentario que debamos conocer?</label>
                  <textarea placeholder="Enter" rows={3} className="w-full p-4 bg-gray-50 border-2 border-black rounded-sketch focus:outline-none focus:shadow-sketch transition-all placeholder:text-gray-400 resize-none"></textarea>
                </div>

                <button className="bg-brand-yellow text-black p-5 rounded-sketch font-bold text-xl uppercase tracking-wide hover:bg-yellow-500 hover:shadow-sketch transition-all mt-4 border-2 border-black transform active:scale-95">
                  ENVIAR Y EMPEZAR
                </button>
              </form>
            </div>
          </div>

          {/* Right: Gym Guys Illustration (Placeholder/Structure) */}
          <div className="w-full lg:w-1/2 relative flex flex-col items-center">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Speech Bubble "You can find us here" */}
              <div className="absolute top-0 right-0 md:-right-10 bg-white border-2 border-black p-4 rounded-sketch shadow-sketch z-20 transform rotate-6 animate-float-delayed max-w-[200px] text-center">
                <p className="font-comic text-xl leading-none">¡Nos puedes encontrar aquí!</p>
                <div className="absolute bottom-0 -left-2 w-4 h-4 bg-white border-b-2 border-l-2 border-black transform rotate-45"></div>
              </div>

              {/* Gym Guys Placeholder - Using the mascot image for now but framed as a group */}
              <div className="w-full h-full flex items-end justify-center">
                <img src="https://cdn.prod.website-files.com/67cac54830ea1e856c034bd3/67d409f1a1b8c8d480153f0c_Group%201413376299.png" className="w-full object-contain drop-shadow-sketch-xl" alt="Gym Guys" />
              </div>
            </div>

            {/* Socials / Footer Links integration could be here or in Footer.tsx */}
          </div>

        </div>
      </div>
    </section>
  );
};