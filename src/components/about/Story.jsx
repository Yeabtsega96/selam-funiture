import "./Story.css";

import bedroom from "../../assets/images/bedroom-fullpacage.jpg";
import sofa from "../../assets/images/livingroom-sofa-00.jpg";

const Story = () => {
  return (
    <section
      className="story-section"
      aria-labelledby="story-title"
    >
      <article className="story">
        <p className="story-subtitle">
          Since 2012
        </p>

        <h2 id="story-title">
          Ethiopian Artistry, Global Standards
        </h2>

        <p>
          Selam Furniture was born from a simple belief:
          Ethiopia deserves world-class furniture made right
          here at home. Founded in 2012 by master craftsman
          Dawit Mengistu, we started as a three-person
          workshop in Addis Ababa with a single lathe and a
          big dream.
        </p>

        <p>
          Today, we're a team of 85 skilled artisans
          producing over 2,000 pieces annually for
          homeowners, hotels, restaurants, and corporate
          offices across Ethiopia. Every piece we make
          carries the warmth of Ethiopian craftsmanship and
          the precision of modern design.
        </p>

        <p>
          We source our materials responsibly by partnering
          with certified forests and local suppliers because
          we believe beautiful spaces should also be
          sustainable.
        </p>
      </article>

      <figure className="img-box">
        <img
          className="first-img"
          src={sofa}
          alt="Modern living room with a handcrafted sofa"
          loading="lazy"
          decoding="async"
        />

        <img
          className="second-img"
          src={bedroom}
          alt="Elegant handcrafted bedroom furniture set"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </section>
  );
};

export default Story;