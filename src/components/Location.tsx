import { MapPin, Navigation } from 'lucide-react';

export function Location() {
  return (
    <section id="localizacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2220] mb-4">
            Onde <span className="text-[#d87934]">estamos</span> localizados
          </h2>
          <p className="text-xl text-gray-600">
            Visite nossa loja
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#d87934] p-3 rounded-full">
                <MapPin className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#2b2220] mb-2">
                  Nosso Endereço
                </h3>
                <p className="text-gray-700 text-sm xs:text-base sm:text-lg">
                  Q. 1203 Sul Avenida LO 27, 10
                  <br />
                  Plano Diretor Sul, Palmas - TO
                  <br />
                  CEP: 77019-421
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/ZcSwziRMMMRxp6Zg6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#d87934] hover:bg-[#874234] text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
            >
              <Navigation size={20} />
              Como Chegar
            </a>
            {/* PONTO DE REFERÊNCIA */}
            {/* <div className="mt-8 pt-8 border-t border-gray-300">
              <h4 className="font-bold text-[#2b2220] mb-3 text-lg">
                Referências:
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#d87934] rounded-full"></div>
                  <span>Próximo ao Terminal Rodoviário</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#d87934] rounded-full"></div>
                  <span>Ao lado da Loja de Materiais de Construção</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#d87934] rounded-full"></div>
                  <span>Fácil acesso pela Rodovia SP-123</span>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.073112962265!2d-48.340932699999996!3d-10.2556872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x933b35b8699f23d3%3A0x31014c6e4933d454!2sMD%20Locadora%20de%20Equipamentos%20para%20Constru%C3%A7%C3%A3o%20-%20Andaimes%2C%20Betoneiras%2C%20Escoras%2C%20Compactadores!5e0!3m2!1spt-BR!2sbr!4v1764614547727!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização MD Locadora"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
