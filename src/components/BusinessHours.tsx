import { Clock } from "lucide-react"

export function BusinessHours() {
  const hours = [
    { day: "Segunda-feira", time: "07h às 18h", isOpen: true },
    { day: "Terça-feira", time: "07h às 18h", isOpen: true },
    { day: "Quarta-feira", time: "07h às 18h", isOpen: true },
    { day: "Quinta-feira", time: "07h às 18h", isOpen: true },
    { day: "Sexta-feira", time: "07h às 18h", isOpen: true },
    { day: "Sábado", time: "07h às 11h", isOpen: true },
    { day: "Domingo", time: "Fechado", isOpen: false },
  ]

  return (
    <section id="horario" className="py-16 bg-gray-50 text-[#2b2220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-8 pt-8">
          <div className="flex items-center gap-4">
            <div className="bg-[#d87934] p-4 rounded-full">
              <Clock size={40} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Horário de Funcionamento
              </h2>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 w-full shadow-sm">
            <div className="space-y-3">
              {hours.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-8 pb-2 border-b border-gray-100 last:border-0"
                >
                  <span className="font-semibold min-w-[120px]">
                    {item.day}
                  </span>
                  <span
                    className={`font-bold ${
                      item.isOpen ? "text-[#d87934]" : "text-gray-400"
                    }`}
                  >
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
