import { Shield, Award, Cloud, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-rose-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium mb-4">
              <Shield size={14} /> Own your words. Protect your voice.
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              VibeWrite — Private, Independent, and Student‑friendly Blogging
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Break free from platform lock‑in. Choose who sees your posts, keep full data ownership, and stay motivated with real feedback and rewards.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#get-started"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:opacity-95 shadow-lg"
              >
                <Rocket size={18} /> Get Started Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-white"
              >
                <Award size={18} /> See what’s inside
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Shield size={16} className="text-indigo-600"/> Privacy controls</div>
              <div className="flex items-center gap-2"><Cloud size={16} className="text-fuchsia-600"/> Cloud backups</div>
              <div className="flex items-center gap-2"><Award size={16} className="text-rose-600"/> Badges & points</div>
              <div className="flex items-center gap-2"><Rocket size={16} className="text-indigo-600"/> Self‑host friendly</div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-white shadow-xl p-4">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 grid place-items-center">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-wider text-slate-500">Demo Snapshot</p>
                  <h3 className="text-2xl font-semibold text-slate-900 mt-1">Your blog, your rules</h3>
                  <p className="text-slate-600 mt-2 max-w-md">
                    Fine‑grained privacy, independent ads, backups, and themes — designed for creators, classrooms, and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
