import CalendlyButton from "@/components/CalendlyButton";

export default function Pricing() {
  const benefits = [
    "€0 setup fee — competitors charge €500-1,500",
    "Cancel anytime after your initial payment",
    "No long-term contracts — we earn your business every month",
    "Live in 7 days — we handle configuration and training",
  ];

  return (
    <section id="pricing" className="bg-background-alt py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ROI Framing */}
        <div className="text-center mb-12">
          <p className="text-lg text-text-body mb-2">
            A 50-room hotel saves{" "}
            <span className="font-bold text-navy">€4,200 per month</span>{" "}
            by getting 30% more direct bookings.
          </p>
          <p className="text-text-muted">Hotel AI costs €150.</p>
        </div>

        {/* Price Card */}
        <div className="bg-background-card rounded-2xl shadow-lg p-8 lg:p-12 text-center border border-border-subtle max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-text-heading mb-6">
            All three AI agents. One simple price.
          </h2>

          <div className="mb-8">
            <span className="text-5xl lg:text-6xl font-bold text-navy">€150</span>
            <span className="text-text-muted text-xl">/month</span>
          </div>

          <ul className="text-left space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-success flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-text-body">{benefit}</span>
              </li>
            ))}
          </ul>

          <CalendlyButton className="inline-flex items-center justify-center w-full px-8 py-4 bg-gold hover:bg-gold-hover text-text-heading font-semibold rounded-lg transition-colors text-lg">
            Book Your Consultation
          </CalendlyButton>
        </div>
      </div>
    </section>
  );
}
