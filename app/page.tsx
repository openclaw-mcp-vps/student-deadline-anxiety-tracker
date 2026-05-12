export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For College Students
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Drowning in{" "}
          <span className="text-[#58a6ff]">Deadline Anxiety</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Log your stress levels, track assignments, and uncover patterns in your anxiety — so you can study smarter and breathe easier.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-200"
        >
          Start for $5/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">Cancel anytime. 7-day free trial included.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Daily anxiety logging", "Assignment deadline tracker", "Stress pattern charts", "Coping strategy tips", "Academic advisor sharing"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-1.5 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$5</div>
          <p className="text-[#6e7681] text-sm mb-6">per month · billed monthly</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited anxiety log entries",
              "Assignment deadline calendar",
              "Weekly stress pattern reports",
              "Personalized coping strategies",
              "Export data for advisor review",
              "7-day free trial"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-200"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the anxiety tracker work?",
              a: "Each day you log a quick stress score (1–10) tied to your upcoming assignments. Over time, the app surfaces patterns — like which subjects spike your anxiety most — and suggests evidence-based coping strategies."
            },
            {
              q: "Can I share my data with my academic advisor?",
              a: "Yes. Pro users can export a clean PDF or CSV summary of their stress patterns and assignment history to share with advisors, counselors, or therapists."
            },
            {
              q: "Is my data private and secure?",
              a: "Absolutely. Your logs are stored securely and never sold or shared. You own your data and can delete it at any time from your account settings."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} DeadlineCalm. All rights reserved.
      </footer>
    </main>
  );
}
