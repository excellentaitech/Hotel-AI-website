"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CalendlyButton({ children, className }: CalendlyButtonProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/hotelai/consultation",
      });
    } else {
      // Fallback: open in new tab
      window.open("https://calendly.com/hotelai/consultation", "_blank");
    }
  };

  return (
    <button
      type="button"
      onClick={openCalendly}
      className={className}
    >
      {children}
    </button>
  );
}
