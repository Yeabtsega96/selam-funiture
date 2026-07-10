import "./ContactHero.css";

const ContactHero = () => {
  return (
    <section
      className="contact-hero"
      aria-labelledby="contact-hero-title"
    >
      <p className="hero-subtitle">Get In Touch</p>

      <h1 id="contact-hero-title">
        Let's Talk Furniture
      </h1>

      <p className="hero-description">
        Have a project in mind? We'd love to hear from you.
        Request a quote or visit our showroom.
      </p>
    </section>
  );
};

export default ContactHero;