interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  company?: string;
}

export default function Testimonial({ quote, name, role, company }: TestimonialProps) {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg
          className="w-12 h-12 mx-auto mb-6 text-gold"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-xl lg:text-2xl text-text-heading font-medium leading-relaxed mb-8">
          "{quote}"
        </blockquote>
        <div>
          <p className="font-semibold text-text-heading">{name}</p>
          <p className="text-text-muted">
            {role}
            {company && <span>, {company}</span>}
          </p>
        </div>
      </div>
    </section>
  );
}
