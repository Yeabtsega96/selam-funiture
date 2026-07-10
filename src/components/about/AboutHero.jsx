import "./AboutHero.css";

const AboutHero = () => {
  return (
    <section
      className="about-hero"
      aria-labelledby="about-hero-title"
    >
      <div className="about-hero-content">
        <p className="hero-subtitle">
          Our Story
        </p>

        <h1 id="about-hero-title">
          Crafted with Purpose &amp; Pride
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;