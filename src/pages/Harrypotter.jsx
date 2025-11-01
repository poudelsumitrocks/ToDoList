import React, { useRef } from "react";
import { useNavigate } from "react-router";
export default function Harrypotter() {
  const aboutRef = useRef(null);
 const navigate= useNavigate();
  const handleScrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDash=()=>{
    navigate("/harrydash")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-slate-50 text-slate-800 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-sm bg-white/60 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-rose-800 to-yellow-400 shadow-md flex items-center justify-center text-white font-bold">
              HP
            </div>
            <div className="font-semibold text-lg tracking-wide">Harray Potter</div>
          </div>

          <nav className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-sm text-slate-700 hover:text-rose-800"
            >
              Home
            </button>
            <button
              onClick={handleScrollToAbout}
              className="text-sm text-slate-700 hover:text-rose-800"
            >
              About
            </button>
            <button
              onClick={() => {handleDash()}}
              className="px-3 py-2 rounded-md bg-gradient-to-r from-rose-800 to-yellow-400 text-white text-sm font-semibold shadow"
            >
              Begin
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main>
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-white/90 rounded-2xl p-10 shadow-xl ring-1 ring-slate-100">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-rose-900">
                  Enter the World of Harray Potter
                </div>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                  A magical, modern landing page inspired by classic wizarding vibes — parchment tones,
                  candlelit gradients, and charming details. Perfect for storytelling, fan projects, or
                  themed portfolios.
                </p>

                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => alert("Start your journey")}
                    className="px-5 py-3 rounded-lg bg-gradient-to-r from-rose-800 to-yellow-400 text-white font-semibold shadow-lg"
                  >
                    🪄 Begin Adventure
                  </button>
                  <button
                    onClick={handleScrollToAbout}
                    className="px-5 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 hover:shadow"
                  >
                    Learn more
                  </button>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 rounded-lg bg-rose-50 border border-rose-100 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-md bg-rose-100 text-rose-700 flex items-center justify-center font-bold">🏰</div>
                  <div>
                    <div className="font-semibold text-sm text-rose-900">Mystical Locations</div>
                    <div className="text-sm text-slate-600 mt-1">Curated scenes and atmospheric design elements.</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-amber-50 border border-amber-100 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center font-bold">🪄</div>
                  <div>
                    <div className="font-semibold text-sm text-rose-900">Interactive Feel</div>
                    <div className="text-sm text-slate-600 mt-1">Subtle motion and tactile buttons for delight.</div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center font-bold">✨</div>
                  <div>
                    <div className="font-semibold text-sm text-rose-900">Responsive & Accessible</div>
                    <div className="text-sm text-slate-600 mt-1">Looks great on phones, tablets, and desktops.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <section ref={aboutRef} className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-2 bg-white rounded-xl p-6 border shadow-sm">
                  <h2 className="text-2xl font-bold text-rose-900">Built for exploration</h2>
                  <p className="mt-3 text-slate-600">
                    This themed landing template uses Tailwind CSS for rapid customization.
                    Swap colors, icons, and content to match your own magical project.
                    Components are modular so you can split them into smaller parts as needed.
                  </p>

                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-rose-50 border border-rose-100">
                      <div className="font-semibold text-sm text-rose-900">Themeable</div>
                      <div className="text-sm text-slate-600 mt-1">Quickly change palettes to fit other houses or styles.</div>
                    </div>
                    <div className="p-4 rounded-lg bg-amber-50 border border-amber-100">
                      <div className="font-semibold text-sm text-rose-900">Copy & Paste</div>
                      <div className="text-sm text-slate-600 mt-1">Use sections independently or together.</div>
                    </div>
                  </div>
                </div>

                <aside className="bg-gradient-to-b from-rose-800 to-yellow-400 text-white rounded-xl p-5 shadow-lg">
                  <div className="font-bold">Quick Spell</div>
                  <div className="mt-2 text-sm">Launch a themed site in minutes — no heavy setup required.</div>
                  <button
                    onClick={() => alert("Spell cast!")}
                    className="mt-4 w-full py-2 bg-white/10 rounded-md text-sm font-semibold hover:bg-white/20"
                  >
                    Cast Spell
                  </button>
                </aside>
              </div>
            </section>

            {/* Features grid */}
            <section className="mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Customizable", desc: "Change colors, spacing, and icons easily.", icon: "🧭" },
                  { title: "Accessible", desc: "Keyboard-friendly and semantic markup.", icon: "🕯️" },
                  { title: "Responsive", desc: "Beautiful across all screen sizes.", icon: "📱" },
                  { title: "Composable", desc: "Break into components as you grow.", icon: "📦" },
                ].map((f) => (
                  <div key={f.title} className="p-4 bg-white rounded-lg border shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-lg">
                        {f.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-rose-900">{f.title}</div>
                        <div className="text-sm text-slate-600 mt-1">{f.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-slate-600 text-center">
          © {new Date().getFullYear()} Harray Potter • Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
