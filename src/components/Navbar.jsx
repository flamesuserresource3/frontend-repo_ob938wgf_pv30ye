import { Rocket, Shield, Server, Puzzle } from "lucide-react";

function NavLink({ children, href = "#" }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-fuchsia-600 to-rose-500 grid place-items-center text-white shadow-lg">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">VibeWrite</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#roles">Roles</NavLink>
          <NavLink href="#security">Security</NavLink>
          <NavLink href="#ownership">Ownership</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50"
          >
            <Shield size={16} />
            Sign in
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:opacity-95 shadow-md"
          >
            <Server size={16} />
            Launch Studio
          </a>
        </div>
      </div>
    </header>
  );
}
