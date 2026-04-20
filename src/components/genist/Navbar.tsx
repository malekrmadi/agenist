import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";
import "./Navbar.css";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/fonctionnalites", label: "Fonctionnalités" },
  { to: "/packs", label: "Packs Métiers" },
  { to: "/a-propos", label: "À propos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className={`g-nav ${scrolled ? "g-nav--scrolled" : ""}`}>
      <div className="g-container g-nav__inner">
        <Logo />

        <nav className="g-nav__links" aria-label="Principal">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                "g-nav__link" + (isActive ? " g-nav__link--active" : "")
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="g-nav__cta">
          <Link to="/contact" className="g-btn g-btn--primary">
            Demander une démo
          </Link>
        </div>

        <button
          className={`g-nav__burger ${open ? "is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`g-nav__mobile ${open ? "is-open" : ""}`}>
        <nav>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                "g-nav__mlink" + (isActive ? " g-nav__mlink--active" : "")
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="g-btn g-btn--primary g-nav__mcta">
            Demander une démo
          </Link>
        </nav>
      </div>
    </header>
  );
}
