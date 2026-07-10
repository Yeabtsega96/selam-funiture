import AboutHero from "../components/about/AboutHero";
import Journey from "../components/about/Journey";
import MissonValue from "../components/about/MissonValue";
import Story from "../components/about/Story";
import Team from "../components/about/Team";
import SEO from "../components/common/SEO"
import Statistics from "../components/home/Statistics";

const About = () => {
  return (
    <>
      <SEO
        title="About Us | Selam Furniture"
        description="Learn about Selam Furniture, our passion for quality craftsmanship, and our commitment to creating premium furniture for homes, offices, hotels, and restaurants across Ethiopia."
        url="https://selamfurniture.com/about"
      />

      <section className="about-page">
        <AboutHero />
        <Story />
        <MissonValue />
        <Journey />
        <Team />
        <Statistics />
      </section>
    </>
  );
};

export default About;