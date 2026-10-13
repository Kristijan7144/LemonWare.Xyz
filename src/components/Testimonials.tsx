import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    user: "xX_Vortex",
    game: "APEX LEGENDS",
    color: "bg-lemon text-void",
    quote:
      "Perma-banned on my main after 6 years. The spoofer had me back on a fresh account in under 10 minutes. Absolute lifesaver.",
  },
  {
    user: "NoScopeNancy",
    game: "FORTNITE",
    color: "bg-lime text-void",
    quote:
      "The Fortnite build is smooth as butter. Zero FPS drops, no crashes, just clean ESP and crispy aim. 10/10 would squeeze again.",
  },
  {
    user: "GhostPixel",
    game: "RUST",
    color: "bg-cream text-void",
    quote:
      "Support answered me at 3am and walked me through the entire setup on a fresh Windows install. Worth every single cent.",
  },
  {
    user: "Kr4ken",
    game: "WARZONE",
    color: "bg-lemon text-void",
    quote:
      "Unlock all in literally 2 minutes. My whole squad bought it after seeing my account. Camos for days.",
  },
  {
    user: "RustLord77",
    game: "RUST",
    color: "bg-lime text-void",
    quote:
      "4 months on the private Rust build and still undetected. Silent aim is disgustingly good. This is the only site I trust.",
  },
  {
    user: "solow_zn",
    game: "CS2",
    color: "bg-cream text-void",
    quote:
      "The free HWID checker alone is better than the paid tools I've used. Instant fan — bought the spoofer the same day.",
  },
];

function Card({ r }: { r: (typeof reviews)[number] }) {
  return (
    <div className="w-[320px] shrink-0 rounded-3xl border border-cream/8 bg-panel p-6 transition-colors duration-300 hover:border-lemon/30 sm:w-[380px]">
      <div className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-lemon text-lemon" />
        ))}
      </div>
      <p className="mt-4 min-h-20 text-sm leading-relaxed text-cream/85">"{r.quote}"</p>
      <div className="mt-5 flex items-center gap-3 border-t border-cream/8 pt-4">
        <span
          className={`grid size-10 shrink-0 place-items-center rounded-full font-display text-xs font-extrabold ${r.color}`}
        >
          {r.user.slice(0, 2).toUpperCase()}
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-1.5 text-sm font-semibold text-cream">
            {r.user}
            <BadgeCheck className="size-4 shrink-0 text-lemon" />
          </p>
          <p className="font-mono text-[10px] tracking-[0.2em] text-smoke">
            VERIFIED • {r.game}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32">
      <div className="absolute left-[-12%] top-1/4 size-[480px] rounded-full bg-lemon/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Community"
          title="PLAYER ZERO, PLAYER ONE, PLAYER EVERYONE"
          sub="4.9/5 across 11,000+ verified reviews. Here's what the squeeze squad has to say."
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mask-fade-x pause-on-hover relative mt-14 overflow-hidden"
      >
        <div className="animate-marquee-slow flex w-max gap-5 py-2">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-5" aria-hidden={copy === 1}>
              {reviews.map((r) => (
                <Card key={`${copy}-${r.user}`} r={r} />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
