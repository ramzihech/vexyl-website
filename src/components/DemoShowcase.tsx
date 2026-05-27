"use client";

import { useState } from "react";

const categories = [
  "All",
  "Restaurant",
  "Cafe",
  "Fitness",
  "Beauty",
  "Supermarket",
  "Pharmacy",
  "Electronics",
  "Car Repair",
  "Tailor",
  "Fast Food",
];

const demos = [
  { name: "Al Safa Restaurant", type: "Restaurant", img: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Café Latte Lounge", type: "Cafe", img: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "FitLife Gym", type: "Fitness", img: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Glamour Beauty Spa", type: "Beauty", img: "https://images.pexels.com/photos/3757955/pexels-photo-3757955.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Al Meera Market", type: "Supermarket", img: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "HealthFirst Pharmacy", type: "Pharmacy", img: "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "TechZone Electronics", type: "Electronics", img: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Quick Fix Auto", type: "Car Repair", img: "https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export default function DemoShowcase() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? demos : demos.filter((d) => d.type === active);

  return (
    <section id="demos" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-purple-400">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3">See what we build</h2>
          <p className="text-gray-500 mt-3">Real demo websites made for Doha businesses</p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === cat
                  ? "btn-primary text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Demo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((demo) => (
            <div key={demo.name} className="card rounded-2xl overflow-hidden group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={demo.img}
                  alt={demo.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-semibold">View Demo →</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm">{demo.name}</h3>
                <span className="text-xs text-gray-500">{demo.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/97455635260?text=Hi%20Vexyl!%20I%20want%20to%20see%20a%20demo%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block px-8 py-3.5 rounded-full text-white font-semibold text-sm"
          >
            Request a Demo for Your Business →
          </a>
        </div>
      </div>
    </section>
  );
}
