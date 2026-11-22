import { profile } from "../content.js";

function Footer() {
  return (
    <footer className="site_footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} {profile.name}
          {" · "}
          <a href={profile.site}>umangp.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
