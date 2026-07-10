import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import SEO from "../components/common/SEO";
import Rating from "../components/common/Rating";
import Button from "../components/Button";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return (
      <section className="not-found">
        <h2>Product Not Found</h2>
        <Link to="/products">
          <Button>Back to Products</Button>
        </Link>
      </section>
    );
  }

  const relatedProducts = products
    .filter(
      (item) =>
        item.category === product.category &&
        item.id !== product.id
    )
    .slice(0, 4);

  return (
    <>
      <SEO
        title={`${product.name} | Selam Furniture`}
        description={product.description}
        url={`https://selamfurniture.com/products/${product.id}`}
      />

      <section className="product-detail">
        <div className="container">

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="product-grid">

            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="product-info">

              <p className="product-meta">
                <span className="category">{product.category}</span>
                <span>•</span>
                SKU: {product.sku}
              </p>

              <h2>{product.name}</h2>

              <Rating
                rating={product.rating}
                reviews={product.reviews}
              />

              <div className="price-wrapper">
                <h2 className="price">
                  ETB {product.price.toLocaleString()}
                </h2>

                {product.oldPrice && (
                  <span className="old-price">
                    ETB {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <p className="description">
                {product.description}
              </p>

              <div className="specs">

                <div className="spec">
                  <span>Material</span>
                  <p>{product.material}</p>
                </div>

                <div className="spec">
                  <span>Weight</span>
                  <p>{product.weight}</p>
                </div>

                <div className="spec">
                  <span>Dimensions</span>
                  <p>{product.dimensions}</p>
                </div>

                <div className="spec">
                  <span>Warranty</span>
                  <p>{product.warranty}</p>
                </div>

                <div className="spec">
                  <span>Delivery</span>
                  <p>{product.delivery}</p>
                </div>

              </div>

              <div className="color-section">
                <h4>Available Colors</h4>

                <div className="colors">
                  {product.colors?.map((color) => (
                    <span
                      key={color}
                      className="color"
                      style={{
                        backgroundColor: color,
                      }}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="buttons">
                <a href="https://wa.me/251916921711" target="_blank">
                  <Button variant="whatsapp">
                    Order via WhatsApp
                  </Button>
                </a>

                <Link to="/contact">
                  <Button variant="white">
                    Request a Quote
                  </Button>
                </Link>
              </div>

            </div>

          </div>

          {relatedProducts.length > 0 && (
            <section className="related-products">

              <h2>You May Also Like</h2>

              <div className="related-grid">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    to={`/products/${item.id}`}
                    className="related-card"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                    />

                    <h4>{item.name}</h4>

                    <p>
                      ETB {item.price.toLocaleString()}
                    </p>

                  </Link>
                ))}
              </div>

            </section>
          )}

        </div>
      </section>
    </>
  );
};

export default ProductDetail;