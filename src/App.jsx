import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Roles from "./components/Roles";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Roles />
        <section id="ownership" className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Own your platform</h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              VibeWrite is designed to be self‑host friendly, with backups and easy export/import, so you never lose your work and never depend on a single company.
            </p>
            <div className="mt-6 inline-flex gap-3">
              <a href="#" className="px-5 py-3 rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 shadow">Create your space</a>
              <a href="#" className="px-5 py-3 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">Explore themes</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} VibeWrite — Write with privacy, own your future.</p>
          <div className="flex items-center gap-5 text-sm">
            <a href="#" className="text-slate-600 hover:text-slate-900">Privacy</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Terms</a>
            <a href="#" className="text-slate-600 hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
