"use client";

import { YouTubeEmbed } from "@next/third-parties/google";
import CalendlyButton from "@/components/CalendlyButton";

export default function Hero() {
  return (
    <section id="main" className="bg-background-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Text Content - centered on mobile, left-aligned on desktop */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-text-heading leading-tight">
              30% More Direct Bookings.
            </h1>
            <p className="mt-3 lg:mt-4 text-2xl sm:text-3xl font-bold text-text-heading">
              3 AI Agents • 1 Package
            </p>
            <ul className="mt-4 lg:mt-5 space-y-2 sm:space-y-3 text-lg sm:text-xl font-medium text-text-body inline-block text-left">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Improve revenue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Reduce operational strain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">•</span>
                <span>Understand guest demand</span>
              </li>
            </ul>
            <div className="mt-5 lg:mt-6">
              <CalendlyButton className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gold hover:bg-gold-hover text-text-heading font-semibold rounded-lg transition-colors text-base sm:text-lg">
                Book Your Consultation
              </CalendlyButton>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-text-muted">
                15 minutes. See exactly how it works for you.
              </p>
            </div>
          </div>

          {/* Video - 60% */}
          <div className="lg:col-span-3">
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Video thumbnail with team image */}
              <img
                src="/video-thumbnail.jpg"
                alt="Meet your AI hotel team - three AI agents ready to help with bookings, customer service, and data insights"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Subtle overlay for play button visibility */}
              <div className="absolute inset-0 bg-navy/5 transition-colors duration-300 group-hover:bg-navy/10" />
              {/* Play button and text overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gold/90 flex items-center justify-center transition-all duration-300 group-hover:bg-gold group-hover:scale-110 shadow-lg">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-text-heading ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white text-sm sm:text-base font-semibold drop-shadow-lg">Product Overview Video</p>
                </div>
              </div>
              {/* Uncomment when video ID is available:
              <YouTubeEmbed videoid="VIDEO_ID" height={400} params="rel=0" />
              */}
            </div>
          </div>
        </div>

        {/* GDPR Badge - right-justified */}
        <div className="flex justify-center sm:justify-end mt-6 sm:mt-8">
          <div className="flex items-center gap-2 text-text-muted">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="text-sm font-medium">GDPR Compliant</span>
          </div>
        </div>

      </div>
    </section>
  );
}
