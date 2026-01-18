"use client";

import { useState, useEffect } from "react";
import CalendlyButton from "@/components/CalendlyButton";

export default function MobileStickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("main");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when hero is NOT intersecting (scrolled past it)
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroSection);

    return () => observer.disconnect();
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-40 sm:hidden">
      <CalendlyButton className="inline-flex items-center justify-center px-5 py-3 bg-gold hover:bg-gold-hover text-text-heading font-semibold rounded-lg shadow-lg transition-colors min-h-[48px]">
        Book Your Consultation
      </CalendlyButton>
    </div>
  );
}
