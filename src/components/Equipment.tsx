import { useState, useEffect, useRef } from 'react';
import { Phone, Filter, ChevronDown, X } from 'lucide-react';
import { ClickHandAnimation } from './ClickHandAnimation';

interface EquipmentItem {
  id: number;
  name: string;
  description: string;
  specifications: string;
  category: string;
  image_url: string;
  is_featured: boolean;
}

export function Equipment() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const filterRef = useRef<HTMLDivElement>(null);

  // detalhe do equipamento em telas pequenas
  const [selectedItem, setSelectedItem] = useState<EquipmentItem | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const detailRef = useRef<HTMLDivElement | null>(null);
 
  // fecha detalhe ao clicar fora (quando aberto)
  useEffect(() => {
    const handleClickOutsideDetail = (event: MouseEvent) => {
      if (isDetailOpen && detailRef.current && !detailRef.current.contains(event.target as Node)) {
        setIsDetailOpen(false);
        setSelectedItem(null);
      }
    };

    if (isDetailOpen) document.addEventListener('mousedown', handleClickOutsideDetail);
    return () => document.removeEventListener('mousedown', handleClickOutsideDetail);
  }, [isDetailOpen]);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isFilterOpen &&
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };

    if (isFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterOpen]);

  useEffect(() => {
    const mockEquipment: EquipmentItem[] = [
      {
        id: 1,
        name: "Betoneira 400L",
        description:
          "Betoneira profissional ideal para obras de médio e grande porte",
        specifications: "Capacidade: 400L, Motor: 2HP, Voltagem: 220V",
        category: "Betoneiras",
        image_url: "images/betoneira.png",
        is_featured: false,
      },
      {
        id: 2,
        name: "Compactador",
        description:
          "Aumenta a densidade do solo, eliminando os espaços vazios, tornando mais firme e estável",
        specifications: "Peso: 75kg, Força de impacto: 14kN",
        category: "Compactadores",
        image_url: "images/compactador.png",
        is_featured: false,
      },
      {
        id: 3,
        name: "Andaimes",
        description:
          "Feita de peças modulares que podem ser rapidamente montadas e desmontadas",
        specifications: "Tamanhos: 1x1m ; 1x1.5m",
        category: "Andaimes",
        image_url: "images/andaimes.png",
        is_featured: false,
      },
      {
        id: 4,
        name: "Marteletes",
        description:
          "Usado para quebrar, cinzelar e perfurar materiais resistentes como concreto, alvenaria e pedra.",
        specifications: "Peso: 30kg, 17kg, 10kg, 5kg",
        category: "Marteletes",
        image_url: "images/marteletes.png",
        is_featured: false,
      },
      {
        id: 5,
        name: "Escoras",
        description:
          "Servem para sustentar estruturas como lajes, vigas e pilares enquanto o concreto está endurecendo",
        specifications: "Tamanhos: 1.8 x 3.2m; 2 x 3.6m; 2 x 4m; 3 x 4.5m",
        category: "Escoras",
        image_url: "images/escoras.png",
        is_featured: false,
      },
      {
        id: 6,
        name: "Vibrador Portátil",
        description:
          "Usado para remover bolhas de ar, compactando o concreto fresco, garantindo uma estrutura durável.",
        specifications: "Tamanhos: 25mm x 120cm; 36mm x 120cm ",
        category: "Vibrador Portátil",
        image_url: "images/vibrador_portatil.png",
        is_featured: false,
      },
    ]

    setEquipment(mockEquipment);
  }, []);

  const categories = ['Todos', ...Array.from(new Set(equipment.map((item) => item.category)))];

  const filteredEquipment =
    selectedCategories.length === 0 || selectedCategories.includes('Todos')
      ? equipment
      : equipment.filter((item) => selectedCategories.includes(item.category));

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category: string) => {
    if (category === 'Todos') {
      setSelectedCategories([]);
      return;
    }

    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const removeCategory = (category: string) => {
    setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
  };

  return (
    <section id="equipamentos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2220] mb-4">
            Nossos <span className="text-[#d87934]">Equipamentos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Equipamentos de qualidade para todas as necessidades da sua obra
          </p>
        </div>

        {/* Filtros para desktop (600px+) */}
        {windowWidth >= 600 && (
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 text-[#874234] font-semibold">
              <Filter size={20} />
              <span>Filtrar:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all cursor-pointer ${
                  (category === 'Todos' && selectedCategories.length === 0) ||
                  selectedCategories.includes(category)
                    ? 'bg-[#d87934] text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Tags dos filtros selecionados (Desktop) */}
        {windowWidth >= 600 && selectedCategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {selectedCategories.map((category) => (
              <span
                key={category}
                className="bg-[#d87934] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
              >
                {category}
                <button
                  onClick={() => removeCategory(category)}
                  className="cursor-pointer transition-opacity"
                >
                  <X size={16} />
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Filtros para mobile (<600px) - Dropdown */}
        <div ref={filterRef}>
          {windowWidth < 600 && (
            <div className="mb-6 flex justify-center">
              <div className="relative w-full max-w-xs">
                <button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full bg-[#d87934] text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-between gap-2 cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <Filter size={20} />
                    <span>Filtrar: {selectedCategories.length > 0 ? selectedCategories.length : 'Todos'}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${isFilterOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {isFilterOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                        className={`w-full text-left px-6 py-3 border-b border-gray-100 last:border-0 font-semibold transition-all flex items-center gap-3 cursor-pointer ${
                          (category === 'Todos' && selectedCategories.length === 0) ||
                          selectedCategories.includes(category)
                            ? "bg-[#d87934] text-white"
                            : "text-gray-700"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={
                            (category === 'Todos' && selectedCategories.length === 0) ||
                            selectedCategories.includes(category)
                          }
                          readOnly
                          className="w-4 h-4 accent-[#d87934]"
                        />
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tags dos filtros selecionados (Mobile) */}
          {windowWidth < 600 && selectedCategories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {selectedCategories.map((category) => (
                <span
                  key={category}
                  className="bg-[#d87934] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                >
                  {category}
                  <button
                    onClick={() => removeCategory(category)}
                    className="cursor-pointer transition-opacity"
                  >
                    <X size={16} />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        {/* GRID: 2 colunas em telas < md, 3 colunas em lg+ */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all border border-gray-200 w-full cursor-pointer"
              onClick={() => {
                // apenas em telas < sm (tailwind sm ~640px)
                if (windowWidth < 640) {
                  setSelectedItem(item)
                  setIsDetailOpen(true)
                }
              }}
            >
              <div className="relative overflow-hidden bg-gray-200 h-40 sm:h-48 md:h-56 lg:h-60">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <ClickHandAnimation 
                  breakpoint={640}
                  xPosition="center"
                  yPosition="center"
                  size={40}
                  loopDelay={1500}
                />
                {item.is_featured && (
                  <div className="absolute top-4 right-4 bg-[#d87934] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Destaque
                  </div>
                )}
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-sm text-[#874234] font-semibold mb-1">{item.category}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#2b2220] mb-1">{item.name}</h3>

                {/* descrição e especificações escondidas em telas < sm */}
                <p className="hidden sm:block text-gray-600 mb-2 text-sm">{item.description}</p>
                <div className="hidden sm:block bg-gray-50 p-2 rounded-lg mb-3">
                  <p className="text-sm text-gray-700">{item.specifications}</p>
                </div>
                
                <button
                  onClick={(e) => { e.stopPropagation(); scrollToContact(); }}
                  className="w-full bg-[#d87934] hover:bg-[#874234] text-white px-3 py-2 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone size={16} />
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal / detalhe para telas pequenas */}
        {isDetailOpen && selectedItem && windowWidth < 640 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div ref={detailRef} className="bg-white rounded-lg w-full max-w-sm overflow-hidden relative">
              <button
                onClick={() => { setIsDetailOpen(false); setSelectedItem(null); }}
                aria-label="Fechar"
                className="absolute top-3 right-3 p-2 rounded-full text-gray-700 hover:bg-gray-100"
              >
                ✕
              </button>
              <div className="h-44 overflow-hidden bg-gray-200">
                <img src={selectedItem.image_url} alt={selectedItem.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <div className="text-sm text-[#874234] font-semibold mb-1">{selectedItem.category}</div>
                <h3 className="text-lg font-bold text-[#2b2220] mb-2">{selectedItem.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{selectedItem.description}</p>
                <div className="bg-gray-50 p-2 rounded-lg mb-4">
                  <p className="text-sm text-gray-700">{selectedItem.specifications}</p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => { scrollToContact(); setIsDetailOpen(false); setSelectedItem(null); }}
                    className="flex-1 bg-[#d87934] text-white px-4 py-2 rounded-lg font-semibold"
                  >
                    Solicitar Orçamento
                  </button>
                  <button
                    onClick={() => { setIsDetailOpen(false); setSelectedItem(null); }}
                    className="flex-1 bg-gray-200 text-[#2b2220] px-4 py-2 rounded-lg font-semibold"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
