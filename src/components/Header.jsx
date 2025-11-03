import { Menu, Search, PenSquare } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#c4ff00] text-black border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button aria-label="Menu" className="p-2 rounded-lg hover:bg-black/5">
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/49/Placeholder.svg"
              alt="Payout Blog logo"
              className="h-8 w-8 rounded"
            />
            <span className="text-xl font-extrabold tracking-tight lowercase">payout blog</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          <a href="#featured" className="hover:opacity-80">Featured</a>
          <a href="#latest" className="hover:opacity-80">Latest</a>
          <a href="#categories" className="hover:opacity-80">Categories</a>
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="p-2 rounded-lg hover:bg-black/5">
            <Search className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-[#c4ff00] font-semibold shadow-sm hover:opacity-90">
            <PenSquare className="h-4 w-4" />
            Write
          </button>
        </div>
      </div>
    </header>
  );
}
