import { Citrus, MessageCircle, Send, Play, ArrowUp } from "lucide-react";

const columns = [
  {
    title: "Products",
    links: ["HWID Spoofer", "Game Cheats", "Free Tools", "Status Page"],
  },
  {
    title: "Company",
    links: ["Reviews", "FAQ", "Support", "Affiliates"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Refund Policy", "Disclaimer"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-lemon/10 bg-panel/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-xl bg-lemon text-void">
                <Citrus className="size-5" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-extrabold tracking-tight text-cream">
                LEMONWARE<span className="text-lemon">.XYZ</span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-smoke">
              Premium game software since 2021. Permanent HWID spoofers, private
              cheats and tools — instantly delivered and always undetected.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: MessageCircle, label: "Discord" },
                { icon: Send, label: "Telegram" },
                { icon: Play, label: "YouTube" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#top"
                  aria-label={s.label}
                  className="grid size-11 place-items-center rounded-xl border border-cream/10 text-smoke transition-all duration-300 hover:border-lemon hover:bg-lemon hover:text-void"
                >
                  <s.icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.3em] text-lemon">
                  {col.title}
                </h4>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-smoke transition-colors hover:text-lemon"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/8 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] tracking-wider text-smoke">
            © 2025 LEMONWARE.XYZ — ALL RIGHTS RESERVED. SQUEEZED FRESH DAILY.
          </p>
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-smoke transition-colors hover:text-lemon"
          >
            BACK TO TOP
            <span className="grid size-8 place-items-center rounded-full border border-cream/15 transition-all duration-300 group-hover:border-lemon group-hover:bg-lemon group-hover:text-void">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>

        <p className="mt-6 text-[11px] leading-relaxed text-smoke/60">
          LemonWare.Xyz is not affiliated with, endorsed by, or connected to any
          game publisher or anti-cheat provider. All trademarks and game names
          belong to their respective owners. Software is provided for educational
          and novelty purposes only.
        </p>
      </div>
    </footer>
  );
}
