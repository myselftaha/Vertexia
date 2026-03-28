import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat, Mulish, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mulish"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat"
});


export const metadata: Metadata = {
  title: "Vertexia",
  description: "We create and launch websites for growing businesses."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${mulish.variable} ${montserrat.variable} min-h-screen overflow-x-hidden bg-[#050512] font-body text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

