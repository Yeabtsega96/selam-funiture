import "./Statistics.css";

const statistics = [
  {
    id: 1,
    value: "12+",
    label: "Years of Craftsmanship",
  },
  {
    id: 2,
    value: "1,200+",
    label: "Happy Customers",
  },
  {
    id: 3,
    value: "150+",
    label: "Unique Designs",
  },
  {
    id: 4,
    value: "98%",
    label: "Satisfaction Rate",
  },
];

const Statistics = () => {
  return (
    <section
      className="stats"
      aria-labelledby="statistics-title"
    >
      <h2
        id="statistics-title"
        className="sr-only"
      >
        Company Statistics
      </h2>

      {statistics.map((stat) => (
        <article
          className="stat"
          key={stat.id}
        >
          <h3>{stat.value}</h3>

          <p>{stat.label}</p>
        </article>
      ))}
    </section>
  );
};

export default Statistics;