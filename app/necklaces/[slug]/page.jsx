import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Diamond Necklaces | CaratLuxe Haute Joaillerie",
  description: "Explore certified lab-grown diamond necklaces and tennis chokers.",
};

export default function NecklacesSubcategoryPage() {
  return <ProductsPage initialCategory="Necklaces" />;
}

