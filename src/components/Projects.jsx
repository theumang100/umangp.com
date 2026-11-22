import { projects } from "../content.js";

function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <div className="section-head">
          <span className="idx" aria-hidden="true">
            02
          </span>
          <h2 id="projects-title">Projects</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <span className="project-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{project.title}</h3>
              <ul className="stack">
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className="bullets">
                {project.bullets.map((bullet) => (
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

export default Projects;
