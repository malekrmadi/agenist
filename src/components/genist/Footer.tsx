import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="g-footer">
      <div className="g-container g-footer__top">
        <div className="g-footer__brand">
          <Logo variant="light" />
          <p className="g-footer__tag">
            Le système d'exploitation des PME ambitieuses. Centralisez, automatisez, pilotez.
          </p>
          <Link to="/contact" className="g-btn g-btn--primary">
            Demander une démo
          </Link>
        </div>

        <div className="g-footer__cols">
          <div>
            <h4>Produit</h4>
            <ul>
              <li><Link to="/fonctionnalites">Fonctionnalités</Link></li>
              <li><Link to="/packs">Packs métiers</Link></li>
              <li><Link to="/#pricing">Tarifs</Link></li>
              <li><Link to="/#roadmap">Roadmap</Link></li>
            </ul>
          </div>
          <div>
            <h4>Entreprise</h4>
            <ul>
              <li><Link to="/a-propos">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4>Ressources</h4>
            <ul>
              <li><a href="#">Documentation</a></li>
              <li><a href="#">Cas clients</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="g-container g-footer__bottom">
        <span>© {year} GENIST. Tous droits réservés.</span>
        <div className="g-footer__legal">
          <a href="#">Mentions légales</a>
          <a href="#">Confidentialité</a>
          <a href="#">CGU</a>
        </div>
      </div>
    </footer>
  );
}
