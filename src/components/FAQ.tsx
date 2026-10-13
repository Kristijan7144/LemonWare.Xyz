import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    q: "Is the HWID spoofer really permanent?",
    a: "Yes. Unlike temporary spoofers that revert on reboot, LemonWare rewrites your serials at the firmware level. Your new identity persists through reboots, Windows updates and even full reinstalls — until you decide to restore it with one click.",
  },
  {
    q: "What happens if a build gets detected?",
    a: "The status flips to UPDATING and we pull it from the shelf immediately. Patches typically ship within 24 hours, and any downtime is automatically compensated with free time added to your license. You never pay for a broken build.",
  },
  {
    q: "How fast is delivery?",
    a: "Instant. The moment your payment clears, your license key and the loader download appear on your dashboard — and are also emailed to you. Average time from checkout to in-game is under five minutes.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "All major credit and debit cards, PayPal, and crypto (BTC, ETH, LTC and USDT). Crypto payments get an automatic 10% discount at checkout.",
  },
  {
    q: "Does it work on Windows 11?",
    a: "Fully supported. All software runs on Windows 10 and 11 (64-bit), on both Intel and AMD platforms. The spoofer also covers TPM 2.0 devices.",
  },
  {
    q: "Do you offer refunds?",
    a: "If the software doesn't work on your system and our support team can't fix it, you get a full refund within 48 hours of purchase — no questions, no forms, no hoops.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="absolute right-[-10%] bottom-0 size-[420px] rounded-full bg-lemon/8 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="FAQ"
          title="SQUEEZED FOR ANSWERS?"
          sub="Everything you need to know before you press download."
        />

        <div className="mt-14 flex flex-col gap-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-lemon/35 bg-panel" : "border-cream/8 bg-panel/60 hover:border-lemon/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span
                    className={`font-display text-sm sm:text-base font-bold transition-colors ${
                      isOpen ? "text-lemon" : "text-cream"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`grid size-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-lemon bg-lemon text-void"
                        : "border-cream/15 text-smoke"
                    }`}
                  >
                    <Plus className="size-4" strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-smoke">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
