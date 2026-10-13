import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, DownloadCloud } from "lucide-react";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    icon: ShoppingBag,
    num: "01",
    title: "Pick Your Loadout",
    desc: "Browse the catalog and choose the software that fits your game and your playstyle — legit configs or full rage.",
  },
  {
    icon: CreditCard,
    num: "02",
    title: "Checkout in Seconds",
    desc: "Pay with card, PayPal or crypto. Your license key and unique compiled build are generated instantly.",
  },
  {
    icon: DownloadCloud,
    num: "03",
    title: "Download & Dominate",
    desc: "Run the loader, hit inject, and you're in. Every future update downloads itself automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="How It Works"
          title="BANNED TO BALLING IN 3 STEPS"
          sub="From checkout to in-game in under five minutes. No setup guides, no Discord DMs, no waiting rooms."
        />

        <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* Connector line */}
          <div className="absolute left-0 right-0 top-8 hidden border-t border-dashed border-lemon/25 md:block" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto grid size-16 place-items-center rounded-2xl border border-lemon/30 bg-panel text-lemon shadow-[0_0_36px_rgba(245,225,0,0.12)]">
                <s.icon className="size-7" strokeWidth={1.8} />
              </div>

              <span className="mt-6 block font-display text-4xl font-black text-stroke">{s.num}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-cream">{s.title}</h3>
              <p className="mx-auto mt-2.5 max-w-xs text-sm leading-relaxed text-smoke">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
