import SEO from "../components/common/SEO"
import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfos from "../components/contact/ContactInfos";
import MapCard from "../components/contact/MapCard";

import "./ContactPage.css"

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact Us | Selam Furniture"
        description="Get in touch with Selam Furniture for inquiries, custom furniture orders, or visit our showroom in Addis Ababa, Ethiopia."
        url="https://selamfurniture.com/contact"
      />

      <section className="contact-page">
        <ContactHero />
        <section className="contact-section">
          <ContactInfos />
          <ContactForm />
        </section>
        <MapCard />
      </section>
    </>
  );
};

export default Contact;