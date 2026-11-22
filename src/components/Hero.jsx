import { profile } from "../content.js";

function Hero() {
  return (
    <div className="intro_container" id="top">
      <div className="container text-center">
        <h1>Umang Patel</h1>
        <p>{profile.summary}</p>
        <p>Los Angeles, CA · Software Engineer II, Amgen · Jan 2023 – Present</p>
        <a className="github_button" href={`mailto:${profile.email}`}>
          Email
        </a>
        <a className="github_button" href={profile.github} target="_blank" rel="noreferrer noopener me">
          GitHub
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a className="github_button" href={profile.linkedin} target="_blank" rel="noreferrer noopener me">
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
