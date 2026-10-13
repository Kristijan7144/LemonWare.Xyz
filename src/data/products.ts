import {
  Fingerprint,
  Crosshair,
  Eye,
  Ghost,
  Zap,
  Skull,
  Target,
  Search,
  type LucideIcon,
} from "lucide-react";

export type ProductStatus = "undetected" | "updating";
export type ProductCategory = "spoofer" | "cheat" | "tool";

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  price: number | "free";
  oldPrice?: number;
  status: ProductStatus;
  rating: number;
  reviews: number;
  downloads: string;
  version: string;
  size: string;
  updated: string;
  os: string;
  icon: LucideIcon;
  features: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "hwid-spoofer",
    name: "Permanent HWID Spoofer",
    tagline: "Full firmware-level HWID rewrite",
    description:
      "The most complete spoofer on the market. Permanently randomizes every hardware identifier — disk, SMBIOS, MAC, GPU, USB and TPM 2.0 — and persists through reboots and Windows reinstalls. Get back onto a clean slate in minutes, forever.",
    category: "spoofer",
    price: 29.99,
    oldPrice: 49.99,
    status: "undetected",
    rating: 4.9,
    reviews: 2841,
    downloads: "48.2K",
    version: "4.2.1",
    size: "8.4 MB",
    updated: "2 days ago",
    os: "Windows 10 / 11",
    icon: Fingerprint,
    features: [
      "Permanent — survives reboot & reinstall",
      "Disk, SMBIOS, MAC, GPU, USB & TPM 2.0",
      "Intel and AMD fully supported",
      "EAC & BattlEye ready",
      "One-click restore point",
      "Auto-updates for life",
    ],
    featured: true,
  },
  {
    id: "apex-private",
    name: "Apex Legends Private",
    tagline: "Full-featured external suite",
    description:
      "Smooth aimbot with humanized curves, player ESP, loot filters and radar — wrapped in a stream-proof external build with configurable legit and rage presets.",
    category: "cheat",
    price: 34.99,
    status: "undetected",
    rating: 4.8,
    reviews: 1902,
    downloads: "21.7K",
    version: "2.8.0",
    size: "6.1 MB",
    updated: "5 days ago",
    os: "Windows 10 / 11",
    icon: Crosshair,
    features: [
      "Humanized aimbot",
      "Player & loot ESP",
      "Stream-proof (OBS safe)",
      "Radar & proximity warnings",
      "Legit / rage presets",
      "Auto-updates for life",
    ],
  },
  {
    id: "fortnite-ultra",
    name: "Fortnite Ultra",
    tagline: "Aim + full ESP suite",
    description:
      "Aimbot, wallhack ESP, chest and item ESP and more — packed into a lightweight external that keeps your FPS untouched and your gameplay looking natural.",
    category: "cheat",
    price: 29.99,
    status: "undetected",
    rating: 4.7,
    reviews: 1620,
    downloads: "19.3K",
    version: "3.1.4",
    size: "7.2 MB",
    updated: "1 week ago",
    os: "Windows 10 / 11",
    icon: Eye,
    features: [
      "Aimbot + smoothing",
      "Player / chest / item ESP",
      "Zero FPS loss external",
      "Instant build assist",
      "HWID-safe loader",
      "Auto-updates for life",
    ],
  },
  {
    id: "valorant-external",
    name: "Valorant External",
    tagline: "Lightweight Vanguard bypass",
    description:
      "A carefully crafted external built around Vanguard. Pixel-perfect aim assist and clean ESP with a minimal footprint — every session ships with a freshly randomized build.",
    category: "cheat",
    price: 39.99,
    status: "updating",
    rating: 4.8,
    reviews: 987,
    downloads: "12.4K",
    version: "1.9.2",
    size: "5.8 MB",
    updated: "Patching — back soon",
    os: "Windows 10 / 11",
    icon: Ghost,
    features: [
      "Vanguard-safe external",
      "Aim assist + triggerbot",
      "Clean player ESP",
      "Randomized per-session build",
      "Low CPU usage",
      "Auto-updates for life",
    ],
  },
  {
    id: "warzone-unlock",
    name: "Warzone Unlock All",
    tagline: "Every weapon, camo & blueprint",
    description:
      "Unlock the entire arsenal — weapons, camos, blueprints, attachments and calling cards — with one click. Completely safe: zero ban reports since release.",
    category: "cheat",
    price: 19.99,
    status: "undetected",
    rating: 4.6,
    reviews: 1344,
    downloads: "17.1K",
    version: "5.0.3",
    size: "4.9 MB",
    updated: "3 days ago",
    os: "Windows 10 / 11",
    icon: Zap,
    features: [
      "All weapons & camos",
      "Blueprints & charms",
      "One-click unlock",
      "Battle Pass XP boost",
      "Zero ban reports",
      "Auto-updates for life",
    ],
  },
  {
    id: "rust-private",
    name: "Rust Private Build",
    tagline: "The most advanced Rust cheat",
    description:
      "Silent aim, full player ESP, recoil control, spider mode and more — compiled fresh for every user so your build's signature stays unique.",
    category: "cheat",
    price: 44.99,
    status: "undetected",
    rating: 4.9,
    reviews: 1198,
    downloads: "9.8K",
    version: "6.4.0",
    size: "9.7 MB",
    updated: "4 days ago",
    os: "Windows 10 / 11",
    icon: Skull,
    features: [
      "Silent aim",
      "Recoil control",
      "Player / loot / node ESP",
      "Spider & debug camera",
      "Per-user unique build",
      "Auto-updates for life",
    ],
  },
  {
    id: "cs2-legit",
    name: "CS2 Legit Cheat",
    tagline: "Tournament-grade legit config",
    description:
      "Aim assist that looks completely natural, wallhack ESP, skin changer and legit configs trusted by FACEIT-level players. Nothing flashy — just pure advantage.",
    category: "cheat",
    price: 14.99,
    status: "undetected",
    rating: 4.7,
    reviews: 856,
    downloads: "14.6K",
    version: "2.3.1",
    size: "3.6 MB",
    updated: "6 days ago",
    os: "Windows 10 / 11",
    icon: Target,
    features: [
      "Natural aim assist",
      "Wallhack ESP",
      "Skin & knife changer",
      "FACEIT-safe configs",
      "Stream-proof overlay",
      "Auto-updates for life",
    ],
  },
  {
    id: "hwid-checker",
    name: "HWID Checker",
    tagline: "Scan your hardware serials",
    description:
      "Free tool that scans and displays every HWID serial anti-cheats can read — disk, SMBIOS, MAC, GPU and TPM — so you can verify your spoof is clean before jumping in-game.",
    category: "tool",
    price: "free",
    status: "undetected",
    rating: 4.8,
    reviews: 2210,
    downloads: "36.9K",
    version: "1.6.0",
    size: "1.2 MB",
    updated: "1 week ago",
    os: "Windows 7 – 11",
    icon: Search,
    features: [
      "Full serial scan",
      "Ban-risk snapshot",
      "Before / after compare",
      "Portable .exe — no install",
      "Completely free, forever",
      "Auto-updates for life",
    ],
  },
];
