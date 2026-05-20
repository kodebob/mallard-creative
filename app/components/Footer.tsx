import DuckLogo from "./DuckLogo";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Free Audit", href: "#audit" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/20">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div className="max-w-xs">
            <a
              href="/"
              className="flex items-center gap-2 text-gold mb-3"
            >
              <DuckLogo size={26} />
              <span className="text-xl font-black tracking-tight">Mallard Creative</span>
            </a>
            <p className="text-steel text-sm leading-relaxed">
              Built in Pittsburgh. Built to Perform.
              <br />
              Custom websites, SEO, and digital strategy for businesses that
              want to stand out.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/60 hover:text-gold transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel/50 text-xs">
            © 2025 Mallard Creative. Pittsburgh, PA. All rights reserved.
          </p>
          <a
            href="mailto:hello@mallardcreative.net"
            className="text-steel/50 text-xs hover:text-gold transition-colors"
          >
            hello@mallardcreative.net
          </a>
        </div>
      </div>
    </footer>
  );
}
