"use client";
import { use } from "react";
import ProductsPage from "../../products/page";

const collectionMap = {
  eternal: "Rings",
  celestial: "Earrings",
  aurora: "Rings",
  "royal-tennis": "Bracelets & Bangles",
  "modern-heritage": "Mangalsutra",
};

export default function CollectionDetailPage({ params }) {
  const resolved = params && typeof params.then === "function" ? use(params) : (params || { id: "eternal" });
  const colId = resolved.id || "eternal";
  const mappedCategory = collectionMap[colId] || "All Jewellery";

  return <ProductsPage initialCategory={mappedCategory} />;
}

