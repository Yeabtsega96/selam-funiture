import "./Team.css";

const teams = [
  {
    id: 1,
    name: "Dawit Mengistu",
    role: "Founder & Master Craftsman",
    desc: "With 20 years of woodworking experience, Dawit founded Selam to bring world-class furniture to Ethiopia.",
    icon: "DM",
  },
  {
    id: 2,
    name: "Hana Girma",
    role: "Head of Design",
    desc: "Trained in Milan, Hana blends Scandinavian minimalism with Ethiopian cultural motifs into timeless pieces.",
    icon: "HG",
  },
  {
    id: 3,
    name: "Samuel Bekele",
    role: "Operations Director",
    desc: "Samuel ensures every project is delivered on time and every customer receives the white-glove Selam experience.",
    icon: "SB",
  },
  {
    id: 4,
    name: "Yohannes Tesfaye",
    role: "Lead Woodworker",
    desc: "A third-generation craftsman, Yohannes leads our workshop team with precision, passion, and artistry.",
    icon: "YT",
  },
];

const Team = () => {
  return (
    <section
      className="team-section"
      aria-labelledby="team-title"
    >
      <header className="team-header">
        <p className="team-subtitle">
          The People
        </p>

        <h2 id="team-title">
          Meet Our Team
        </h2>

        <p className="team-description">
          The passionate people behind every piece of
          Selam Furniture.
        </p>
      </header>

      <div className="team-cards">
        {teams.map((team) => (
          <article
            className="team-card"
            key={team.id}
          >
            <div
              className="img-box"
              aria-hidden="true"
            >
              <span>{team.icon}</span>
            </div>

            <div className="detail">
              <h3>{team.name}</h3>

              <p className="role">
                {team.role}
              </p>

              <p className="desc">
                {team.desc}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Team;