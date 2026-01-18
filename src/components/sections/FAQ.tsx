"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How much does Hotel AI cost?",
    answer: "Hotel AI costs €150 per month for all three AI agents (Booking, Customer Service, and Data). There's no setup fee, and hotels can cancel anytime after their initial payment.",
  },
  {
    question: "How long does setup take?",
    answer: "Hotel AI goes live in 7 days. We handle all configuration and training, so you don't need technical expertise to get started. Your team can focus on guests while we do the setup.",
  },
  {
    question: "Do I need technical skills to use Hotel AI?",
    answer: "No technical skills required. Hotel AI is designed for hoteliers, not developers. We handle the setup, and the dashboard is as simple as checking your email.",
  },
  {
    question: "What languages does Hotel AI support?",
    answer: "Hotel AI supports all major languages automatically. The AI detects your guest's language and responds accordingly—no configuration needed on your end.",
  },
  {
    question: "How does the AI Booking Agent increase direct bookings?",
    answer: "The AI Booking Agent engages website visitors instantly, answers their questions, and guides them through booking—24/7. By capturing guests before they leave for OTAs, hotels typically see 30% more direct bookings.",
  },
  {
    question: "What happens when the AI can't answer a guest question?",
    answer: "Complex questions are handed off to your team seamlessly. The guest gets a notification that a human will respond shortly, and your team receives the conversation with full context.",
  },
  {
    question: "Can I review what the AI says before it responds?",
    answer: "Yes, you have full oversight. You can review conversation logs, adjust the AI's knowledge base, and set up alerts for specific topics. The AI learns from your feedback to improve over time.",
  },
  {
    question: "What's included in the €150/month price?",
    answer: "Everything: all three AI agents (Booking, Customer Service, Data), unlimited conversations, multi-language support, analytics dashboard, and our support team. No hidden fees or add-ons.",
  },
  {
    question: "How do I cancel if it doesn't work for me?",
    answer: "You can cancel anytime after your initial payment. No long-term contracts, no cancellation fees. We earn your business every month by delivering results.",
  },
  {
    question: "What makes Hotel AI different from other chatbots?",
    answer: "Most chatbots are generic. Hotel AI is built specifically for hotels, with deep understanding of booking flows, hospitality terminology, and guest expectations. Plus, the Data Agent turns conversations into actionable insights—something basic chatbots can't do.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-text-heading text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-background-card rounded-lg border border-border-subtle overflow-hidden"
            >
              <button
                type="button"
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-background-alt/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-semibold text-text-heading pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
