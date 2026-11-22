import { education, profile } from "../content.js";

function Education() {
  return (
    <section id="education">
      <div className="description_container">
        <div className="container">
          <h1>Education.</h1>
        </div>
      </div>
      <div className="about_me_info">
        <div className="container">
          {education.map((school) => (
            <p key={school.degree}>
              <b>{school.degree}</b>
              <br />
              {school.school}
              <br />
              {school.gpa} · <time dateTime={school.dateTime}>{school.date}</time>
            </p>
          ))}
          <p>{profile.personal}</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
