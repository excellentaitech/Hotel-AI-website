import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";
// import Testimonial from "@/components/Testimonial"; // Temporarily removed - see LESSONS-LEARNED.md
import Hero from "@/components/sections/Hero";
import DataBand from "@/components/sections/DataBand";
import AIAgents from "@/components/sections/AIAgents";
import DemoHotel from "@/components/sections/DemoHotel";
import Pricing from "@/components/sections/Pricing";
import HowItWorks from "@/components/sections/HowItWorks";
import Trust from "@/components/sections/Trust";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Testimonial - Owner: Temporarily removed - see LESSONS-LEARNED.md */}

        {/* Data Band - Stats */}
        <DataBand />

        {/* AI Agents Overview */}
        <AIAgents />

        {/* Testimonial - Operations Manager: Temporarily removed - see LESSONS-LEARNED.md */}

        {/* Demo Hotel Section */}
        <DemoHotel />

        {/* Pricing Section */}
        <Pricing />

        {/* How It Works */}
        <HowItWorks />

        {/* Testimonial - Marketing Agency Director: Temporarily removed - see LESSONS-LEARNED.md */}

        {/* Trust/Objections Section */}
        <Trust />

        {/* FAQ Section */}
        <FAQ />

        {/* Final CTA Section */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Mobile Sticky CTA Button */}
      <MobileStickyButton />
    </>
  );
}
