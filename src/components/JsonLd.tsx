export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hotel AI",
    url: "https://hotelai.tech",
    logo: "https://hotelai.tech/logo.png",
    description:
      "AI-powered booking, customer service, and data analytics for independent and boutique hotels.",
    sameAs: ["https://linkedin.com/company/hotelai"],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Hotel AI",
    description:
      "Three AI agents for independent hotels: AI Booking Agent increases direct bookings by 30%, AI Customer Service Agent handles 80% of guest inquiries, AI Data Agent turns conversations into actionable insights.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web Browser",
    offers: {
      "@type": "Offer",
      price: "150.00",
      priceCurrency: "EUR",
      priceValidUntil: "2026-12-31",
    },
    provider: {
      "@type": "Organization",
      name: "Hotel AI",
      url: "https://hotelai.tech",
    },
    featureList:
      "AI Booking Agent, AI Customer Service Agent, AI Data Agent, Multi-language Support, 7-Day Setup, Zero OTA Commissions",
  };

  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does Hotel AI cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hotel AI costs €150 per month for all three AI agents (Booking, Customer Service, and Data). There's no setup fee, and hotels can cancel anytime after their initial payment.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up Hotel AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hotel AI goes live in 7 days. The team handles all configuration and training, so hotels don't need technical expertise to get started.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need technical skills to use Hotel AI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No technical skills required. Hotel AI is designed for hoteliers, not developers. We handle the setup, and the dashboard is as simple as checking your email.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does Hotel AI support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hotel AI supports all major languages automatically. The AI detects your guest's language and responds accordingly—no configuration needed on your end.",
        },
      },
      {
        "@type": "Question",
        name: "How does the AI Booking Agent increase direct bookings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The AI Booking Agent engages website visitors instantly, answers their questions, and guides them through booking—24/7. By capturing guests before they leave for OTAs, hotels typically see 30% more direct bookings.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when the AI can't answer a guest question?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Complex questions are handed off to your team seamlessly. The guest gets a notification that a human will respond shortly, and your team receives the conversation with full context.",
        },
      },
      {
        "@type": "Question",
        name: "Can I review what the AI says before it responds?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you have full oversight. You can review conversation logs, adjust the AI's knowledge base, and set up alerts for specific topics. The AI learns from your feedback to improve over time.",
        },
      },
      {
        "@type": "Question",
        name: "What's included in the €150/month price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Everything: all three AI agents (Booking, Customer Service, Data), unlimited conversations, multi-language support, analytics dashboard, and our support team. No hidden fees or add-ons.",
        },
      },
      {
        "@type": "Question",
        name: "How do I cancel if it doesn't work for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can cancel anytime after your initial payment. No long-term contracts, no cancellation fees. We earn your business every month by delivering results.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Hotel AI different from other chatbots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most chatbots are generic. Hotel AI is built specifically for hotels, with deep understanding of booking flows, hospitality terminology, and guest expectations. Plus, the Data Agent turns conversations into actionable insights—something basic chatbots can't do.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPageSchema),
        }}
      />
    </>
  );
}
