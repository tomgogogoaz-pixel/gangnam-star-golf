import type { Metadata, Viewport } from "next";
import { Gothic_A1, Montserrat } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const ko = Gothic_A1({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-ko",
  display: "swap",
});

const en = Montserrat({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-en",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | 역삼 골프 · 피트니스`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    images: ["/logo.png"],
    locale: "ko_KR",
    type: "website",
  },
  icons: { icon: "/logo.png" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121110",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${ko.variable} ${en.variable}`}>
      <body>{children}</body>
    </html>
  );
}
