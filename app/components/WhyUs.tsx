"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🏙️",
    title: "Pittsburgh Built",
    description:
      "We're local, we know the market, we show up. Not some agency in another timezone who's never been to the 412.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    description:
      "Most sites delivered in 1 week or less. We respect your time and treat every deadline like it's our own.",
  },
  {
    icon: "📈",
    title: "Built to Convert",
    description:
      "Every site is engineered to turn visitors into clients — not just look good in a portfolio screenshot.",
  },
  {
    icon: "🔧",
    title: "You Own Everything",
    description:
      "No lock-in. Full ownership of your code and domain from day one. Walk away with everything if you want.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-navy py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Why Us
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Why Work With Mallard Creative
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-xl border border-white/10 bg-navy-mid p-8 hover:border-gold/30 transition-all duration-300 hover:bg-navy-light"
            >
              <div className="text-3xl mb-5">{feature.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-steel text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
