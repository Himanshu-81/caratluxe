"use client";
import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  // WhatsApp concierge direct link
  const phoneNumber = "919820044888";
  const defaultMessage = encodeURIComponent(
    "Hello CaratLuxe Concierge, I would like to know more about your certified lab-grown diamond jewellery."
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="WhatsApp Concierge"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 animate-whatsapp-float"
    >

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with CaratLuxe Specialist on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg animate-whatsapp-pulse hover:scale-110 active:scale-95 transition-transform duration-300 cursor-pointer"
      >
        {/* Soft radar pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <IoLogoWhatsapp className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:rotate-12" />
      </a>
    </aside>
  );
}

