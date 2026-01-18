"use client";

interface StatItem {
  text: string;
  source: string;
  url: string;
}

interface AgentProps {
  id: string;
  title: string;
  stats: StatItem[];
  description: string;
  bullets: string[];
  videoPosition: "left" | "right";
  videoId?: string;
  bgColor: string;
}

function AgentSection({ id, title, stats, description, bullets, videoPosition, bgColor }: AgentProps) {
  const contentOrder = videoPosition === "left" ? "lg:order-2" : "lg:order-1";
  const videoOrder = videoPosition === "left" ? "lg:order-1" : "lg:order-2";

  return (
    <section id={id} className={bgColor}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`space-y-6 ${contentOrder}`}>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-text-heading">
                {title}
              </h2>
              <div className="mt-2 space-y-1">
                {stats.map((stat, index) => (
                  <p key={index} className="text-lg font-bold text-text-heading">
                    "{stat.text}" —{" "}
                    <a
                      href={stat.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-navy font-semibold"
                    >
                      {stat.source}
                    </a>
                  </p>
                ))}
              </div>
            </div>
            <p className="text-lg text-text-body leading-relaxed">
              {description}
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-gold flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-text-body">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Video */}
          <div className={videoOrder}>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl bg-navy/5">
              <div className="absolute inset-0 flex items-center justify-center bg-navy/10">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gold flex items-center justify-center">
                    <svg className="w-6 h-6 text-text-heading ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-text-muted text-sm">{title} Demo</p>
                  <p className="text-text-muted text-xs mt-1">~90 seconds</p>
                </div>
              </div>
              {/* Uncomment when video ID is available:
              <YouTubeEmbed videoid={videoId} height={300} params="rel=0" />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AIAgents() {
  return (
    <>
      {/* Section Header */}
      <section className="bg-background py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4">
            Meet Your Hotel's AI Team
          </h2>
          <p className="text-lg text-text-muted">
            Three specialized agents. One connected system.
          </p>
        </div>
      </section>

      {/* Agent 1 - Booking Agent */}
      <AgentSection
        id="booking-agent"
        title="AI Booking Agent"
        stats={[
          {
            text: "Visitors who chat are 82% more likely to convert",
            source: "Intercom",
            url: "https://www.intercom.com/blog/why-live-chat/",
          },
        ]}
        description="Capture direct bookings around the clock. The AI Booking Agent engages website visitors, answers questions about rooms and availability, and guides them through the booking process—all without OTA commissions."
        bullets={[
          "Turn more website visitors into confirmed bookings",
          "Capture guests before they leave for OTAs",
          "Keep 100% of your revenue (zero commissions)",
        ]}
        videoPosition="right"
        bgColor="bg-background"
      />

      {/* Agent 2 - Customer Service Agent */}
      <AgentSection
        id="customer-service-agent"
        title="AI Customer Service Agent"
        stats={[
          {
            text: "80% of guests report positive AI agent experiences",
            source: "EBI.ai",
            url: "https://ebi.ai/blog/12-reliable-stats-on-chatbots-in-customer-service/",
          },
        ]}
        description="Free your team from repetitive questions. The AI Customer Service Agent handles common inquiries about check-in times, amenities, local recommendations, and policies—giving your staff time for meaningful guest interactions."
        bullets={[
          "Handles up to 80% of guest inquiries instantly",
          "Reduces front desk workload significantly",
          "Always available, even during peak hours",
        ]}
        videoPosition="left"
        bgColor="bg-background-alt"
      />

      {/* Agent 3 - Data Agent */}
      <AgentSection
        id="data-agent"
        title="AI Data Agent"
        stats={[
          {
            text: "Reduce customer acquisition costs by 50%",
            source: "McKinsey",
            url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying",
          },
          {
            text: "40% more revenue from personalization",
            source: "McKinsey",
            url: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-personalization",
          },
        ]}
        description="Know what your guests actually want. The AI Data Agent analyzes every conversation to surface patterns, preferences, and opportunities you'd otherwise miss—turning chat transcripts into strategic insights."
        bullets={[
          "Turns conversations into actionable insights",
          "Reveals what guests actually care about",
          "Supports smarter marketing decisions",
        ]}
        videoPosition="right"
        bgColor="bg-background-card"
      />
    </>
  );
}
