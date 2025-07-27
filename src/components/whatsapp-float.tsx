import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const phoneNumber = "5511996183253";
  const message = "Olá! Gostaria de solicitar um orçamento para assistência técnica.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button onClick={handleWhatsAppClick}>
      <MessageCircle className="h-6 w-6 text-white" />
    </Button>
  );
};

