
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata Configuration
export const metadata: Metadata = {
  title: "Bade Prince | Graphiste Miniamaker – Expert en miniatures YouTube",
  description: "Graphiste avec 4 ans d’expérience et spécialiste des miniatures YouTube depuis 2 ans. Création de miniatures professionnelles, visuels publicitaires et social media design.",
  keywords: ["graphiste youtube", "créateur miniature youtube", "miniamaker", "designer youtube", "graphiste freelance", "youtube thumbnail designer", "graphiste bénin"],
  openGraph: {
    title: "Bade Prince – Graphiste Miniamaker",
    description: "Expert en miniatures YouTube – 4 ans d’expérience en graphisme.",
    type: "website",
    url: "https://your-domain.com", // Replace with actual domain on deployment
    images: [
      {
        url: "https://your-domain.com/og-image.jpg", // Replace with an actual OG image URL
        width: 1200,
        height: 630,
        alt: "Bade Prince Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
