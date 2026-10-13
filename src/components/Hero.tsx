import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Download, Star } from "lucide-react";

const stats = [
  { value: "128K+", label: "Downloads" },
  { value: "99.2%", label: "Undetected rate" },
  { value: "4.9/5", label: "User rating" },
  { value: "24/7", label: "Live support" },
];

const chips = [
  {
    text: "UNDETECTED",
    className: "right-0 top-10",
    delay: "0s",
    dot: true,
  },
  {
    text: "HWID PERMA-SPOOFED",
    className: "left-0 top-1/3",
    delay: "1.2s",
    dot: false,
  },
  {
    text: "v4.2.1 — 48K DL",
    className: "bottom-8 right-6",
    delay: "2.1s",
    dot: false,
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-14 lg:pt-44 lg:pb-20">
      {/* Backdrop layers */}
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
      <div className="absolute -top-48 right-[-12%] size-[620px] rounded-full bg-lemon/15 blur-[160px]" />
      <div className="absolute bottom-[-20%] left-[-15%] size-[520px] rounded-full bg-lime/10 blur-[150px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 rounded-full border border-lemon/25 bg-lemon/5 px-4 py-1.5"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-lemon opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-lemon" />
            </span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-lemon">
              v4.2 — All builds operational
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-display text-[clamp(2.5rem,7vw,5.25rem)] font-black leading-[0.98] tracking-tight"
          >
            FRESH HWID.
            <br />
            <span className="text-stroke">ZERO BANS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-smoke"
          >
            Permanent HWID spoofers, private game cheats and premium tools —
            instantly delivered, continuously updated, and always undetected.
            When life gives you bans, make LemonWare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="group flex items-center gap-2.5 rounded-2xl bg-lemon px-7 py-4 text-sm sm:text-base font-bold text-void transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_44px_rgba(245,225,0,0.45)]"
            >
              <Download className="size-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              Browse Software
            </a>
            <a
              href="#reviews"
              className="group flex items-center gap-2.5 rounded-2xl border border-cream/15 px-7 py-4 text-sm sm:text-base font-semibold text-cream transition-all duration-300 hover:border-lemon/50 hover:text-lemon"
            >
              <MessageCircle className="size-5" />
              Join 48K users
              <ArrowRight className="size-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex items-center gap-3 font-mono text-xs text-smoke"
          >
            <span className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-lemon text-lemon" />
              ))}
            </span>
            4.9 from 11,000+ verified reviews
          </motion.div>
        </div>

        {/* Lemon visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
        >
          <div className="absolute inset-0 -z-10 scale-90 rounded-full bg-lemon/20 blur-[110px]" />

          <div className="animate-float">
            <img
              src="/images/lemon-hero.png"
              alt="LemonWare chrome lemon"
              className="w-full [mix-blend-mode:screen]"
              draggable={false}
            />
          </div>

          {/* Floating chips */}
          {chips.map((chip) => (
            <div
              key={chip.text}
              className={`animate-float absolute ${chip.className}`}
              style={{ animationDelay: chip.delay }}
            >
              <span className="flex items-center gap-2 rounded-xl border border-lemon/25 bg-void/80 px-3.5 py-2 font-mono text-[10px] sm:text-[11px] tracking-wider text-cream shadow-[0_0_30px_rgba(245,225,0,0.12)] backdrop-blur-md">
                {chip.dot && <span className="size-1.5 rounded-full bg-ok shadow-[0_0_8px_rgba(111,255,127,0.9)]" />}
                {chip.text}
              </span>
            </div>
          ))}

          {/* Orbiting shield */}
          <div className="absolute -bottom-2 left-4 animate-float" style={{ animationDelay: "3s" }}>
            <span className="flex items-center gap-2 rounded-xl border border-ok/25 bg-void/80 px-3.5 py-2 font-mono text-[10px] sm:text-[11px] tracking-wider text-ok shadow-[0_0_30px_rgba(111,255,127,0.1)] backdrop-blur-md">
              <ShieldCheck className="size-3.5" />
              EAC / BE READY
            </span>
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-16 max-w-7xl px-5 lg:mt-20 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-6 border-t border-cream/10 pt-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-lemon">{s.value}</span>
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-smoke">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
