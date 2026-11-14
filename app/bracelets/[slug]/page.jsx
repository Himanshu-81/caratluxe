import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Diamond Bracelets & Bangles | CaratLuxe",
  description: "Explore lab-grown diamond tennis bracelets and cuffs.",
};

export default function BraceletsSubcategoryPage() {
  return <ProductsPage initialCategory="Bracelets & Bangles" />;
}

