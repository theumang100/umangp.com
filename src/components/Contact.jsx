import { useState } from "react";
import { profile } from "../content.js";

function copyWithSelection(text) {
  const area = document.createElement("textarea");
  area.value = text;
  area.setAttribute("readonly", "");
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(area);
  if (!ok) throw new Error("copy failed");
}

const links = [
  { label: "GitHub", href: profile.github, detail: profile.githubHandle },
  { label: "LinkedIn", href: profile.linkedin, detail: "umangpatel100" },
  { label: "X", href: profile.x, detail: profile.xHandle },
];

function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        copyWithSelection(profile.email);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        copyWithSelection(profile.email);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      } catch {
        setCopied(false);
      }
    }
  }

  return (
    <section id="contact">
      <div className="description_container">
        <div className="container">
          <h1>Contact.</h1>
        </div>
      </div>
      <div className="smallinfo_container">
        <div className="container">
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
          <button type="button" className="github_button" onClick={copyEmail}>
            {copied ? "Copied" : "Copy email"}
          </button>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target="_blank" rel="noreferrer noopener me">
                  {link.label}
                </a>
                {" · "}
                {link.detail}
                <span className="sr-only"> (opens in a new tab)</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
