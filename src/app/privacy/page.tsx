import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — Hotel AI",
  description: "Learn how Hotel AI collects, uses, and protects your personal data.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main id="main" className="bg-background py-16 lg:py-24">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg">
          <h1 className="text-4xl font-bold text-text-heading mb-8">Privacy Policy</h1>

          <p className="text-text-muted mb-8">Last updated: January 2025</p>

          <p className="text-text-body mb-6">
            Hotel AI ("we," "us," or "our") operates the website hotelai.tech. This Privacy Policy explains how we collect, use, and protect your personal data when you visit our website or use our services.
          </p>

          <p className="text-text-body mb-8">
            We are committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR) and other applicable data protection laws.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">1. Data Controller</h2>
          <p className="text-text-body mb-6">
            Hotel AI<br />
            Email: privacy@hotelai.tech
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">2. What Data We Collect</h2>
          <p className="text-text-body mb-4">We collect the following personal data:</p>

          <p className="text-text-body font-semibold mb-2">Information you provide directly:</p>
          <ul className="text-text-body mb-4 list-disc pl-6">
            <li>Name, email address, and phone number (when you book a consultation)</li>
            <li>Hotel name and role (when you book a consultation)</li>
            <li>Messages you send through our chatbot</li>
          </ul>

          <p className="text-text-body font-semibold mb-2">Information collected automatically (with your consent):</p>
          <ul className="text-text-body mb-6 list-disc pl-6">
            <li>Pages visited and time spent on our website</li>
            <li>Device type, browser, and operating system</li>
            <li>Approximate location (country/city level)</li>
            <li>How you found our website (referral source)</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">3. How We Use Your Data</h2>
          <p className="text-text-body mb-4">We use your data for the following purposes:</p>
          <ul className="text-text-body mb-4 list-disc pl-6">
            <li>To schedule and conduct consultation calls (legal basis: contract performance)</li>
            <li>To respond to your inquiries via chatbot (legal basis: legitimate interest)</li>
            <li>To analyze website usage and improve our services (legal basis: consent)</li>
            <li>To send you information about our services if you request it (legal basis: consent)</li>
          </ul>

          <p className="text-text-body font-semibold mb-2">We do NOT:</p>
          <ul className="text-text-body mb-6 list-disc pl-6">
            <li>Sell your personal data to third parties</li>
            <li>Use your data for automated decision-making</li>
            <li>Send marketing emails without your explicit consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">4. Cookies and Tracking</h2>
          <p className="text-text-body mb-4">
            Our website uses cookies. You can manage your preferences at any time by clicking "Cookie Settings" in the footer.
          </p>

          <p className="text-text-body font-semibold mb-2">Strictly Necessary:</p>
          <ul className="text-text-body mb-4 list-disc pl-6">
            <li>Session cookies for website functionality</li>
            <li>Chatbot cookies (only after you open the chat)</li>
          </ul>
          <p className="text-text-body mb-4">These do not require consent.</p>

          <p className="text-text-body font-semibold mb-2">Analytics (requires consent):</p>
          <ul className="text-text-body mb-6 list-disc pl-6">
            <li>Google Analytics 4: To understand how visitors use our website</li>
            <li>Microsoft Clarity: To see how users interact with our pages</li>
          </ul>

          <p className="text-text-body mb-6">You can withdraw consent at any time through our cookie settings.</p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">5. Your Rights</h2>
          <p className="text-text-body mb-4">Under GDPR, you have the right to:</p>
          <ul className="text-text-body mb-6 list-disc pl-6">
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate data</li>
            <li><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</li>
            <li><strong>Restriction:</strong> Limit how we process your data</li>
            <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
            <li><strong>Object:</strong> Object to processing based on legitimate interest</li>
            <li><strong>Withdraw consent:</strong> At any time, without affecting prior processing</li>
          </ul>

          <p className="text-text-body mb-6">
            To exercise any of these rights, contact us at privacy@hotelai.tech. We will respond within 30 days.
          </p>

          <h2 className="text-2xl font-bold text-text-heading mt-10 mb-4">6. Contact Us</h2>
          <p className="text-text-body mb-6">
            For any questions about this Privacy Policy or your personal data:<br />
            Email: privacy@hotelai.tech
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
