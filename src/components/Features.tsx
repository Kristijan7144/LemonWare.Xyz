import { motion } from "framer-motion";
import {
  ShieldCheck,
  Zap,
  RefreshCw,
  Headphones,
  Fingerprint,
  Lock,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Undetected Builds",
    desc: "Per-user compilation and multi-layer obfuscation keep every build's signature unique — anti-cheats never see the same file twice.",
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    desc: "Your license key and loader download appear in your dashboard the second your payment clears. No waiting, ever.",
  },
  {
    icon: RefreshCw,
    title: "Lifetime Updates",
    desc: "Every patch, rework and full rebuild is free forever. The loader auto-updates itself in the background.",
  },
  {
    icon: Headphones,
    title: "24/7 Human Support",
    desc: "Real people on Discord around the clock. Average first response time: under 5 minutes, day or night.",
  },
  {
    icon: Fingerprint,
    title: "Full HWID Coverage",
    desc: "Disk, SMBIOS, MAC, GPU, USB and TPM 2.0 — every serial anti-cheats can read, randomized and permanent.",
  },
  {
    icon: Lock,
    title: "Encrypted Checkout",
    desc: "Stripe-secured card payments or crypto. Your data is never stored, and keys are generated on the fly.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="absolute right-[-10%] top-1/3 size-[480px] rounded-full bg-lemon/8 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Why LemonWare"
          title="SOUR ON THE OUTSIDE. SHARP ON THE INSIDE."
          sub="Six reasons 48,000+ players trust LemonWare to keep their accounts — and their hardware — off the ban list."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-cream/8 bg-panel p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-lemon/35 hover:shadow-[0_20px_60px_-24px_rgba(245,225,0,0.3)]"
            >
              <div className="absolute -right-10 -top-10 size-36 rounded-full bg-lemon/5 blur-2xl transition-opacity duration-300 group-hover:bg-lemon/10" />

              <span className="relative grid size-13 place-items-center rounded-2xl bg-lemon/10 text-lemon transition-colors duration-300 group-hover:bg-lemon group-hover:text-void">
                <f.icon className="size-6" strokeWidth={1.8} />
              </span>

              <h3 className="relative mt-5 font-display text-lg font-bold text-cream">{f.title}</h3>
              <p className="relative mt-2.5 text-sm leading-relaxed text-smoke">{f.desc}</p>

              <span className="absolute bottom-5 right-6 font-mono text-[10px] tracking-[0.25em] text-cream/15 transition-colors duration-300 group-hover:text-lemon/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
