"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "K&M Landscaping",
    url: "https://verdant-landscaping-dusky.vercel.app/",
    displayUrl: "verdant-landscaping-dusky.vercel.app",
    description:
      "Full custom Next.js website for a Pittsburgh landscaping company featuring an AI-powered landscape visualizer, video hero, service pages, and lead generation contact form.",
    tags: ["Next.js", "Tailwind", "Gemini AI", "Web Design"],
    gradient: "from-[#0a1f0a] via-[#132813] to-[#0d2010]",
    accentColor: "rgba(34, 197, 94, 0.15)",
    label: "K&M Landscaping",
  },
  {
    name: "Agentaa",
    url: "https://www.agentaa.com/",
    displayUrl: "agentaa.com",
    description:
      "Modern web presence for an AI-powered platform, featuring clean design, strong brand identity, and conversion-focused layout.",
    tags: ["Web Design", "Brand Identity", "Development"],
    gradient: "from-[#0a1628] via-[#0f1e38] to-[#0d1a35]",
    accentColor: "rgba(99, 179, 237, 0.12)",
    label: "Agentaa",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="bg-navy-light py-24 md:py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gold font-bold tracking-[0.25em] uppercase text-xs mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
            Our Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold/10 bg-navy-mid"
            >
              {/* Preview area */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative h-52 overflow-hidden"
                aria-label={`View ${project.name} live site`}
              >
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />
                {/* Accent glow */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse at 30% 40%, ${project.accentColor} 0%, transparent 60%)`,
                  }}
                />

                {/* Browser chrome */}
                <div className="absolute top-0 inset-x-0 h-8 bg-black/40 backdrop-blur-sm flex items-center gap-2 px-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                  </div>
                  <div className="flex-1 mx-2 h-4 bg-white/8 rounded flex items-center px-2 overflow-hidden">
                    <span className="text-white/40 text-[10px] font-mono tracking-tight truncate">
                      {project.displayUrl}
                    </span>
                  </div>
                </div>

                {/* Project name watermark */}
                <div className="absolute inset-0 mt-8 flex items-center justify-center">
                  <span className="text-white/10 text-4xl font-black text-center px-4 leading-tight">
                    {project.label}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy/70">
                  <span className="text-gold font-bold text-sm tracking-[0.2em] uppercase">
                    View Live Site →
                  </span>
                </div>
              </a>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2">
                  {project.name}
                </h3>
                <p className="text-steel text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-gold bg-gold/10 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-light transition-colors"
                >
                  View Live Site
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-steel/60 text-sm italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          More projects coming soon — we&apos;re just getting started.
        </motion.p>
      </div>
    </section>
  );
}
