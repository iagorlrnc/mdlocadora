import { ArrowRight, Phone } from 'lucide-react';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-br from-[#2b2220] via-[#874234] to-[#2b2220] text-white py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Locação de Equipamentos para Construção com{" "}
              <span className="text-[#d87934]">Agilidade e Segurança</span>
            </h1>

            <p className="text-xl text-gray-200">
              Estamos a mais de 13 anos no mercado, somos a melhor opção em
              preço, qualidade e eficiência, venha ser nosso amigo e cliente!
            </p>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img
                src="images/md_hero.jpg"
                alt="Equipamentos de construção"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            onClick={() => scrollToSection("equipamentos")}
            className="bg-[#d87934] hover:bg-[#874234] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            Ver Equipamentos
            <ArrowRight size={20} />
          </button>

          <button
            onClick={() => scrollToSection("contato")}
            className="bg-white text-[#2b2220] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
          >
            <Phone size={20} />
            Entrar em Contato
          </button>
        </div>
      </div>
    </section>
  )
}
