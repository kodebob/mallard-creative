"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "loading" | "success" | "error";

export default function FreeAudit() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      // Replace YOUR_AUDIT_FORM_ID with your Formspree form ID
      const res = await fetch("https://formspree.io/f/xqejpdaz", {
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
    <section id="audit" className="bg-navy-light py-24 md:py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="rounded-2xl border-2 border-gold/60 bg-navy p-8 md:p-12 shadow-2xl shadow-gold/5"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Free Resource
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-4">
            Get a Free Website Audit
          </h2>
          <p className="text-steel leading-relaxed mb-8 max-w-xl">
            Send us your current website and we&apos;ll send back a personal
            video breakdown of exactly what&apos;s holding it back —
            completely free, no strings attached.
          </p>

          {status === "success" ? (
            <div className="rounded-lg bg-gold/10 border border-gold/30 p-6 text-center">
              <p className="text-gold font-bold text-lg mb-1">
                You&apos;re on the list.
              </p>
              <p className="text-steel text-sm">
                We&apos;ll have your audit back to you within 48 hours.
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
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
                />
              </div>
              <input
                name="website"
                type="url"
                placeholder="Your Current Website URL"
                required
                className="w-full rounded-lg border border-white/10 bg-navy-mid px-4 py-3 text-sm text-white placeholder-steel/60 focus:outline-none focus:border-gold/50 transition-colors"
              />

              {status === "error" && (
                <p className="text-red-400 text-sm">
                  Something went wrong. Email us directly at{" "}
                  <a
                    href="mailto:hello@mallardcreative.net"
                    className="underline"
                  >
                    hello@mallardcreative.net
                  </a>
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto rounded bg-gold px-8 py-3.5 text-sm font-bold text-navy tracking-wide hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Sending…" : "Send My Free Audit"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
