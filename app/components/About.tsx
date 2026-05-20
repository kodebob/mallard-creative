"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "1 Week", label: "Average Delivery" },
  { value: "100%", label: "Client Ownership" },
  { value: "Pittsburgh", label: "Born & Operated" },
];

export default function About() {
  return (
    <section id="about" className="bg-navy py-24 md:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-4">
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              Built Different
            </h2>
            <p className="text-steel leading-relaxed text-base md:text-lg">
              Mallard Creative is a Pittsburgh-based web agency built by a young
              entrepreneur who got tired of seeing great local businesses get
              buried online. We build fast, we build clean, and we build sites
              that actually grow your business — not just look good on a screen.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="flex items-center gap-6 rounded-xl border border-white/10 bg-navy-mid p-6"
              >
                <div>
                  <p className="text-2xl md:text-3xl font-black text-gold leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-steel text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
