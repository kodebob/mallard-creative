"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["Work", "Services", "About", "Contact"] as const;

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-2xl shadow-black/30"
          : "bg-transparent"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-xl font-black tracking-tight text-gold hover:text-gold-light transition-colors"
        >
          Mallard Creative
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded bg-gold px-5 py-2.5 text-sm font-bold text-navy tracking-wide hover:bg-gold-light transition-colors"
          >
            Start a Project
          </a>
        </nav>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {menuOpen ? (
              <>
                <line
                  x1="3" y1="3" x2="19" y2="19"
                  stroke="white" strokeWidth="2" strokeLinecap="round"
                />
                <line
                  x1="19" y1="3" x2="3" y2="19"
                  stroke="white" strokeWidth="2" strokeLinecap="round"
                />
              </>
            ) : (
              <>
                <line x1="2" y1="5" x2="20" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <line x1="2" y1="17" x2="20" y2="17" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-light border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base font-medium text-white/80 hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="rounded bg-gold px-5 py-3 text-sm font-bold text-navy text-center tracking-wide hover:bg-gold-light transition-colors"
          >
            Start a Project
          </a>
        </div>
      )}
    </motion.header>
  );
}
