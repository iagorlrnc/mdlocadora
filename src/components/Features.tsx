import { Package, Truck, Wrench, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Package,
      title: 'Variedade de Equipamentos',
      description: 'Amplo catálogo com equipamentos para todos os tipos de obra',
    },
    {
      icon: Truck,
      title: 'Entrega Rápida',
      description: 'Logística eficiente com entrega ágil em toda a região',
    },
    {
      icon: Wrench,
      title: 'Manutenção Garantida',
      description: 'Equipamentos revisados e em perfeito estado de funcionamento',
    },
    {
      icon: Users,
      title: 'Atendimento Especializado',
      description: 'Equipe técnica qualificada para orientar na escolha ideal',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border-t-4 border-[#d87934] flex flex-col items-center"
              >
                <div className="bg-[#d87934] w-14 h-14 rounded-full flex items-center justify-center mb-4 flex-shrink-0">
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2b2220] mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 hidden sm:block text-center">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
