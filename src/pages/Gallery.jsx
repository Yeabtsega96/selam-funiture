import { useMemo, useState, useEffect } from "react";
import { RiLoader2Fill } from "react-icons/ri";

import SEO from "../components/common/SEO";
import GalleryCards from "../components/gallery/GalleryCards";
import GalleryHero from "../components/gallery/GalleryHero";
import CategoryBtns from "../components/products/CategoryBtns";
import Button from "../components/Button";

import products from "../data/products";

import "./GalleryPage.css";

const Gallery = () => {
  const [category, setCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(9);

  const filteredGallery = useMemo(() => {
    if (category === "all") return products;

    return products.filter(
      (product) =>
        product.category.toLowerCase() ===
        category.toLowerCase()
    );
  }, [category]);

  useEffect(() => {
    setVisibleCount(9);
  }, [category]);

  return (
    <>
      <SEO
        title="Furniture Gallery | Selam Furniture"
        description="Explore our gallery of beautifully crafted furniture for homes, offices, hotels, and restaurants across Ethiopia."
        url="https://selamfurniture.com/gallery"
      />

      <main className="gallery-page">

        <GalleryHero />

        <section 
          className="gallery-section"
          aria-labelledby="gallery-content-title"
        >

          <CategoryBtns
            category={category}
            setCategory={setCategory}
            className={'category-btns'}
          />

          <GalleryCards
            filteredGallery={filteredGallery.slice(0, visibleCount)}
          />

          {visibleCount < filteredGallery.length && (
            <Button
              variant="white"
              onClick={() =>
                setVisibleCount((prev) => prev + 6)
              }
              aria-label="Load more gallery items"
            >
              <RiLoader2Fill
                className="icon"
                aria-hidden="true"
              />

              Load More Projects
            </Button>
          )}

        </section>

      </main>
    </>
  );
};

export default Gallery;