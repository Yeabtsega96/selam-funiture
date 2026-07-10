import SEO from "../components/common/SEO"
import Collection from "../components/home/Collection";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Hero from "../components/home/Hero";
import ReadyCard from "../components/home/ReadyCard";
import Statistics from "../components/home/Statistics";
import Testimonials from "../components/home/Testimonials";
import WhyUs from "../components/home/WhyUs";

const HomePage = () => {
  return (
    <>
      <SEO
        title="Selam Furniture | Premium Furniture in Ethiopia"
        description="Discover high-quality furniture for homes, offices, hotels, and restaurants. Crafted with quality and built to last."
        url="https://selamFurniture.com/"
      />

      <div>
        <Hero />
        <Collection />
        <FeaturedProducts />
        <WhyUs />
        <Statistics />
        <Testimonials />
        <ReadyCard />
      </div>
    </>
  );
};

export default HomePage;