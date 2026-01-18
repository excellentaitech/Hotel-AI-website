export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Book a 15-min call",
      description: "We'll show you the AI in action with your hotel's data",
    },
    {
      number: "2",
      title: "We set up everything in 7 days",
      description: "No technical work on your end",
    },
    {
      number: "3",
      title: "Go live with your AI team",
      description: "Start capturing more direct bookings immediately",
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-heading text-center mb-12">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-navy text-white flex items-center justify-center">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-3">
                {step.title}
              </h3>
              <p className="text-text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
