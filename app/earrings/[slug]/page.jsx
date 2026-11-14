import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Diamond Earrings | CaratLuxe Studs, Drops & Hoops",
  description: "Explore certified lab-grown diamond earrings in exquisite designs.",
};

export default function EarringsSubcategoryPage() {
  return <ProductsPage initialCategory="Earrings" />;
}

