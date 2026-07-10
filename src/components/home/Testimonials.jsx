import "./Testimonials.css";
import { useRef } from "react";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    review:
      "Selam Furniture transformed our living room completely. The Addis Lounge Chair is stunning—the craftsmanship is unlike anything else available in Ethiopia. Delivery was prompt and the team was incredibly professional.",
    name: "Tigist Alemu",
    role: "Homeowner, Addis Ababa",
    initials: "TA",
  },
  {
    id: 2,
    review:
      "We furnished our entire restaurant with Selam's dining sets. Three years later, everything still looks brand new. Our guests always comment on the beautiful woodwork. Absolutely worth every birr.",
    name: "Bekele Tadesse",
    role: "Restaurant Owner, Bahir Dar",
    initials: "BT",
  },
  {
    id: 3,
    review:
      "We outfitted 120 rooms with Selam Furniture for our hotel renovation. The quality, consistency, and after-sales support exceeded our expectations.",
    name: "Sarah Johnson",
    role: "Hotel Manager, Hawassa",
    initials: "SJ",
  },
  {
    id: 4,
    review:
      "As an interior designer, I refer all my clients to Selam. Their customization options, premium materials, and reliability make them my first recommendation.",
    name: "Meron Haile",
    role: "Interior Designer, Addis Ababa",
    initials: "MH",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="testimonials"
      aria-labelledby="testimonials-title"
    >
      <header className="testimonials-header">
        <p className="testimonials-subtitle">
          Customer Stories
        </p>

        <h2 id="testimonials-title">
          What Our Clients Say
        </h2>
      </header>

      <div className="testimonial-wrapper">
        <Swiper
          modules={[Autoplay, Pagination, Navigation, A11y]}
          slidesPerView={1}
          spaceBetween={30}
          loop
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          a11y={{
            enabled: true,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;

              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <article className="testimonial-card">
                <FaQuoteLeft
                  className="quote-icon"
                  aria-hidden="true"
                />

                <blockquote className="review">
                  {item.review}
                </blockquote>

                <footer className="testimonial-footer">
                  <div className="client">
                    <div
                      className="avatar"
                      aria-hidden="true"
                    >
                      {item.initials}
                    </div>

                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.role}</p>
                    </div>
                  </div>

                  <div
                    className="rating"
                    aria-label="5 out of 5 stars"
                  >
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar
                        key={index}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </footer>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-nav">
          <button
            ref={prevRef}
            className="custom-prev"
            aria-label="Previous testimonial"
            type="button"
          >
            ←
          </button>

          <button
            ref={nextRef}
            className="custom-next"
            aria-label="Next testimonial"
            type="button"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;