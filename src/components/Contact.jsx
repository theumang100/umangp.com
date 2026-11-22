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
  const [copyFailed, setCopyFailed] = useState(false);

  async function copyEmail() {
    setCopyFailed(false);
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
        setCopyFailed(true);
      }
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap">
        <div className="section-head">
          <span className="idx" aria-hidden="true">
            05
          </span>
          <h2 id="contact-title">Contact</h2>
        </div>
        <p className="contact-lead">{profile.location}</p>
        <a className="email-link" href={`mailto:${profile.email}`}>
          {profile.email.split("@")[0]}
          <wbr />
          @{profile.email.split("@")[1]}
        </a>
        <div className="contact-actions">
          <button type="button" className="btn btn-ghost" onClick={copyEmail}>
            {copied ? "Copied" : copyFailed ? "Select the email above" : "Copy email"}
          </button>
          <span className="sr-only" aria-live="polite">
            {copied ? "Email copied to clipboard" : copyFailed ? "Could not copy automatically" : ""}
          </span>
        </div>
        <ul className="contact-links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer noopener me">
                <span className="contact-label">{link.label}</span>
                <span className="contact-detail">{link.detail}</span>
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
