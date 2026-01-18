"use client";

import { useState } from "react";
import Link from "next/link";
import CalendlyButton from "@/components/CalendlyButton";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#booking-agent", label: "Booking Agent" },
    { href: "#customer-service-agent", label: "Support Agent" },
    { href: "#data-agent", label: "Data Agent" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background-hero/95 backdrop-blur-sm border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/hotelai-header-1x.png"
              srcSet="/hotelai-header-1x.png 1x, /hotelai-header-2x.png 2x"
              alt="Hotel AI"
              width={116}
              height={36}
            />
          </Link>

          {/* Desktop Navigation - show at lg (1024px+) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-text-body hover:text-navy transition-colors font-semibold text-sm xl:text-base whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side - show at lg (1024px+) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <a
              href="/pt/"
              lang="pt"
              className="text-text-muted hover:text-navy transition-colors font-semibold whitespace-nowrap"
            >
              Português
            </a>

            {/* CTA Button */}
            <CalendlyButton className="inline-flex items-center justify-center px-5 py-2.5 bg-gold hover:bg-gold-hover text-text-heading font-semibold rounded-lg transition-colors whitespace-nowrap">
              Book Your Consultation
            </CalendlyButton>
          </div>

          {/* Mobile/Tablet Menu Button - show below lg (1024px) */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Language Switcher Mobile */}
            <a
              href="/pt/"
              lang="pt"
              className="text-text-muted hover:text-navy transition-colors font-semibold text-sm"
            >
              Português
            </a>

            <button
              type="button"
              className="p-2 text-text-body hover:text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu - show below lg (1024px) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border-subtle bg-background-hero">
          <nav className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-3 text-text-body hover:text-navy transition-colors font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
