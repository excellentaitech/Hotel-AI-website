"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out curve for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

export default function DataBand() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { value: 30, suffix: "%", label: "more direct bookings" },
    { value: 82, suffix: "%", label: "more likely to book when chatting" },
    { value: 80, suffix: "%", label: "of inquiries handled instantly" },
    { value: 90, suffix: "%", label: "faster response times" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const count0 = useCountUp(stats[0].value, 2000, isVisible);
  const count1 = useCountUp(stats[1].value, 2000, isVisible);
  const count2 = useCountUp(stats[2].value, 2000, isVisible);
  const count3 = useCountUp(stats[3].value, 2000, isVisible);
  const counts = [count0, count1, count2, count3];

  return (
    <section ref={sectionRef} className="bg-background-card py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl lg:text-4xl font-bold text-navy mb-2">
                {counts[index]}{stat.suffix}
              </p>
              <p className="text-text-muted text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/sources"
            className="text-text-muted text-sm hover:text-navy transition-colors"
          >
            View sources →
          </Link>
        </div>
      </div>
    </section>
  );
}
