import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Diamond Shapes | CaratLuxe Fancy & Brilliant Cuts",
  description: "Browse certified lab-grown diamonds cut to perfection across Round, Oval, Emerald, Pear, Princess, Marquise, and Radiant shapes.",
};

export default function ShapeFilterPage() {
  return <ProductsPage initialCategory="All Jewellery" />;
}

