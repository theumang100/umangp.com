import { skillGroups } from "../content.js";

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <div className="section-head">
          <span className="idx" aria-hidden="true">
            03
          </span>
          <h2 id="skills-title">Technical skills</h2>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
