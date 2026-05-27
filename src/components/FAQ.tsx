"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How does the free demo work?",
    a: "Just WhatsApp us your business name and type. We build a custom website demo within 24 hours and send you the link. You can review it, request changes, and only pay when you're happy with it.",
  },
  {
    q: "What if I don't like the demo?",
    a: "No problem at all. The demo is completely free with zero obligation. If it's not what you envisioned, we can revise it or you can simply walk away — no hard feelings.",
  },
  {
    q: "How fast can my website go live?",
    a: "Starter and Business plans go live within 24 hours of payment. Premium plans get priority 12-hour delivery. The demo itself is always ready within 24 hours.",
  },
  {
    q: "Do you support Arabic?",
    a: "Yes! We offer full bilingual Arabic + English websites as an add-on. The site automatically detects the user's language and displays accordingly. Both languages are professionally translated.",
  },
  {
    q: "What's included in hosting?",
    a: "Our $27/month hosting includes SSL certificate, daily backups, uptime monitoring, security updates, and minor text changes. Your site stays fast and secure without you lifting a finger.",
  },
  {
    q: "Can I use my own domain?",
    a: "Absolutely. We'll connect any domain you own (like yourbusiness.qa). Don't have one? We'll help you register one — .qa domains cost about $50/year.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept PayPal (all major credit/debit cards). You'll receive a secure payment link. No cash, no bank transfers, no hassle.",
  },
  {
    q: "Do you offer refunds?",
    a: "Since you see the full demo before paying, refunds are rare. But if there's a technical issue we can't resolve within 7 days of delivery, we'll refund you in full.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">Common questions</h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="card rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-semibold text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-purple-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
