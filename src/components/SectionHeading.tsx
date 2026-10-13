import { motion } from "framer-motion";

interface Props {
  index: string;
  eyebrow: string;
  title: string;
  sub?: string;
}

export default function SectionHeading({ index, eyebrow, title, sub }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.35em] text-lemon uppercase">
        <span className="inline-block size-1.5 rotate-45 bg-lemon" />
        {index} — {eyebrow}
      </span>
      <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.08] tracking-tight text-cream">
        {title}
      </h2>
      {sub && <p className="mt-5 text-base sm:text-lg leading-relaxed text-smoke">{sub}</p>}
    </motion.div>
  );
}
