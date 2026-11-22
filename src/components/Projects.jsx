import { profile, projects } from "../content.js";

function Projects() {
  return (
    <section id="projects">
      <div className="description_container">
        <div className="container">
          <h1>Projects.</h1>
          <p>A few public repositories. The rest are on GitHub.</p>
        </div>
      </div>
      <div className="about_me_info">
        <div className="container">
          {projects.map((project) => (
            <article className="role_block" key={project.name}>
              <h2>
                <a href={project.url} target="_blank" rel="noreferrer noopener">
                  {project.name}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </h2>
              {project.languages.length > 0 && (
                <p>
                  <b>Languages:</b> {project.languages.join(", ")}
                </p>
              )}
              {project.description && <p>{project.description}</p>}
            </article>
          ))}
          <a className="github_button" href={profile.github} target="_blank" rel="noreferrer noopener me">
            All repositories
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
