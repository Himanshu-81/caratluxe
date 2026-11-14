import ProductsPage from "@/app/products/page";

export const metadata = {
  title: "Shop by Occasion | CaratLuxe Celebrations & Milestones",
  description: "Curated fine diamond jewellery for engagements, weddings, anniversaries, birthdays, and everyday self-love.",
};

export default function OccasionFilterPage() {
  return <ProductsPage initialCategory="All Jewellery" />;
}

