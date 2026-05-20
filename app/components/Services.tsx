"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$400",
    description: "The essentials, done right.",
    features: [
      "3–5 page custom website",
      "Mobile responsive design",
      "Contact form",
      "1 revision round",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$800",
    description: "Everything you need to grow.",
    features: [
      "Everything in Starter",
      "Booking integration",
      "SEO setup",
      "Google Business optimization",
      "Analytics setup",
      "3 revision rounds",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$1,500+",
    description: "A complete digital presence.",
    features: [
      "Everything in Pro",
      "Custom design system",
      "Lead gen setup",
      "Social media integration",
      "Priority support",
    ],
    featured: false,
  },
];

const addons = [
  { label: "Hosting & Maintenance", price: "$75/mo" },
  { label: "SEO Management", price: "$200/mo" },
  { label: "Content Updates", price: "$100/mo" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="bg-navy py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Pricing
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            What We Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative rounded-xl p-8 flex flex-col ${
                plan.featured
                  ? "border-2 border-gold bg-navy-light shadow-2xl shadow-gold/10"
                  : "border border-white/10 bg-navy-mid"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-gold text-navy text-[11px] font-black tracking-widest uppercase px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-steel text-sm mb-4">{plan.description}</p>
                <p className="text-4xl font-black text-white">
                  {plan.price}
                  {plan.name !== "Premium" && (
                    <span className="text-steel text-base font-normal ml-1">
                      flat
                    </span>
                  )}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`rounded py-3 text-sm font-bold text-center tracking-wide transition-all duration-200 ${
                  plan.featured
                    ? "bg-gold text-navy hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20"
                    : "border border-gold/50 text-gold hover:bg-gold/10 hover:border-gold"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          className="rounded-xl border border-white/10 bg-navy-mid p-6 md:p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-steel text-xs font-bold tracking-widest uppercase mb-5">
            Monthly Retainer Add-ons
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {addons.map((addon) => (
              <div key={addon.label} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <span className="text-white/80 text-sm">{addon.label}</span>
                <span className="text-gold font-bold text-sm">{addon.price}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
