import ProductsPage from "../../products/page";

const collectionMap = {
  eternal: "Rings",
  celestial: "Earrings",
  aurora: "Rings",
  "royal-tennis": "Bracelets & Bangles",
  "modern-heritage": "Mangalsutra",
};

export function generateStaticParams() {
  return [
    { id: "eternal" },
    { id: "celestial" },
    { id: "aurora" },
    { id: "royal-tennis" },
    { id: "modern-heritage" },
  ];
}

export default async function CollectionDetailPage({ params }) {
  const resolved = await params;
  const colId = resolved?.id || "eternal";
  const mappedCategory = collectionMap[colId] || "All Jewellery";

  return <ProductsPage initialCategory={mappedCategory} />;
}

