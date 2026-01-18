import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sources — Hotel AI",
  description: "Sources and citations for statistics used on the Hotel AI website.",
};

export default function Sources() {
  return (
    <>
      <Header />
      <main id="main" className="bg-background py-16 lg:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h1 className="text-4xl font-bold text-text-heading mb-8">Sources</h1>

          <p className="text-text-body mb-8">
            Below are the sources for statistics cited on our website. We strive to use credible, third-party research to support our claims.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">Statistics Bar</h2>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"30% more direct bookings"</p>
            <p className="text-text-body mb-4">
              Based on: "Chatbots can increase booking conversion rates by up to 30%"
            </p>
            <p className="text-text-muted text-sm mb-2">Source: WorldMetrics — Chatbots In Hospitality Industry Statistics</p>
            <ul className="text-sm text-text-muted list-disc pl-6">
              <li>
                <a
                  href="https://worldmetrics.org/chatbots-in-hospitality-industry-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:underline"
                >
                  WorldMetrics (original page)
                </a>
              </li>
              <li>
                <a
                  href="https://web.archive.org/web/20240921035411/https://worldmetrics.org/chatbots-in-hospitality-industry-statistics/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:underline"
                >
                  Web Archive (September 2024)
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"82% more likely to book when chatting"</p>
            <p className="text-text-body mb-4">
              Based on: "Visitors who chat are 82% more likely to convert"
            </p>
            <p className="text-text-muted text-sm mb-2">Source: Intercom</p>
            <a
              href="https://www.intercom.com/blog/why-live-chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              11 Live Chat Statistics: Top Trends and Insights
            </a>
          </div>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"80% of inquiries handled instantly"</p>
            <p className="text-text-body mb-4">
              Based on: "80% of routine customer queries handled by chatbots"
            </p>
            <p className="text-text-muted text-sm mb-2">Source: WorldMetrics — Chatbots In Hospitality Industry Statistics</p>
            <a
              href="https://worldmetrics.org/chatbots-in-hospitality-industry-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              WorldMetrics (original page)
            </a>
          </div>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"90% faster response times"</p>
            <p className="text-text-body mb-4">
              Based on: "90% improvement in response times possible with chatbots in hospitality industry"
            </p>
            <p className="text-text-muted text-sm mb-2">Source: WorldMetrics — Chatbots In Hospitality Industry Statistics</p>
            <a
              href="https://worldmetrics.org/chatbots-in-hospitality-industry-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              WorldMetrics (original page)
            </a>
          </div>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">AI Booking Agent</h2>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"Visitors who chat are 82% more likely to convert"</p>
            <p className="text-text-muted text-sm mb-2">Source: Intercom</p>
            <a
              href="https://www.intercom.com/blog/why-live-chat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              11 Live Chat Statistics: Top Trends and Insights
            </a>
          </div>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">AI Customer Service Agent</h2>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"80% of guests report positive AI agent experiences"</p>
            <p className="text-text-muted text-sm mb-2">Source: EBI.ai</p>
            <a
              href="https://ebi.ai/blog/12-reliable-stats-on-chatbots-in-customer-service/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              33 Chatbot Statistics for 2025: A Guide for Customer Service Leaders
            </a>
          </div>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">AI Data Agent</h2>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"Reduce customer acquisition costs by 50%"</p>
            <p className="text-text-muted text-sm mb-2">Source: McKinsey & Company</p>
            <a
              href="https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              The Value of Getting Personalization Right—or Wrong—Is Multiplying
            </a>
          </div>

          <div className="bg-background-hero p-6 rounded-lg mb-6">
            <p className="text-text-body font-semibold mb-2">"40% more revenue from personalization"</p>
            <p className="text-text-muted text-sm mb-2">Source: McKinsey & Company</p>
            <a
              href="https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-personalization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:underline text-sm"
            >
              What Is Personalization?
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border-subtle">
            <Link href="/" className="text-navy hover:text-medium-blue transition-colors">
              ← Back to Home
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
