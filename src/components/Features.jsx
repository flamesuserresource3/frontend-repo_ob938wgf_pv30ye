import { Shield, Lock, MessageCircle, Award, Server, Cloud, Download, Puzzle, Palette, Database, Share2, Heart } from "lucide-react";

const features = [
  {
    title: "Privacy controls",
    desc: "Set posts to public, friends‑only, private, or password‑protected.",
    icon: Shield,
    badge: "Security",
  },
  {
    title: "Secure access",
    desc: "HTTPS by default and optional two‑factor authentication.",
    icon: Lock,
    badge: "Security",
  },
  {
    title: "Real engagement",
    desc: "Likes, comments, and shares to motivate student writers.",
    icon: MessageCircle,
    badge: "Motivation",
  },
  {
    title: "Gamification",
    desc: "Earn badges and points for publishing and positive feedback.",
    icon: Award,
    badge: "Motivation",
  },
  {
    title: "Independent ads",
    desc: "You choose providers or manage your own ad space — full control.",
    icon: Server,
    badge: "Ownership",
  },
  {
    title: "Auto backups",
    desc: "Automatic cloud backups with one‑click export anytime.",
    icon: Cloud,
    badge: "Resilience",
  },
  {
    title: "One‑click download",
    desc: "Export posts, comments, and media in portable formats.",
    icon: Download,
    badge: "Resilience",
  },
  {
    title: "Plugin ecosystem",
    desc: "Open platform for third‑party extensions and integrations.",
    icon: Puzzle,
    badge: "Extensibility",
  },
  {
    title: "Theme studio",
    desc: "Drag‑and‑drop layouts, colors, and typography controls.",
    icon: Palette,
    badge: "Design",
  },
  {
    title: "Portable data",
    desc: "Self‑host or migrate freely — your data, your destiny.",
    icon: Database,
    badge: "Ownership",
  },
  {
    title: "Share everywhere",
    desc: "Built‑in sharing to social platforms.",
    icon: Share2,
    badge: "Reach",
  },
  {
    title: "Show love",
    desc: "Simple, friendly reactions to celebrate writers.",
    icon: Heart,
    badge: "Community",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Everything you need to write freely and safely
          </h2>
          <p className="mt-3 text-slate-600">
            VibeWrite solves privacy, motivation, ownership, and design limitations in one cohesive platform.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg grid place-items-center bg-gradient-to-br from-indigo-600/10 to-fuchsia-600/10 text-indigo-700">
                  <f.icon size={20} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-indigo-600">{f.badge}</div>
                  <h3 className="mt-1 font-semibold text-slate-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
