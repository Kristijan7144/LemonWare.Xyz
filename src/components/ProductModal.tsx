import { useEffect, useState } from "react";
import { AnimatePresence, animate, motion } from "framer-motion";
import {
  X,
  Check,
  Download,
  Loader2,
  ShieldCheck,
  Zap,
  RefreshCw,
  Lock,
  Star,
  HardDrive,
  Clock,
  MonitorSmartphone,
  CalendarClock,
  KeyRound,
} from "lucide-react";
import type { Product } from "../data/products";
import { StatusBadge } from "./Products";

function makeKey() {
  const seg = () =>
    Math.random().toString(36).slice(2, 6).toUpperCase().padEnd(4, "X");
  return `LMW-${seg()}-${seg()}-${seg()}`;
}

interface Props {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: Props) {
  const [license, setLicense] = useState("");
  const [phase, setPhase] = useState<"idle" | "downloading" | "done">("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (product) {
      setLicense(makeKey());
      setPhase("idle");
      setProgress(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const startDownload = () => {
    if (phase !== "idle") return;
    setPhase("downloading");
    animate(0, 100, {
      duration: 2.6,
      ease: "easeInOut",
      onUpdate: (v) => setProgress(Math.round(v)),
      onComplete: () => setPhase("done"),
    });
  };

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-void/80 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 48, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 32, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-lemon/20 bg-panel shadow-[0_0_120px_rgba(245,225,0,0.15)]"
          >
            {/* Top glow */}
            <div className="pointer-events-none absolute -top-32 left-1/2 size-72 -translate-x-1/2 rounded-full bg-lemon/15 blur-[90px]" />

            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-xl border border-cream/10 bg-void/60 text-smoke backdrop-blur transition-colors hover:border-lemon/40 hover:text-lemon"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="relative p-7 sm:p-10">
              {/* Header */}
              <div className="flex flex-wrap items-start gap-5 pr-10">
                <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-lemon/10 text-lemon sm:size-20">
                  <product.icon className="size-8 sm:size-10" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl sm:text-2xl font-extrabold text-cream">
                      {product.name}
                    </h3>
                    <StatusBadge status={product.status} />
                  </div>
                  <p className="mt-1 text-sm text-smoke">{product.tagline}</p>
                  <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[10px] tracking-wider text-smoke">
                    <span className="flex items-center gap-1.5">
                      <Star className="size-3 fill-lemon text-lemon" />
                      {product.rating} ({product.reviews.toLocaleString()} reviews)
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Download className="size-3" />
                      {product.downloads}
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-sm sm:text-base leading-relaxed text-cream/80">
                {product.description}
              </p>

              {/* Meta grid */}
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { icon: MonitorSmartphone, label: "OS", value: product.os },
                  { icon: HardDrive, label: "Size", value: product.size },
                  { icon: Clock, label: "Version", value: `v${product.version}` },
                  { icon: CalendarClock, label: "Updated", value: product.updated },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-cream/8 bg-void/50 p-3.5"
                  >
                    <m.icon className="size-4 text-lemon" />
                    <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-smoke">
                      {m.label}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold text-cream">{m.value}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
                {product.features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5 text-sm text-cream/80">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-lemon/15 text-lemon">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    {f}
                  </div>
                ))}
              </div>

              {/* Purchase panel */}
              <div className="mt-8 rounded-3xl border border-lemon/20 bg-void/60 p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-5">
                  <div>
                    <div className="flex items-baseline gap-3">
                      {product.price === "free" ? (
                        <span className="font-display text-4xl font-black text-lime">FREE</span>
                      ) : (
                        <>
                          <span className="font-display text-4xl font-black text-lemon">
                            ${product.price}
                          </span>
                          {product.oldPrice && (
                            <span className="text-lg text-smoke line-through">${product.oldPrice}</span>
                          )}
                        </>
                      )}
                    </div>
                    <p className="mt-1 font-mono text-[10px] tracking-wider text-smoke">
                      ONE-TIME PAYMENT — LIFETIME UPDATES
                    </p>
                  </div>

                  {/* Download button */}
                  <button
                    onClick={startDownload}
                    disabled={phase !== "idle"}
                    className={`relative flex items-center gap-2.5 overflow-hidden rounded-2xl px-7 py-4 text-sm font-bold transition-all duration-300 ${
                      phase === "done"
                        ? "bg-ok text-void"
                        : "bg-lemon text-void hover:shadow-[0_0_40px_rgba(245,225,0,0.45)]"
                    }`}
                  >
                    {phase === "idle" && (
                      <>
                        <Download className="size-5" />
                        {product.price === "free" ? "DOWNLOAD FREE" : "BUY & DOWNLOAD"}
                      </>
                    )}
                    {phase === "downloading" && (
                      <>
                        <Loader2 className="size-5 animate-spin" />
                        PREPARING — {progress}%
                      </>
                    )}
                    {phase === "done" && (
                      <>
                        <Check className="size-5" strokeWidth={3} />
                        DOWNLOAD STARTED
                      </>
                    )}
                  </button>
                </div>

                {/* Progress bar */}
                {phase !== "idle" && (
                  <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-cream/10">
                    <div
                      className={`h-full rounded-full transition-all duration-150 ${
                        phase === "done" ? "bg-ok" : "bg-lemon"
                      }`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                {/* License key */}
                <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-lemon/25 bg-lemon/5 px-5 py-4">
                  <KeyRound className="size-4 shrink-0 text-lemon" />
                  <span className="font-mono text-xs tracking-wider text-smoke">
                    YOUR LICENSE KEY
                  </span>
                  <span className="font-mono text-sm font-bold tracking-[0.15em] text-lemon">
                    {license}
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-wider text-smoke">
                  <span className="flex items-center gap-1.5">
                    <Zap className="size-3.5 text-lemon" /> INSTANT DELIVERY
                  </span>
                  <span className="flex items-center gap-1.5">
                    <RefreshCw className="size-3.5 text-lemon" /> LIFETIME UPDATES
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="size-3.5 text-lemon" /> ENCRYPTED CHECKOUT
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5 text-lemon" /> 48H REFUND GUARANTEE
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
