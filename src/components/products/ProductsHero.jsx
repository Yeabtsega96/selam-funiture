import "./ProductsHero.css";

import { MdOutlineNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductsHero = () => {
  return (
    <section className="products-hero">

      <nav
        className="breadcrumb"
        aria-label="Breadcrumb"
      >
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li className="breadcrumb-separator">
            <MdOutlineNavigateNext />
          </li>

          <li
            className="active"
            aria-current="page"
          >
            Products
          </li>
        </ul>
      </nav>


      <div className="products-hero-content">

        <h1>
          Our Collection
        </h1>

        <p>
          Discover handcrafted furniture pieces for every space
        </p>

      </div>

    </section>
  );
};

export default ProductsHero;