import { Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // calcula posição do topo da section considerando a altura do header sticky
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({ top, behavior: "smooth" });
      // garante que o menu feche em mobile
      setIsMenuOpen(false);
      // opcional: ajusta foco para acessibilidade
      element.setAttribute("tabindex", "-1");
      (element as HTMLElement).focus({ preventScroll: true });
    }
  };

  return (
    <header
      ref={headerRef}
      className="bg-[#2b2220] text-white sticky top-0 z-50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center text-2xl font-bold gap-2">
              <img
                src="images/icon_MD_quality.png"
                alt="MD"
                className="h-12 w-12 inline-block align-middle"
              />
              <span className="align-middle lg:hidden xl:inline-block">
                <span className="text-[#d87934]">MD</span>Locadora
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-6 items-center flex-nowrap">
            <button
              onClick={() => scrollToSection("inicio")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("equipamentos")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Equipamentos
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection("horario")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Horário
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("review")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Avaliações
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contato")}
            className="hidden lg:block bg-[#d87934] hover:bg-[#874234] text-white px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap"
          >
            Solicitar Orçamento
          </button>

          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => scrollToSection("orcamento")}
              className="hidden sm:block bg-[#d87934] hover:bg-[#874234] text-white px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 whitespace-nowrap text-sm"
            >
              Solicitar Orçamento
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-3">
            <button
              onClick={() => scrollToSection("inicio")}
              className="block w-full text-left py-2 hover:text-[#d87934] transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="block w-full text-left py-2 hover:text-[#d87934] transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("equipamentos")}
              className="block w-full text-left py-2 hover:text-[#d87934] transition-colors"
            >
              Equipamentos
            </button>
            <button
              onClick={() => scrollToSection("localizacao")}
              className="block w-full text-left py-2 hover:text-[#d87934] transition-colors"
            >
              Localização
            </button>
            <button
              onClick={() => scrollToSection("horario")}
              className="block w-full text-left py-2 hover:text-[#d87934] transition-colors"
            >
              Horário
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 hover:text-[#d87934] transition-colors"
            >
              Contato
            </button>
            <button
              onClick={() => scrollToSection("review")}
              className="hover:text-[#d87934] transition-colors whitespace-nowrap"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="sm:hidden block w-full bg-[#d87934] hover:bg-[#874234] text-white px-6 py-2 rounded-lg font-semibold transition-all mt-3"
            >
              Solicitar Orçamento
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
