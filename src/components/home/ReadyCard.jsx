import "./ReadyCard.css";

import { Link } from "react-router-dom";
import Button from "../Button";

const ReadyCard = () => {
  return (
    <section
      className="ready-card"
      aria-labelledby="ready-card-title"
    >
      <p className="ready-subtitle">
        Ready to Transform Your Space?
      </p>

      <h2 id="ready-card-title">
        Let's Build Something Beautiful Together
      </h2>

      <p className="ready-description">
        Get a free consultation and custom quote for your
        home, office, or commercial project.
      </p>

      <div className="btns">
        <Link
          to="/contact"
          aria-label="Request a free furniture quote"
        >
          <Button>Get Free Quote</Button>
        </Link>

        <Link
          to="/products"
          aria-label="Browse our furniture products"
        >
          <Button variant="secondary">
            Browse Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ReadyCard;