import { motion } from "framer-motion";
import { ArrowRight, Citrus, MessageCircle } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-lemon px-8 py-16 text-center sm:px-14 lg:py-20"
        >
          {/* Decorative citrus rings */}
          <Citrus className="absolute -left-10 -top-10 size-44 text-void/8" strokeWidth={1} />
          <Citrus className="absolute -bottom-12 -right-12 size-56 text-void/8" strokeWidth={1} />
          <Citrus className="absolute right-[12%] -top-8 size-28 rotate-12 text-void/6" strokeWidth={1} />

          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.35em] text-void/60">
            No subscriptions. No waiting. No bans.
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-black leading-[1.02] tracking-tight text-void sm:text-5xl lg:text-6xl">
            STOP GETTING BANNED. START GETTING SQUEAKY CLEAN.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg font-medium leading-relaxed text-void/70">
            Join 48,000+ players who found out what a fresh start really feels like.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#products"
              className="group flex items-center gap-2.5 rounded-2xl bg-void px-8 py-4 text-sm sm:text-base font-bold text-lemon transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgba(0,0,0,0.4)]"
            >
              Browse Software
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#faq"
              className="flex items-center gap-2.5 rounded-2xl border-2 border-void/25 px-8 py-4 text-sm sm:text-base font-bold text-void transition-all duration-300 hover:border-void hover:bg-void hover:text-lemon"
            >
              <MessageCircle className="size-5" />
              Talk to Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
