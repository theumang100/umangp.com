import { projects } from "../content.js";

function Projects() {
  return (
    <section id="projects">
      <div className="description_container">
        <div className="container">
          <h1>Projects.</h1>
          <p>A file storage system and an automated trading platform.</p>
        </div>
      </div>
      <div className="about_me_info">
        <div className="container">
          {projects.map((project) => (
            <article className="role_block" key={project.title}>
              <h2>{project.title}</h2>
              <p>
                <b>Technologies:</b> {project.stack.join(", ")}
              </p>
              <ul>
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
