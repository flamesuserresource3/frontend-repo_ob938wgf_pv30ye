export default function Header() {
  return (
    <header className="w-full sticky top-0 z-40 bg-[#c4ff00] text-black border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/49/Placeholder.svg"
            alt="Payout logo"
            className="h-8 w-8 rounded"
          />
          <h1 className="text-xl font-extrabold tracking-tight lowercase">payout</h1>
        </div>
        <button
          className="inline-flex items-center px-4 py-2 rounded-xl bg-black text-[#c4ff00] font-semibold shadow-sm hover:opacity-90"
        >
          Login
        </button>
      </div>
    </header>
  );
}
