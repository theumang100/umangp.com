import { experience } from "../content.js";

function Experience() {
  return (
    <section id="experience">
      <div className="description_container">
        <div className="container">
          <h1>Experience.</h1>
          <p>Software Engineer II at Amgen, and software engineer at Sterlite Technologies Limited.</p>
        </div>
      </div>
      <div className="about_me_info">
        <div className="container">
          {experience.map((role) => (
            <article className="role_block" key={role.id}>
              <h2>{role.title}</h2>
              <p className="role_meta">
                <b>{role.org}</b>
                {" · "}
                {role.location}
                <br />
                <time dateTime={role.start}>{role.startLabel}</time>
                {" – "}
                {role.end ? <time dateTime={role.end}>{role.endLabel}</time> : role.endLabel}
              </p>
              <p>
                <b>Tech stack:</b> {role.stack.join(", ")}
              </p>
              <ul>
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
