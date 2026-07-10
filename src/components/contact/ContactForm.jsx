import { useState } from "react";
import "./ContactForm.css";
import Button from "../Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();


    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  }


  return (
    <section
      className="contact-form"
      aria-labelledby="contact-form-title"
    >
      <h3 id="contact-form-title">Send Us a Message</h3>

      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="wrapper">
            <label htmlFor="name">Full Name *</label>

            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Tigist Alemu"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="wrapper">
            <label htmlFor="email">Email *</label>

            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="tigist@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="wrapper">
            <label htmlFor="phone">Phone Number</label>

            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+251 99 217 1711"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          <div className="wrapper">
            <label htmlFor="subject">Subject *</label>

            <select
              id="subject"
              name="subject"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="">Select a subject</option>
              <option value="Request a Quote">Request a Quote</option>
              <option value="Custom Order">Custom Order</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="After-Sales Support">
                After-Sales Support
              </option>
            </select>
          </div>
        </div>

        <div className="wrapper">
          <label htmlFor="message">Message *</label>

          <textarea
            id="message"
            name="message"
            placeholder="Tell us about your project — space type, dimensions, budget, preferred style..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Button type="submit" size="lg">
          Send Message
        </Button>
      </form>

      <p>
        Or reach us directly on{" "}
        <a
          href="https://wa.me/251916921711"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
        >
          WhatsApp
        </a>
      </p>
    </section>
  );
};

export default ContactForm;