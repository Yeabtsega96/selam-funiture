import "./ContactInfos.css";

import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline, IoTimeOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const ContactInfos = () => {
  return (
    <section
      className="contact-infos"
      aria-labelledby="contact-info-title"
    >
      <h2 id="contact-info-title" className="sr-only">
        Contact Information
      </h2>

      <article className="info-card">
        <span className="icon-span" aria-hidden="true">
          <CiLocationOn className="icon" />
        </span>

        <div className="info">
          <h3 className="label">Showroom</h3>

          <address className="address">
            Bole Road, Near Edna Mall
            <br />
            Addis Ababa, Ethiopia
          </address>
        </div>
      </article>

      <article className="info-card">
        <span className="icon-span" aria-hidden="true">
          <IoCallOutline className="icon" />
        </span>

        <div className="info">
          <h3 className="label">Phone</h3>

          <ul>
            <li>
              <a href="tel:+2519921711">
                +251 99 217 1711
              </a>
            </li>

            <li>
              <a href="tel:+2519921712">
                +251 99 217 1712
              </a>
            </li>
          </ul>
        </div>
      </article>

      <article className="info-card">
        <span className="icon-span" aria-hidden="true">
          <CiMail className="icon" />
        </span>

        <div className="info">
          <h3 className="label">Email</h3>

          <ul>
            <li>
              <a href="mailto:hello@selamfurniture.et">
                hello@selamfurniture.et
              </a>
            </li>

            <li>
              <a href="mailto:sales@selamfurniture.et">
                sales@selamfurniture.et
              </a>
            </li>
          </ul>
        </div>
      </article>

      <article className="info-card">
        <span className="icon-span" aria-hidden="true">
          <IoTimeOutline className="icon" />
        </span>

        <div className="info">
          <h3 className="label">Business Hours</h3>

          <ul>
            <li>
              <time dateTime="Mo-Sa 09:00-19:00">
                Mon – Sat: 9:00 AM – 7:00 PM
              </time>
            </li>

            <li>
              <time dateTime="Su 11:00-17:00">
                Sunday: 11:00 AM – 5:00 PM
              </time>
            </li>
          </ul>
        </div>
      </article>

      <article className="info-card">
        <span className="icon-span" aria-hidden="true">
          <FaInstagram className="icon" />
        </span>

        <div className="info">
          <h3 className="label">Follow Us</h3>

          <div className="social-links">
            <div>
              <a
                href="#"
                aria-label="Visit our Instagram page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>

            <div>
              <a
                href="#"
                aria-label="Visit our Facebook page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </div>

            <div>
              <a
                href="#"
                aria-label="Visit our X page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ContactInfos;