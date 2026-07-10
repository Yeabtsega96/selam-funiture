import "./Journey.css";

const Journey = () => {
  return (
    <section
      className="journey-section"
      aria-labelledby="journey-title"
    >
      <header className="journey-header">
        <span>Our Journey</span>

        <h2 id="journey-title">
          A Decade of Craftsmanship
        </h2>
      </header>

      <ol className="timeline">
        <div
          className="timeline-line"
          aria-hidden="true"
        ></div>

        <li className="timeline-item left">
          <div className="timeline-dot" aria-hidden="true"></div>

          <article className="timeline-content">
            <time className="year" dateTime="2012">
              2012
            </time>

            <h3>Workshop Founded</h3>

            <p>
              Dawit Mengistu opens a 3-person workshop in Addis Ababa.
            </p>
          </article>
        </li>

        <li className="timeline-item right">
          <div className="timeline-dot" aria-hidden="true"></div>

          <article className="timeline-content">
            <time className="year" dateTime="2015">
              2015
            </time>

            <h3>First Commercial Contract</h3>

            <p>
              Supplied furniture for 40 rooms at the Grand Hotel, Hawassa.
            </p>
          </article>
        </li>

        <li className="timeline-item left">
          <div className="timeline-dot" aria-hidden="true"></div>

          <article className="timeline-content">
            <time className="year" dateTime="2018">
              2018
            </time>

            <h3>Design Studio Opens</h3>

            <p>
              Hana Girma joins and establishes our in-house design studio.
            </p>
          </article>
        </li>

        <li className="timeline-item right">
          <div className="timeline-dot" aria-hidden="true"></div>

          <article className="timeline-content">
            <time className="year" dateTime="2020">
              2020
            </time>

            <h3>E-Commerce Launch</h3>

            <p>
              Launched online catalog and WhatsApp ordering system.
            </p>
          </article>
        </li>

        <li className="timeline-item left">
          <div className="timeline-dot" aria-hidden="true"></div>

          <article className="timeline-content">
            <time className="year" dateTime="2022">
              2022
            </time>

            <h3>500th Client</h3>

            <p>
              Celebrated serving our 500th commercial client — Sheraton Addis.
            </p>
          </article>
        </li>

        <li className="timeline-item right">
          <div className="timeline-dot" aria-hidden="true"></div>

          <article className="timeline-content">
            <time className="year" dateTime="2024">
              2024
            </time>

            <h3>Regional Expansion</h3>

            <p>
              Opened showrooms in Bahir Dar, Mekele, and Hawassa.
            </p>
          </article>
        </li>
      </ol>
    </section>
  );
};

export default Journey;