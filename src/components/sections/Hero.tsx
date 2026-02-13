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
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
              <YouTubeEmbed videoid="ml9Yvd_b1-w" params="rel=0" />
            </div>
            {/* Trust badges - underneath video */}
            <div className="flex flex-wrap justify-between mt-4 sm:mt-5">
              {/* GDPR */}
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              {/* ChatGPT */}
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
                </svg>
                <span className="text-sm font-medium">ChatGPT</span>
              </div>
              {/* Claude */}
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.709 15.955l4.72-2.756.08-.046 2.91-1.707L6.396 8.08l-.164-.093-4.532-2.59a.27.27 0 0 0-.404.234v9.97c0 .09.046.176.127.222l3.048 1.748c.078.044.163.048.238.024zm7.735-4.391l2.097-1.227-2.097-1.2-2.097 1.2 2.097 1.227zm7.865 2.393l-3.072-1.76a.254.254 0 0 0-.254 0l-4.539 2.652v3.453l6.024-3.513.164-.094 4.532-2.59a.27.27 0 0 0 .132-.233V2.43a.27.27 0 0 0-.404-.234l-7.577 4.338v3.453l4.72 2.709.08.046 2.91 1.707a.254.254 0 0 0 .254 0l3.048-1.748a.254.254 0 0 0 .127-.222v-3.497a.254.254 0 0 0-.127-.222l-3.072-1.76a.254.254 0 0 0-.254 0L12.72 9.652v3.453l-4.539 2.652v3.453l7.577 4.338a.27.27 0 0 0 .404-.234v-5.18l4.72-2.757.08-.046 2.91-1.707" />
                </svg>
                <span className="text-sm font-medium">Claude</span>
              </div>
              {/* n8n */}
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-sm font-medium">n8n</span>
              </div>
              {/* Google */}
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <span className="text-sm font-medium">Google</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
