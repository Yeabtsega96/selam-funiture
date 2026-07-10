import { Link } from "react-router-dom";
import Masonry from "react-masonry-css";

import "./GalleryCards.css";

const breakpoints = {
  default: 3,
  992: 2,
  576: 1,
};

const GalleryCards = ({ filteredGallery }) => {
  return (
    <section
      className="gallery-cards-wrapper"
      aria-label="Furniture Gallery"
    >
      <Masonry
        breakpointCols={breakpoints}
        className="gallery-cards"
        columnClassName="gallery-column"
      >
        {filteredGallery.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="gallery-link"
            aria-label={`View ${product.name}`}
          >
            <article className="gallery-card">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
              />

              <div className="infos">
                <span>{product.category}</span>

                <h3>{product.name}</h3>

                <p>{product.material}</p>
              </div>
            </article>
          </Link>
        ))}
      </Masonry>
    </section>
  );
};

export default GalleryCards;