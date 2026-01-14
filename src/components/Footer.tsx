import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#2b2220] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center">
              <div className="flex items-center text-2xl font-bold gap-2">
                <img
                  src="images/icon_MD_quality.png"
                  alt="MD"
                  className="h-8 w-8 inline-block align-middle"
                />
                <span className="align-middle">
                  <span className="text-[#d87934]">MD</span>Locadora
                </span>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Locação de equipamentos para construção civil com qualidade e
              segurança.
            </p><br/>
			<p>CNPJ: 0000.0000.0000/00</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d87934]">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="hover:text-[#d87934] transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="hover:text-[#d87934] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("equipamentos")}
                  className="hover:text-[#d87934] transition-colors"
                >
                  Equipamentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="hover:text-[#d87934] transition-colors"
                >
                  Localização
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("horario")}
                  className="hover:text-[#d87934] transition-colors"
                >
                  Horário de Funcionamento
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contato")}
                  className="hover:text-[#d87934] transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d87934]">
              Contato
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#d87934]" />
                <span>(63) 3217-1080</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#d87934]" />
                <span>mdlocadora2017@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#d87934] mt-1" />
                <span>
                  Q. 1203 Sul Avenida LO 27, 10
                  <br />
                  Plano Diretor Sul, Palmas - TO
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#d87934]">
              Redes Sociais
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mdlocadora_palmas/"
                target="_blank"
                className="bg-[#874234] p-2 rounded-full hover:bg-[#d87934] transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2026 MD Locadora. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
