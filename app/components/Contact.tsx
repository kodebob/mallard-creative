"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

const websiteTypes = [
  "Business / Branding",
  "E-Commerce",
  "Portfolio",
  "Landing Page",
  "Booking / Service Site",
  "Other",
];

const budgetRanges = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,000",
  "$2,000+",
  "Let's Talk",
];

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_CONTACT_FORM_ID with your Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_CONTACT_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-navy-light py-24 md:py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Let&apos;s Build Something
          </h2>
          <p className="text-steel">
            Tell us about your project and we&apos;ll get back to you within 24
            hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {status === "success" ? (
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-10 text-center">
              <p className="text-3xl mb-3">✓</p>
              <p className="text-white font-bold text-xl mb-2">
                Message received.
              </p>
              <p className="text-steel text-sm">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  name="business"
                  type="text"
                  placeholder="Business Name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select
                  name="type"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-steel">
                    Type of Website
                  </option>
                  {websiteTypes.map((t) => (
                    <option key={t} value={t} className="bg-navy-mid">
                      {t}
                    </option>
                  ))}
                </select>
                <select
                  name="budget"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                >
                  <option value="" disabled className="text-steel">
                    Budget Range
                  </option>
                  {budgetRanges.map((b) => (
                    <option key={b} value={b} className="bg-navy-mid">
                      {b}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your project…"
                rows={5}
                required
                className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3.5 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors resize-none"
              />

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Email us at{" "}
                  <a
                    href="mailto:hello@mallardcreative.net"
                    className="underline text-gold"
                  >
                    hello@mallardcreative.net
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded bg-gold py-4 text-sm font-bold text-navy tracking-wide hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send It"}
              </button>
            </form>
          )}

          <p className="text-center text-steel/60 text-sm mt-8">
            Or reach us directly at{" "}
            <a
              href="mailto:hello@mallardcreative.net"
              className="text-steel hover:text-gold transition-colors"
            >
              hello@mallardcreative.net
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
