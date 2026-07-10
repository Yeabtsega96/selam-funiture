import "./FeaturedProducts.css";

import products from "../../data/products";
import Rating from "../common/Rating";

const FeaturedProducts = () => {
  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section
      className="featured-products"
      aria-labelledby="featured-products-title"
    >
      <p className="hero-span">
        Handpicked For You
      </p>

      <h2 id="featured-products-title">
        Featured Products
      </h2>

      <div className="featured-product-cards">
        {featuredProducts.map((product) => (
          <article
            className="product-card"
            key={product.id}
          >
            <div className="img-container">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="product-content">
              <p className="category">
                {product.category}
              </p>

              <h3 className="name">
                {product.name}
              </h3>

              <Rating
                rating={product.rating}
                reviews={product.reviews}
              />

              <ul className="price-list">
                <li className="price">
                  ETB {product.price.toLocaleString()}
                </li>

                {product.oldPrice && (
                  <li className="old-price">
                    ETB {product.oldPrice.toLocaleString()}
                  </li>
                )}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;