import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SentosaLife - Konsultan Asuransi Jiwa & Proteksi Keluarga Indonesia",
  description:
    "Konsultan asuransi jiwa terpercaya dengan pengalaman 20+ tahun. MDRT Elite Partner. Proteksi jiwa, kesehatan kritis, dana pendidikan, dan perencanaan pensiun untuk keluarga Indonesia.",
  keywords: [
    "asuransi jiwa",
    "proteksi keluarga",
    "MDRT",
    "konsultan asuransi",
    "dana pendidikan",
    "asuransi kesehatan",
  ],
  openGraph: {
    title: "SentosaLife - Konsultan Asuransi Jiwa Terpercaya",
    description:
      "20+ tahun melindungi keluarga Indonesia. Konsultasi gratis sekarang.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
