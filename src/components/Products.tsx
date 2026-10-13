import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, RefreshCw, Star, Download, Flame } from "lucide-react";
import { products, type Product, type ProductStatus } from "../data/products";
import SectionHeading from "./SectionHeading";
import ProductModal from "./ProductModal";

export function StatusBadge({ status }: { status: ProductStatus }) {
  if (status === "updating") {
    return (
      <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-updating/30 bg-updating/10 px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-updating">
        <RefreshCw className="size-3 animate-spin" />
        UPDATING
      </span>
    );
  }
  return (
    <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-ok/30 bg-ok/10 px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-ok">
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-70" />
        <span className="relative inline-flex size-1.5 rounded-full bg-ok" />
      </span>
      UNDETECTED
    </span>
  );
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3 ${i < Math.round(rating) ? "fill-lemon text-lemon" : "text-cream/20"}`}
        />
      ))}
    </span>
  );
}

type Filter = "all" | "spoofer" | "cheat" | "tool";
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "spoofer", label: "Spoofers" },
  { id: "cheat", label: "Cheats" },
  { id: "tool", label: "Tools" },
];

function spotlight(e: React.MouseEvent<HTMLDivElement>) {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
}

export default function Products() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  const visible = useMemo(
    () => products.filter((p) => filter === "all" || p.category === filter),
    [filter]
  );

  return (
    <section id="products" className="relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 size-[500px] -translate-x-1/2 rounded-full bg-lemon/8 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="The Catalog"
          title="PICK YOUR POISON"
          sub="Every build is compiled fresh, obfuscated per user, and battle-tested by thousands of players before it hits the shelf."
        />

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap justify-center gap-2.5"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className="relative rounded-full px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors"
            >
              {filter === f.id && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 rounded-full bg-lemon"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  filter === f.id ? "font-bold text-void" : "text-smoke hover:text-cream"
                }`}
              >
                {f.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={p.featured ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <div
                  onMouseMove={spotlight}
                  onClick={() => setSelected(p)}
                  className={`spotlight-card group cursor-pointer rounded-3xl border border-cream/8 bg-panel p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-lemon/35 hover:shadow-[0_20px_60px_-20px_rgba(245,225,0,0.25)] sm:p-7 ${
                    p.featured ? "lg:flex lg:items-center lg:gap-10" : ""
                  }`}
                >
                  {p.featured ? (
                    <>
                      {/* Featured card */}
                      <div className="flex items-start gap-5 lg:flex-1">
                        <span className="relative grid size-16 shrink-0 place-items-center rounded-2xl bg-lemon/10 text-lemon transition-colors duration-300 group-hover:bg-lemon group-hover:text-void sm:size-20">
                          <p.icon className="size-8 sm:size-10" strokeWidth={1.8} />
                        </span>
                        <div>
                          <span className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-lemon px-3 py-1 font-mono text-[10px] font-bold tracking-[0.15em] text-void">
                            <Flame className="size-3" />
                            BESTSELLER
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-extrabold text-cream">
                            {p.name}
                          </h3>
                          <p className="mt-1.5 text-sm text-smoke">{p.tagline}</p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.features.slice(0, 3).map((f) => (
                              <span
                                key={f}
                                className="rounded-full border border-lemon/20 bg-lemon/5 px-3 py-1 font-mono text-[10px] tracking-wide text-lemon/90"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center justify-between gap-6 border-t border-cream/8 pt-5 lg:mt-0 lg:w-72 lg:flex-col lg:items-end lg:border-none lg:pt-0">
                        <div className="text-left lg:text-right">
                          <StatusBadge status={p.status} />
                          <div className="mt-3 flex items-baseline gap-2 lg:justify-end">
                            <span className="font-display text-3xl font-black text-lemon">${p.price}</span>
                            {p.oldPrice && (
                              <span className="text-sm text-smoke line-through">${p.oldPrice}</span>
                            )}
                          </div>
                          <p className="mt-1 font-mono text-[10px] tracking-wider text-smoke">
                            {p.downloads} DOWNLOADS • {p.reviews.toLocaleString()} REVIEWS
                          </p>
                        </div>
                        <button className="flex items-center gap-2 rounded-xl bg-lemon px-6 py-3.5 text-sm font-bold text-void transition-all duration-300 group-hover:shadow-[0_0_32px_rgba(245,225,0,0.4)]">
                          GET NOW
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Regular card */}
                      <div className="flex items-start justify-between gap-3">
                        <span className="grid size-13 place-items-center rounded-2xl bg-lemon/10 text-lemon transition-colors duration-300 group-hover:bg-lemon group-hover:text-void">
                          <p.icon className="size-6" strokeWidth={1.8} />
                        </span>
                        <StatusBadge status={p.status} />
                      </div>

                      <h3 className="mt-5 font-display text-lg font-extrabold text-cream">{p.name}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-smoke">{p.tagline}</p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[10px] tracking-wider text-smoke">
                        <span className="flex items-center gap-1.5">
                          <Stars rating={p.rating} />
                          {p.rating}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Download className="size-3" />
                          {p.downloads}
                        </span>
                        <span>v{p.version}</span>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-cream/8 pt-5">
                        <div className="flex items-baseline gap-2">
                          {p.price === "free" ? (
                            <span className="font-display text-2xl font-black text-lime">FREE</span>
                          ) : (
                            <>
                              <span className="font-display text-2xl font-black text-lemon">
                                ${p.price}
                              </span>
                              {p.oldPrice && (
                                <span className="text-sm text-smoke line-through">${p.oldPrice}</span>
                              )}
                            </>
                          )}
                        </div>
                        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.2em] text-cream/60 transition-colors duration-300 group-hover:text-lemon">
                          VIEW
                          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 text-center font-mono text-xs tracking-wider text-smoke"
        >
          Every purchase includes a unique compiled build, license key and lifetime updates.
        </motion.p>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
