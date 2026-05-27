const plans = [
  {
    name: "Starter",
    price: "$149",
    desc: "Perfect for small businesses just getting online",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "WhatsApp integration",
      "Google Maps embed",
      "Contact form",
      "1 round of revisions",
    ],
    paypal: "https://www.paypal.com/ncp/payment/HFBJN693GRVBE",
    popular: false,
  },
  {
    name: "Business",
    price: "$399",
    desc: "For businesses ready to stand out",
    features: [
      "10-page responsive website",
      "Premium custom design",
      "Image gallery",
      "Testimonials section",
      "Bilingual ready (AR/EN)",
      "Social media integration",
      "3 rounds of revisions",
      "SEO optimization",
    ],
    paypal: "https://www.paypal.com/ncp/payment/D2KM87EBQDV4W",
    popular: true,
  },
  {
    name: "Premium",
    price: "$799",
    desc: "Full digital presence, everything included",
    features: [
      "Unlimited pages",
      "Premium custom design",
      "Online booking system",
      "Photo gallery + video",
      "Bilingual (AR + EN)",
      "Google Business setup",
      "Social media package",
      "Unlimited revisions",
      "Priority 12hr delivery",
    ],
    paypal: "https://www.paypal.com/ncp/payment/F46L84QBBRPFE",
    popular: false,
  },
];

const addons = [
  { name: "Monthly Hosting & Maintenance", price: "$27/mo" },
  { name: "Content Update", price: "$27" },
  { name: "Logo Design", price: "$55" },
  { name: "Bilingual Site (AR + EN)", price: "+$137" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-500 mt-3">No hidden fees. Pay once, it&apos;s yours forever.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card rounded-2xl p-8 flex flex-col ${plan.popular ? "pricing-popular" : ""}`}
            >
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{plan.desc}</p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={plan.paypal}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3.5 rounded-full font-semibold text-sm transition-all ${
                  plan.popular
                    ? "btn-primary text-white"
                    : "border border-white/10 hover:border-purple-500/50 text-white"
                }`}
              >
                Get {plan.name}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-16 card rounded-2xl p-8">
          <h3 className="text-lg font-bold mb-4">Add-ons</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-3">
                <span className="text-sm text-gray-300">{a.name}</span>
                <span className="text-sm font-bold gradient-text">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
