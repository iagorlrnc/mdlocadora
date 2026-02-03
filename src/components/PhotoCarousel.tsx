import { useState, useRef, useEffect } from "react"
import { X } from "lucide-react"

export const PhotoCarousel = () => {
  const photos = Array.from(
    { length: 24 },
    (_, i) => `/assets/${String(i + 1).padStart(2, "0")}.jpeg`,
  )

  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [hasDragged, setHasDragged] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Padrão de alturas variadas intercaladas
  const getImageHeight = (index: number) => {
    const pattern = index % 4
    switch (pattern) {
      case 0:
        return "h-64"
      case 1:
        return "h-80"
      case 2:
        return "h-72"
      case 3:
        return "h-56"
      default:
        return "h-64"
    }
  }

  // Padrão de offset/margin-top variado para desalinhamento vertical
  const getImageMarginTop = (index: number) => {
    const pattern = index % 4
    switch (pattern) {
      case 0:
        return "mt-0"
      case 1:
        return "mt-8"
      case 2:
        return "mt-4"
      case 3:
        return "mt-12"
      default:
        return "mt-0"
    }
  }

  // Mouse down - inicia o arrasto
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setHasDragged(false)
    setStartX(e.pageX - (scrollContainerRef.current?.offsetLeft || 0))
    setScrollLeft(scrollContainerRef.current?.scrollLeft || 0)
  }

  // Mouse move - arrasta o scroll
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return

    e.preventDefault()
    setHasDragged(true)
    setIsAutoplay(false)
    const x = e.pageX - (scrollContainerRef.current?.offsetLeft || 0)
    const walk = (x - startX) * 1
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  // Mouse up - termina o arrasto
  const handleMouseUp = () => {
    setIsDragging(false)
    // Retoma autoplay se não houver imagem aberta
    if (!selectedImage) {
      setIsAutoplay(true)
    }
  }

  // Clique na imagem
  const handleImageClick = (photo: string, e: React.MouseEvent) => {
    // Só abre se não estiver arrastando
    if (!hasDragged) {
      setSelectedImage(photo)
      setIsAutoplay(false)
    }
  }

  // Fechar modal
  const closeModal = () => {
    setSelectedImage(null)
    setIsAutoplay(true)
  }

  // Auto play com ciclo infinito
  useEffect(() => {
    if (!isAutoplay || !scrollContainerRef.current) return

    const interval = setInterval(() => {
      const container = scrollContainerRef.current
      if (container) {
        container.scrollLeft += 2

        // Ciclo infinito - volta ao início quando chega no meio
        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth
        if (container.scrollLeft >= scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
    }, 30)

    return () => clearInterval(interval)
  }, [isAutoplay])

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2220] mb-4">
            Galeria de <span className="text-[#d87934]">Fotos</span>
          </h2>
          <p className="text-xl text-gray-600">
            Conheça nossas instalações e equipamentos
          </p>
          <p className="text-sl text-red-600">Clique na imagem para abrir</p>
        </div>

        {/* Carrossel com scroll automático e arrasto */}
        <div className="relative">
          {/* Container com scroll */}
          <div className="relative overflow-hidden">
            <style>{`
              .carousel-scroll {
                display: flex;
                scroll-behavior: smooth;
                cursor: ${isDragging ? "grabbing" : "grab"};
              }

              .scroll-item {
                flex-shrink: 0;
                width: 300px;
                margin-right: 16px;
              }
            `}</style>

            <div
              ref={scrollContainerRef}
              className="carousel-scroll overflow-x-scroll scrollbar-hide"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ userSelect: isDragging ? "none" : "auto" }}
            >
              {/* Primeira sequência */}
              {photos.map((photo, index) => (
                <div
                  key={`first-${index}`}
                  className={`scroll-item ${getImageMarginTop(index)}`}
                >
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className={`rounded-lg shadow-lg w-full ${getImageHeight(index)} object-cover transition-transform duration-300 hover:scale-105 select-none cursor-pointer`}
                    draggable={false}
                    onClick={(e) => handleImageClick(photo, e)}
                  />
                </div>
              ))}

              {/* Segunda sequência (clone para efeito contínuo) */}
              {photos.map((photo, index) => (
                <div
                  key={`second-${index}`}
                  className={`scroll-item ${getImageMarginTop(index)}`}
                >
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className={`rounded-lg shadow-lg w-full ${getImageHeight(index)} object-cover transition-transform duration-300 hover:scale-105 select-none cursor-pointer`}
                    draggable={false}
                    onClick={(e) => handleImageClick(photo, e)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600 mt-8">
          Arraste para navegar pelas fotos
        </p>
      </div>

      {/* Modal de imagem ampliada */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all duration-200"
            aria-label="Fechar"
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="Foto ampliada"
            className="max-w-full max-h-full object-contain rounded-lg cursor-pointer"
          />
        </div>
      )}

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
