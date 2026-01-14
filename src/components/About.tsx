import { Shield, Award, Clock, ThumbsUp } from 'lucide-react';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#2b2220] mb-6">
              Sobre a <span className="text-[#d87934]">MD</span>
              {""}
              <span className="text-[#2b2220]">Locadora</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A <span className="text-[#d87934]">MD</span>Locadora é referência
              em locação de equipamentos para construção civil, oferecendo
              soluções completas com qualidade, segurança e atendimento
              especializado.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Nossa frota diversificada e bem mantida garante o sucesso da sua
              obra. Trabalhamos com equipamentos de última geração, sempre
              revisados e prontos para uso, proporcionando tranquilidade e
              eficiência para nossos clientes.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#d87934] p-2 rounded-lg">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b2220] mb-1">Segurança</h3>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Equipamentos certificados
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#d87934] p-2 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b2220] mb-1">Qualidade</h3>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Equipamentos premium
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#d87934] p-2 rounded-lg">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b2220] mb-1">Agilidade</h3>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Entrega rápida
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#d87934] p-2 rounded-lg">
                  <ThumbsUp className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-[#2b2220] mb-1">Confiança</h3>
                  <p className="text-sm text-gray-600 hidden sm:block">
                    Clientes satisfeitos
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="images/md_about2.jpg"
                alt="Equipamentos MD Locadora"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
              <img
                src="images/md_about1.jpg"
                alt="Construção"
                className="rounded-lg shadow-xl w-full h-64 object-cover mt-8"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#d87934] text-white p-6 rounded-lg shadow-2xl">
              <div className="text-4xl font-bold mb-1">+13</div>
              <div className="text-sm">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
