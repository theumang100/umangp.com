import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import doge from "../images/doge_transperant.png";
import { nav } from "../content.js";

function Header() {
  const location = useLocation();
  const onHome = location.pathname === "/";
  const [dark, setDark] = useState(() => document.documentElement.getAttribute("data-theme") === "dark");
  const [active, setActive] = useState("");

  useEffect(() => {
    if (dark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try {
      if (dark) localStorage.setItem("theme", "dark");
      else localStorage.removeItem("theme");
    } catch {
      /* ignore */
    }
  }, [dark]);

  useEffect(() => {
    if (!onHome) return undefined;
    const sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [onHome]);

  return (
    <div className="header_container">
      <div className="container">
        <div className="header_row">
          <div className="icon_img_text_container">
              <Link to="/" className="head_img_txt_link">
              <span className="head_img">
                <img src={doge} height="30" width="30" alt="" />
              </span>
                umang
              </Link>
          </div>
          <div>
            <nav className="menu-item" aria-label="Primary">
              {nav.map((item) => {
                const href = item.hash && onHome ? item.hash : item.href;
                const current =
                  item.id === "blog"
                    ? location.pathname.startsWith("/blog")
                    : onHome && active === item.id;
                return (
                  <a
                    key={item.id}
                    href={href}
                    className="head_menu_link"
                    aria-current={current ? "true" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
              <button
                id="dark_mode_button"
                type="button"
                onClick={() => setDark((value) => !value)}
                aria-pressed={dark}
                aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
