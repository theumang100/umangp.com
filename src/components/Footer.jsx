import { profile } from "../content.js";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-bar">
        <p>
          © {year} {profile.name}
        </p>
        <p>
          <a href={profile.site}>umangp.com</a>
          <span aria-hidden="true"> · </span>
          <a href={profile.github} target="_blank" rel="noreferrer noopener me">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
