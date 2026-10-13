import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Citrus, Menu, X, MessageCircle } from "lucide-react";

const links = [
  { label: "Products", href: "#products" },
  { label: "Features", href: "#features" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-lemon/10 bg-void/85 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-xl bg-lemon text-void shadow-[0_0_24px_rgba(245,225,0,0.35)] transition-transform duration-300 group-hover:rotate-12">
            <Citrus className="size-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-sm sm:text-base font-extrabold tracking-tight text-cream">
            LEMONWARE<span className="text-lemon">.XYZ</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-xs uppercase tracking-[0.2em] text-smoke transition-colors hover:text-lemon"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="hidden items-center gap-2 rounded-full border border-ok/25 bg-ok/5 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ok xl:flex">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-ok" />
            </span>
            All systems operational
          </span>
          <a
            href="#products"
            className="group flex items-center gap-2 rounded-full bg-lemon px-5 py-2.5 text-sm font-bold text-void transition-all duration-300 hover:shadow-[0_0_36px_rgba(245,225,0,0.45)]"
          >
            <MessageCircle className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
            Discord
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid size-10 place-items-center rounded-xl border border-cream/10 text-cream lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-lemon/10 bg-void/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-[0.2em] text-smoke transition-colors hover:bg-lemon/5 hover:text-lemon"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-lemon px-4 py-3 text-sm font-bold text-void"
              >
                <MessageCircle className="size-4" />
                Join Discord
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
