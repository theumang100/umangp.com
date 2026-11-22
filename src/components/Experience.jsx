import { experience } from "../content.js";

function Experience() {
  return (
    <section className="section" id="experience" aria-labelledby="experience-title">
      <div className="wrap">
        <div className="section-head">
          <span className="idx" aria-hidden="true">
            01
          </span>
          <h2 id="experience-title">Experience</h2>
        </div>

        <div className="roles">
          {experience.map((role) => (
            <article className="role" key={role.id}>
              <h3 className="role-title">{role.title}</h3>
              <header className="role-meta">
                <p className="role-org">{role.org}</p>
                <p className="role-where">{role.location}</p>
                <p className="role-when">
                  <time dateTime={role.start}>{role.startLabel}</time>
                  {" – "}
                  {role.end ? <time dateTime={role.end}>{role.endLabel}</time> : role.endLabel}
                </p>
              </header>
              <div className="role-body">
                <p className="stack-label">Tech stack</p>
                <ul className="stack">
                  {role.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <ul className="bullets">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
