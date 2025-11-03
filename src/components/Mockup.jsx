export default function Mockup() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="w-[320px] bg-white text-black rounded-[32px] p-5 shadow-2xl">
          <div className="flex items-center justify-between">
            <p className="font-semibold lowercase">payout</p>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              alt="user"
              className="h-9 w-9 rounded-full object-cover"
            />
          </div>
          <h3 className="mt-5 font-extrabold">it pays to ✨ use payout</h3>
          <div className="mt-4 bg-[#b4e5ff] rounded-2xl p-5">
            <p className="text-sm">Your balance</p>
            <h2 className="mt-2 text-3xl font-extrabold">$3,198.20</h2>
            <button className="mt-3 inline-flex px-3 py-2 rounded-lg bg-black text-white text-sm font-semibold">
              See all payments
            </button>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#b4e5ff] text-black text-center font-semibold p-5">
              ⬆️ Send money
            </div>
            <div className="rounded-2xl bg-[#d4b4ff] text-black text-center font-semibold p-5">
              ⬇️ Request money
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
