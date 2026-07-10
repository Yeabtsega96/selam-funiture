import { Link } from "react-router-dom";
import Button from "../Button";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-container">
        <p className="hero-subtitle">
          Premium Ethiopian Furniture
        </p>

        <h1
          id="hero-title"
          className="hero-title"
        >
          Crafting Spaces <span>You'll Love.</span>
        </h1>

        <p className="hero-description">
          Handcrafted furniture blending Scandinavian
          minimalism with Ethiopian artistry. From homes to
          hotels, we create timeless pieces designed for
          comfort, beauty, and lasting impressions.
        </p>

        <div
          className="hero-actions"
          aria-label="Primary actions"
        >
          <Link to="/products">
            <Button>
              Shop Collection
            </Button>
          </Link>

          <Link to="/contact">
            <Button variant="secondary">
              Get a Quote
            </Button>
          </Link>
        </div>

        <div
          className="hero-stats"
          aria-label="Company statistics"
        >
          <article className="hero-stat">
            <h2>12+</h2>
            <p>Years of Craftsmanship</p>
          </article>

          <article className="hero-stat">
            <h2>1,200+</h2>
            <p>Happy Customers</p>
          </article>

          <article className="hero-stat">
            <h2>150+</h2>
            <p>Unique Designs</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Hero;