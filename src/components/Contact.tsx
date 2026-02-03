import { useState, useEffect, useRef } from "react"
import { Phone, Mail, MessageCircle, Send, ChevronDown } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    equipment_types: [] as string[],
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isDropdownOpen])

  const equipmentOptions = [
    "Betoneiras",
    "Compactadores",
    "Andaimes",
    "Marteletes",
    "Escoras",
    "Vibradores portátil",
    "Outros",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string

      const templateParams = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        equipment_types: formData.equipment_types.join(", "),
        message: formData.message,
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      )

      if (result.status === 200) {
        setSubmitStatus("success")

        // Gerar mensagem para WhatsApp
        const whatsappText = `Olá! Gostaria de solicitar um orçamento.\n\n*Detalhes:*\n• Nome: ${
          formData.name
        }\n• Telefone: ${formData.phone}${
          formData.email ? `\n• Email: ${formData.email}` : ""
        }\n${
          formData.equipment_types.length > 0
            ? `• Equipamentos: ${formData.equipment_types.join(", ")}\n`
            : ""
        }${formData.message ? `\nObservação: ${formData.message}` : ""}`

        const encodedMessage = encodeURIComponent(whatsappText)
        const isMobileDevice =
          /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent) ||
          window.matchMedia("(pointer: coarse)").matches
        const whatsappUrl = isMobileDevice
          ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`
          : `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

        if (isMobileDevice) {
          window.location.href = whatsappUrl
        } else {
          window.open(whatsappUrl, "_blank")
        }

        setFormData({
          name: "",
          phone: "",
          email: "",
          equipment_types: [],
          message: "",
        })

        setTimeout(() => {
          setSubmitStatus("idle")
        }, 3000)
      } else {
        setSubmitStatus("error")
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 3000)
      }
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleEquipmentChange = (equipment: string) => {
    setFormData((prev) => {
      const equipment_types = prev.equipment_types.includes(equipment)
        ? prev.equipment_types.filter((item) => item !== equipment)
        : [...prev.equipment_types, equipment]
      return {
        ...prev,
        equipment_types,
      }
    })
  }

  const whatsappNumber = "556332171080"
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar um orçamento.",
  )

  return (
    <section
      id="contato"
      className="py-20 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#2b2220] mb-4">
            Entre em <span className="text-[#d87934]">Contato</span>
          </h2>
          <p className="text-xl text-gray-600">
            Estamos prontos para atender você
          </p>
          <p className="text-red-500 text-sm">Preencha o formulário abaixo</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div id="orcamento" className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#2b2220] mb-6">
              Solicite um Orçamento
            </h3>
            <div className="space-y-6 mb-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Nome Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d87934] focus:border-transparent outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Telefone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d87934] focus:border-transparent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    E-mail{" "}
                    <span className="text-xs text-gray-500">(opcional)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d87934] focus:border-transparent outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Equipamento <span className="text-red-500">*</span>
                  </label>
                  <div className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d87934] focus:border-transparent outline-none transition-all text-left flex justify-between items-center bg-white"
                    >
                      <span className="text-gray-700">
                        {formData.equipment_types.length > 0
                          ? `${formData.equipment_types.length} selecionado(s)`
                          : "Selecione os equipamentos"}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {equipmentOptions.map((equipment) => (
                          <label
                            key={equipment}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-0"
                          >
                            <input
                              type="checkbox"
                              checked={formData.equipment_types.includes(
                                equipment,
                              )}
                              onChange={() => handleEquipmentChange(equipment)}
                              className="w-4 h-4 accent-[#d87934] cursor-pointer"
                            />
                            <span className="text-gray-700">{equipment}</span>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>

                  {formData.equipment_types.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {formData.equipment_types.map((equipment) => (
                        <span
                          key={equipment}
                          className="bg-[#d87934] text-white px-3 py-1 rounded-full text-sm flex items-center justify-center gap-2"
                        >
                          {equipment}
                          <button
                            type="button"
                            onClick={() => handleEquipmentChange(equipment)}
                            className="flex items-center justify-center w-5 h-5 rounded-full hover:bg-[#874234] transition-colors"
                          >
                            ✕
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Mensagem{" "}
                    <span className="text-xs text-gray-500">(opcional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d87934] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Descreva suas necessidades..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d87934] hover:bg-[#874234] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Solicitação
                    </>
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Mensagem enviada com sucesso! Entraremos em contato em
                    breve.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    Erro ao enviar mensagem. Tente novamente ou entre em contato
                    via WhatsApp.
                  </div>
                )}
              </form>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2b2220] mb-6">
              Fale Conosco
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#d87934] p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2b2220] mb-1">Telefone</h4>
                  <a
                    href="tel:+556332171080"
                    className="text-gray-700 hover:text-[#d87934] transition-colors"
                  >
                    (63) 3217-1080
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#d87934] p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2b2220] mb-1">E-mail</h4>
                  <a
                    href="mailto:mdlocadora2017@gmail.com"
                    className="text-gray-700 hover:text-[#d87934] transition-colors"
                  >
                    mdlocadora2017@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-[#25D366] p-3 rounded-full">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-[#2b2220] mb-1">WhatsApp</h4>
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#25D366] transition-colors"
                  >
                    (63) 3217-1080
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg w-full justify-center"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
