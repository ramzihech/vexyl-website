import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const tajawal = Tajawal({ subsets: ["arabic"], variable: "--font-tajawal", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Vexyl — Modern Websites for Qatar Businesses",
  description: "We build fast, beautiful websites for businesses in Doha, Qatar. See your free demo before you pay. Starting at $149.",
  keywords: "web design qatar, doha websites, business website, web development, qatar digital",
  openGraph: {
    title: "Vexyl — Modern Websites for Qatar",
    description: "See your free demo website before you pay. Starting at $149.",
    url: "https://vexyl.qa",
    siteName: "Vexyl",
    locale: "en_QA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vexyl — Modern Websites for Qatar",
    description: "See your free demo website before you pay. Starting at $149.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${tajawal.variable}`}>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
