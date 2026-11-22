import { skillGroups } from "../content.js";

function Skills() {
  return (
    <section id="skills">
      <div className="description_container">
        <div className="container">
          <h1>Technical skills.</h1>
        </div>
      </div>
      <div className="smallinfo_container">
        <div className="container">
          <ul>
            {skillGroups.map((group) => (
              <li key={group.label}>
                <b>{group.label}:</b> {group.items.join(", ")}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
