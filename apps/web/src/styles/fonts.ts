import { Geist, Geist_Mono, Inter } from "next/font/google";
import localFont from "next/font/local";

export const poppins = localFont({
  src: "./Poppins-Medium.woff2",
  variable: "--font-poppins",
});

export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
