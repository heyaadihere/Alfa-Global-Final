import React, { useEffect, useRef, useState } from 'react';
import { statisticsData } from '../mock';

const Statistics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(statisticsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      statisticsData.forEach((stat, index) => {
        const target = parseInt(stat.value.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(current);
            return newCounts;
          });
        }, duration / steps);
      });
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#0A1628] to-[#142444] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4C430] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statisticsData.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4C430] bg-clip-text text-transparent mb-3">
                {stat.prefix}{counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-300 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;