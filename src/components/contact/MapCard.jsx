import "./MapCard.css";
import Button from "../Button";

import { CiLocationOn } from "react-icons/ci";
import { GrFormNextLink } from "react-icons/gr";

const MapCard = () => {
  return (
    <section
      className="map-card"
      aria-labelledby="map-card-title"
    >
      <CiLocationOn
        className="icon"
        aria-hidden="true"
      />

      <h3 id="map-card-title">
        Selam Furniture Showroom
      </h3>

      <address className="address">
        Bole Road, Near Edna Mall
        <br />
        Addis Ababa, Ethiopia
      </address>

      <a
        href="https://maps.app.goo.gl/9beWi7Ztw2DGCjpw7"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Selam Furniture showroom location in Google Maps"
      >
        <Button>
          Open in Maps
          <GrFormNextLink
            className="next-icon"
            aria-hidden="true"
          />
        </Button>
      </a>
    </section>
  );
};

export default MapCard;