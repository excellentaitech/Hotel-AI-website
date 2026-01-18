export default function DemoHotel() {
  return (
    <section className="bg-background-alt py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
          Don't take our word for it. Try it yourself.
        </h2>
        <p className="text-lg text-text-body mb-8 max-w-2xl mx-auto">
          Visit our demo hotel and experience our AI Booking Agent and Customer Service Agent live. See exactly how the AI handles real guest interactions.
        </p>
        <a
          href="https://hotelmirador.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-lg font-semibold text-navy hover:text-medium-blue transition-colors"
        >
          Visit Hotel Mirador Azul
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
        <p className="mt-4 text-sm text-text-muted">
          Hotel Mirador Azul is a fictional hotel built to demonstrate our AI agents
        </p>
      </div>
    </section>
  );
}
