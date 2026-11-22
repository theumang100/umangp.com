import { education, profile } from "../content.js";

function Education() {
  return (
    <section className="section" id="education" aria-labelledby="education-title">
      <div className="wrap">
        <div className="section-head">
          <span className="idx" aria-hidden="true">
            04
          </span>
          <h2 id="education-title">Education</h2>
        </div>
        <div className="schools">
          {education.map((school) => (
            <article className="school" key={school.degree}>
              <h3>{school.degree}</h3>
              <p className="school-name">{school.school}</p>
              <p className="school-meta">
                {school.gpa}
                <span aria-hidden="true"> · </span>
                <time dateTime={school.dateTime}>{school.date}</time>
              </p>
            </article>
          ))}
        </div>
        <aside className="note">
          <p>{profile.personal}</p>
        </aside>
      </div>
    </section>
  );
}

export default Education;
