import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SEO from "../components/common/SEO";
import ProductsHero from "../components/products/ProductsHero";
import ProductFilter from "../components/products/ProductFilter";
import CategoryBtns from "../components/products/CategoryBtns";
import FilterSidebar from "../components/products/FilterSidebar";
import ProductsCards from "../components/products/ProductsCards";

import products from "../data/products";

import "./Products.css";

const Products = () => {
  const [searchParams] = useSearchParams();

  // Get initial category from URL
  const initialCategory = searchParams.get("category") || "all";

  // Calculate only once
  const { minPrice, maxPrice } = useMemo(() => {
    return {
      minPrice: Math.min(...products.map((product) => product.price)),
      maxPrice: Math.max(...products.map((product) => product.price)),
    };
  }, []);

  const [category, setCategory] = useState(initialCategory);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");
  const [price, setPrice] = useState(maxPrice);

  // Keep category synced with URL
  useEffect(() => {
    const urlCategory = searchParams.get("category") || "all";
    setCategory(urlCategory);
  }, [searchParams]);

  // Filter & sort products
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search.trim()) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase().trim())
      );
    }

    // Category
    if (category !== "all") {
      result = result.filter(
        (product) =>
          product.category.toLowerCase().trim() ===
          category.toLowerCase().trim()
      );
    }

    // Price
    result = result.filter((product) => product.price <= price);

    // Sort
    switch (sort) {
      case "low-high":
        result.sort((a, b) => a.price - b.price);
        break;

      case "high-low":
        result.sort((a, b) => b.price - a.price);
        break;

      case "best-rated":
        result.sort((a, b) => b.rating - a.rating);
        break;

      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured));
    }

    return result;
  }, [search, category, price, sort]);

  return (
    <>
      <SEO
        title="Furniture Collection | Selam Furniture"
        description="Browse our collection of premium living room, bedroom, dining room, office, and hotel furniture in Ethiopia."
        url="https://selamfurniture.com/products"
      />

      <main className="products-page">
        <ProductsHero />

        <ProductFilter
          search={search}
          setSearch={setSearch}
          sort={sort}
          setSort={setSort}
          filteredProducts={filteredProducts}
        />

        <CategoryBtns
          category={category}
          setCategory={setCategory}
        />

        <section className="products-section">
          <FilterSidebar
            products={products}
            minPrice={minPrice}
            maxPrice={maxPrice}
            price={price}
            setPrice={setPrice}
          />

          <ProductsCards
            filteredProducts={filteredProducts}
          />
        </section>
      </main>
    </>
  );
};

export default Products;