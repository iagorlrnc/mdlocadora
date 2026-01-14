import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappNumber = '556332171080';
  const message = 'Olá! Gostaria de solicitar um orçamento.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} className="text-white" />
    </a>
  );
}
