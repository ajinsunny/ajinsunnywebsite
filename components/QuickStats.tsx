"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  duration: number;
}

const stats: Stat[] = [
  {
    value: 5,
    suffix: "+",
    label: "Years of Experience",
    duration: 2,
  },
  {
    value: 2000,
    suffix: "+",
    label: "Code Reviews Completed",
    duration: 3,
  },
  {
    value: 15,
    suffix: "+",
    label: "Projects Delivered",
    duration: 2,
  },
];

const QuickStats = () => {
  return (
    <section className="py-20 bg-white/5 border-y border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Stat Number */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent mb-2">
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={stat.duration}
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>

              {/* Stat Label */}
              <div className="text-white/70 text-sm md:text-base font-medium uppercase tracking-wider max-w-[150px]">
                {stat.label}
              </div>

              {/* Divider (not on last item) */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-20 bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStats;
