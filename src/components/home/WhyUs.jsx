import "./WhyUs.css";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const features = [
  {
    id: 1,
    name: "Master Craftsmanship",
    description:
      "Every piece is handcrafted by skilled Ethiopian artisans with decades of woodworking expertise.",
  },
  {
    id: 2,
    name: "2-Year Warranty",
    description:
      "All products come with a comprehensive structural warranty and lifetime care consultation.",
  },
  {
    id: 3,
    name: "Free Delivery",
    description:
      "Complimentary delivery and professional installation across Addis Ababa and major cities.",
  },
  {
    id: 4,
    name: "Customizable",
    description:
      "Choose your dimensions, materials, colors, and finishes. Every piece is made to your specifications.",
  },
];

const WhyUs = () => {
  return (
    <section
      className="why-us-section"
      aria-labelledby="why-us-title"
    >
      <header className="why-us-hero">
        <p className="why-us-subtitle">
          Our Promise
        </p>

        <h2 id="why-us-title">
          Why Choose Selam?
        </h2>

        <p className="why-us-description">
          We don't just make furniture. We craft experiences
          that transform spaces.
        </p>
      </header>

      <div className="why-us-cards">
        {features.map((item) => (
          <article
            className="why-us-card"
            key={item.id}
          >
            <span
              className="icon-span"
              aria-hidden="true"
            >
              <AiOutlineSafetyCertificate className="icon" />
            </span>

            <h3>{item.name}</h3>

            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;