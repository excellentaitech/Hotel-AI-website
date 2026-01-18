"use client";

import CalendlyButton from "@/components/CalendlyButton";

export default function FinalCTA() {
  return (
    <section
      id="book"
      className="py-16 lg:py-24"
      style={{
        background: "linear-gradient(135deg, #002D60 0%, #003D7A 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          What Would You Do With 20 Extra Hours This Week?
        </h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
          See our AI agents in action — no setup, no commitment.
        </p>

        <CalendlyButton className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-hover text-text-heading font-semibold rounded-lg transition-colors text-lg">
          Book Your Consultation
        </CalendlyButton>

        <p className="mt-4 text-sm text-white/70 max-w-lg mx-auto">
          What happens on the call? We'll show you the AI in action with a demo using your hotel's data. 15 minutes, no sales pressure.
        </p>

        {/* Fallback link */}
        <p className="mt-2 text-xs text-white/50">
          Calendar not loading?{" "}
          <a
            href="https://calendly.com/hotelai/consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white/70"
          >
            Book here instead
          </a>
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          <span>Trusted by independent hotels</span>
          <span className="hidden sm:inline">•</span>
          <span>Live in 7 days</span>
          <span className="hidden sm:inline">•</span>
          <span>Cancel anytime</span>
          <span className="hidden sm:inline">•</span>
          <span>Multi-language support</span>
        </div>
      </div>
    </section>
  );
}
