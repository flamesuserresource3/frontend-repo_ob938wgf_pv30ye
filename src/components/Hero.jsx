import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative bg-[#121212] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight text-[#c4ff00]">
            Send money effortlessly ✨
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Fast, secure, and fun to use — it pays to use Payout.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="px-5 py-3 rounded-xl bg-[#c4ff00] text-black font-bold shadow hover:opacity-95">
              Get Started
            </button>
            <button className="px-5 py-3 rounded-xl border border-white/20 text-white hover:bg-white/5">
              See how it works
            </button>
          </div>
        </div>
        <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] w-full">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
