export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <div className="flex justify-center gap-4 mb-4">
          <div className="text-2xl bg-[#c4ff00] text-black px-3 py-2 rounded-xl">🏠</div>
          <div className="text-2xl bg-[#c4ff00] text-black px-3 py-2 rounded-xl">⚙️</div>
          <div className="text-2xl bg-[#c4ff00] text-black px-3 py-2 rounded-xl">👤</div>
        </div>
        <p className="text-sm text-gray-300">© {new Date().getFullYear()} Payout Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
