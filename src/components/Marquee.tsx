import { Citrus } from "lucide-react";

const items = [
  "PERMANENT HWID SPOOFER",
  "INSTANT DELIVERY",
  "100% UNDETECTED",
  "48K+ COMMUNITY",
  "LIFETIME UPDATES",
  "24/7 SUPPORT",
  "ENCRYPTED CHECKOUT",
  "AUTO-UPDATING LOADERS",
];

export default function Marquee() {
  return (
    <section className="relative overflow-hidden py-8" aria-hidden="true">
      <div className="-rotate-1 scale-[1.03] border-y-4 border-void bg-lemon py-3.5 shadow-[0_0_80px_rgba(245,225,0,0.22)]">
        <div className="animate-marquee flex w-max items-center gap-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-10">
              {items.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-10">
                  <span className="font-display text-sm sm:text-base font-extrabold tracking-wide whitespace-nowrap text-void">
                    {item}
                  </span>
                  <Citrus className="size-5 text-void" strokeWidth={2.5} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
