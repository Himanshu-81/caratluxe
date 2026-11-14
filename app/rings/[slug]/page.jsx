import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Diamond Rings | CaratLuxe Solitaires & Fine Bands",
  description: "Explore certified lab-grown diamond rings handcrafted in 18K yellow, rose, and white gold.",
};

export default function RingsSubcategoryPage() {
  return <ProductsPage initialCategory="Rings" />;
}

