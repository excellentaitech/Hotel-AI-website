import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found — Hotel AI",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-[60vh] flex items-center justify-center bg-background">
        <div className="max-w-lg mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-text-heading mb-4">
            This page doesn't exist
          </h1>
          <p className="text-lg text-text-muted mb-8">
            The page you're looking for may have moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gold hover:bg-gold-hover text-text-heading font-semibold rounded-lg transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="#book"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-navy text-navy hover:bg-navy hover:text-white font-semibold rounded-lg transition-colors"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
