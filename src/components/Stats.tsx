import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "framer-motion";

function CountUp({
  to,
  decimals = 0,
  suffix = "",
}: {
  to: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = v.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, to, decimals, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { to: 128, suffix: "K+", decimals: 0, label: "Total downloads" },
  { to: 99.2, suffix: "%", decimals: 1, label: "Undetected rate" },
  { to: 48, suffix: "K+", decimals: 0, label: "Active users" },
  { to: 310, suffix: "+", decimals: 0, label: "Updates shipped" },
];

export default function Stats() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-lemon/15 bg-panel px-8 py-14 sm:px-14"
        >
          <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,black,transparent)]" />
          <div className="absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-lemon/12 blur-[100px]" />

          <div className="relative grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-display text-4xl font-black text-lemon sm:text-5xl">
                  <CountUp to={s.to} decimals={s.decimals} suffix={s.suffix} />
                </span>
                <p className="mt-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-smoke">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
