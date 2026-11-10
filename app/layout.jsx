import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "CaratLuxe — Conscious Lab Grown Diamond Jewellery",
  description:
    "Discover certified lab-grown diamond jewellery. IGI & GIA certified solitaires, rings, earrings, and necklaces handcrafted with precision. Ethically made, brilliantly priced.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefin.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#0d1535]">
        {children}
      </body>
    </html>
  );
}
