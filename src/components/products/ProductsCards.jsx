import { Link } from "react-router-dom";
import Rating from "../common/Rating";
import "./ProductsCards.css";

const ProductsCards = ({ filteredProducts }) => {
  return (
    <section className="product-cards">
      {filteredProducts.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          className="product-link"
          aria-label={`View ${product.name}`}
        >
          <article className="product-card">

            <div className="img-container">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="product-content">

              <span className="category">
                {product.category}
              </span>

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
        </Link>
      ))}
    </section>
  );
};

export default ProductsCards;