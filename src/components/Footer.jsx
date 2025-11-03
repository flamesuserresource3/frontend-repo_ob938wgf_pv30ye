export default function Footer() {
  return (
    <footer className="bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} Payout Blog. All rights reserved.</p>
          <nav className="flex items-center gap-5 text-sm">
            <a href="#privacy" className="text-gray-300 hover:text-white">Privacy</a>
            <a href="#terms" className="text-gray-300 hover:text-white">Terms</a>
            <a href="#rss" className="text-gray-300 hover:text-white">RSS</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
