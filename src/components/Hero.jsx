import portrait from "../assets/portrait.jpg";
import { profile } from "../content.js";

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span>Software engineer</span>
            <span aria-hidden="true">·</span>
            <span>{profile.location}</span>
          </p>
          <h1 id="hero-title">
            <span>Umang</span>
            <span className="accent">Patel</span>
          </h1>
          <p className="lede">
            Software engineer with 5 years of experience across telecom and biotech, most
            recently building backend services and <em>vector search</em> at Amgen. Enjoy owning
            systems end to end, from API design and data pipelines to deployment on cloud
            infrastructure.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Email Umang
            </a>
            <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer noopener me">
              GitHub
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer noopener me">
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="hero-aside">
          <figure className="portrait">
            <div className="frame">
              <span className="mark tl" aria-hidden="true" />
              <span className="mark tr" aria-hidden="true" />
              <span className="mark bl" aria-hidden="true" />
              <span className="mark br" aria-hidden="true" />
              <img
                src={portrait}
                width="1000"
                height="1000"
                alt="Portrait of Umang Patel"
              />
            </div>
            <figcaption>{profile.location}</figcaption>
          </figure>

          <a className="now" href="#experience">
            <span className="now-kicker">Now</span>
            <span className="now-title">Software Engineer II, Amgen</span>
            <span className="now-meta">Thousand Oaks, CA · Jan 2023 – Present</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
