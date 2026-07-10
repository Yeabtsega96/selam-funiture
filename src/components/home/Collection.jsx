import "./Collection.css";
import { Link } from "react-router-dom";

import products from "../../data/products";

const categories = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Office",
  "Restaurant",
];

const Collection = () => {
  return (
    <section
      className="collections"
      aria-labelledby="collections-title"
    >
      <p className="collections-subtitle">
        Browse By Space
      </p>

      <h2
        id="collections-title"
        className="collections-title"
      >
        Our Collections
      </h2>

      <p className="collections-description">
        Discover furniture crafted for every space—from cozy
        homes to grand hotel interiors.
      </p>

      <div className="collections-grid">
        {categories.map((category) => {
          const items = products.filter(
            (product) => product.category === category
          );

          if (!items.length) return null;

          const title =
            category === "Restaurant"
              ? "Hotel & Restaurant"
              : category;

          return (
            <article
              className="collection-card"
              key={category}
            >
              <Link
                to={`/products?category=${encodeURIComponent(category)}`}
                aria-label={`View ${title} furniture collection`}
              >
                <div className="collection-image">
                  <img
                    src={items[0].image}
                    alt={`${title} furniture collection`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="collection-content">
                  <h3>{title}</h3>

                  <p>{items.length} Items</p>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Collection;