import "./GalleryHero.css";

const GalleryHero = () => {
  return (
    <section
      className="gallery-hero"
      aria-labelledby="gallery-title"
    >
      <span className="gallery-subtitle">
        Our Portfolio
      </span>

      <h1 id="gallery-title">
        Gallery &amp; Projects
      </h1>

      <p>
        Real spaces transformed by Selam Furniture—from private homes to luxury hotels.
      </p>
    </section>
  );
};

export default GalleryHero;