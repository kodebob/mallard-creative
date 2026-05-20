"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy">
      {/* Animated gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full blur-3xl animate-float-blob"
          style={{
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle at center, rgba(201,168,76,0.18) 0%, transparent 70%)",
            top: "-10%",
            left: "10%",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl animate-float-blob-2"
          style={{
            width: "900px",
            height: "900px",
            background:
              "radial-gradient(circle at center, rgba(26,58,112,0.35) 0%, transparent 70%)",
            bottom: "-20%",
            right: "-10%",
          }}
        />
        <div
          className="absolute rounded-full blur-3xl animate-float-blob"
          style={{
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle at center, rgba(201,168,76,0.08) 0%, transparent 70%)",
            bottom: "20%",
            left: "5%",
            animationDelay: "3s",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.p
          className="text-gold font-bold tracking-[0.25em] uppercase text-xs md:text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Built in Pittsburgh. Built to Perform.
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-black tracking-tight text-white leading-[0.95] mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          We Build Websites That Work{" "}
          <span className="text-gold">As Hard As You Do</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-steel max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
        >
          Pittsburgh&apos;s web development agency for businesses ready to grow
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <a
            href="#work"
            className="w-full sm:w-auto rounded bg-gold px-8 py-4 text-base font-bold text-navy tracking-wide hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
          >
            See Our Work
          </a>
          <a
            href="#audit"
            className="w-full sm:w-auto rounded border border-gold/70 px-8 py-4 text-base font-bold text-gold tracking-wide hover:bg-gold/10 hover:border-gold transition-all duration-200"
          >
            Get a Free Audit
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="text-steel/60 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}
