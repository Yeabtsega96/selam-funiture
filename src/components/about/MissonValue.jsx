import "./MissonValue.css";
import { GoGoal } from "react-icons/go";
import { TfiWorld } from "react-icons/tfi";

const MissonValue = () => {
  return (
    <section
      className="mission-value"
      aria-labelledby="mission-value-title"
    >
      <h2 id="mission-value-title" className="sr-only">
        Our Mission and Vision
      </h2>

      <article className="card mission">
        <GoGoal
          className="icon"
          aria-hidden="true"
        />

        <h3>Our Mission</h3>

        <p>
          To craft premium, thoughtfully designed furniture
          that transforms Ethiopian spaces, delivering
          quality, durability, and beauty that stands the
          test of time.
        </p>
      </article>

      <article className="card vision">
        <TfiWorld
          className="icon"
          aria-hidden="true"
        />

        <h3>Our Vision</h3>

        <p>
          To become Africa's leading furniture brand,
          celebrated for combining local craftsmanship with
          world-class design principles.
        </p>
      </article>
    </section>
  );
};

export default MissonValue;