import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — Hotel AI",
  description: "Terms and conditions for using Hotel AI services.",
};

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main id="main" className="bg-background py-16 lg:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h1 className="text-4xl font-bold text-text-heading mb-8">Terms of Service</h1>

          <p className="text-text-muted mb-8">Last updated: January 2025</p>

          <p className="text-text-body mb-6">
            These Terms of Service ("Terms") govern your use of Hotel AI's services and website (hotelai.tech). By using our services, you agree to these Terms.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">1. Service Description</h2>
          <p className="text-text-body mb-6">
            Hotel AI provides AI-powered booking, customer service, and data analytics solutions for independent hotels. Our service includes three AI agents: AI Booking Agent, AI Customer Service Agent, and AI Data Agent.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">2. Pricing and Payment</h2>
          <ul className="text-text-body mb-6 list-disc pl-6">
            <li>Hotel AI costs €150 per month for all three AI agents</li>
            <li>There is no setup fee</li>
            <li>Payment is due at the start of each billing period</li>
            <li>You may cancel anytime after your initial payment</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">3. Your Responsibilities</h2>
          <ul className="text-text-body mb-6 list-disc pl-6">
            <li>Provide accurate information about your hotel</li>
            <li>Review and approve AI responses as needed</li>
            <li>Maintain secure access to your account</li>
            <li>Comply with applicable laws and regulations</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">4. Intellectual Property</h2>
          <p className="text-text-body mb-6">
            Hotel AI owns all rights to the platform, software, and AI technology. You retain ownership of your hotel's data and content. We may use anonymized, aggregated data to improve our services.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">5. Data Protection</h2>
          <p className="text-text-body mb-6">
            We handle your data in accordance with our <Link href="/privacy" className="text-navy hover:text-medium-blue">Privacy Policy</Link>. We are committed to GDPR compliance and protecting your guests' personal information.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">6. Service Availability</h2>
          <p className="text-text-body mb-6">
            We strive to maintain high availability but do not guarantee uninterrupted service. We will notify you of planned maintenance and work to resolve any issues promptly.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">7. Limitation of Liability</h2>
          <p className="text-text-body mb-6">
            Hotel AI is provided "as is." We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid in the preceding 12 months.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">8. Termination</h2>
          <p className="text-text-body mb-6">
            You may cancel your subscription at any time after your initial payment. We may terminate your account for violation of these Terms with reasonable notice.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">9. Changes to Terms</h2>
          <p className="text-text-body mb-6">
            We may update these Terms from time to time. We will notify you of significant changes via email or through our service.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">10. Governing Law</h2>
          <p className="text-text-body mb-6">
            These Terms are governed by the laws of the European Union. Any disputes will be resolved in the courts of Portugal.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">11. Contact</h2>
          <p className="text-text-body mb-6">
            For questions about these Terms:<br />
            Email: legal@hotelai.tech
          </p>

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
