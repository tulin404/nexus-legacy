import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// Configuração da Playfair Display (Serif)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Configuração da Plus Jakarta Sans (Sans-serif)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jakarta",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Nexus Legacy Atelier",
  description:
    "Preservação do patrimônio corporativo, restauração de memórias institucionais e curadoria de arte memorial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`dark ${playfair.variable} ${plusJakarta.variable}`}>
            <body>{children}</body>
        </html>
    );
};
