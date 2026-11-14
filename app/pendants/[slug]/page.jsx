import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Diamond Pendants | CaratLuxe Everyday & Statement Pendants",
  description: "Explore sparkling lab-grown diamond pendants set in recycled 18K gold.",
};

export default function PendantsSubcategoryPage() {
  return <ProductsPage initialCategory="Pendants" />;
}

