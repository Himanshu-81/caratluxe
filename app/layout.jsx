import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/ui/WhatsAppButton";

const josefin = Josefin_Sans({
  variable: "--font-josefin",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "CaratLuxe — Conscious Lab Grown Diamond Jewellery",
  description:
    "Discover certified lab-grown diamond jewellery. IGI & SGL certified solitaires, rings, earrings, and necklaces handcrafted with precision. Ethically made, brilliantly priced.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${josefin.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#0d1535]">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
