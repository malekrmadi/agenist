import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import deskFlat from "@/assets/desk-flat.jpg";
import ctaBg from "@/assets/cta-bg.jpg";
import "./Home.css";

/* ----------- Icônes inline (SVG) ----------- */
const I = {
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  invoice: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h4"/></svg>
  ),
  project: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h18M3 12h18M3 17h12"/></svg>
  ),
  bolt: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9z"/></svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
  ),
  bank: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10 12 4l9 6"/><path d="M5 10v8M19 10v8M9 10v8M15 10v8M3 21h18"/></svg>
  ),
  store: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9 4 4h16l1 5"/><path d="M5 9v11h14V9"/><path d="M9 22V12h6v10"/></svg>,
  briefcase: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>,
  hardhat: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h20"/><path d="M4 18a8 8 0 0 1 16 0"/><path d="M10 10V6h4v4"/></svg>,
  hr: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>,
  check: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>,
  spark: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg>,
};

/* ============================================================ */
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="g-hero">
        <div className="g-hero__bg" aria-hidden="true">
          <img src={heroBg} alt="" className="g-hero__bgimg" width={1920} height={1280} />
          <div className="g-hero__bgveil" />
          <div className="g-hero__orb g-hero__orb--gold" />
          <div className="g-hero__orb g-hero__orb--blue" />
          <div className="g-hero__grid" />
        </div>
        <div className="g-container g-hero__inner">
          <span className="g-eyebrow g-anim-up">Plateforme tout-en-un · Made in France</span>
          <h1 className="g-h1 g-anim-up g-delay-1">
            Donnez à votre PME le système qu'elle <span className="g-gold-grad">mérite</span>.
          </h1>
          <p className="g-lead g-anim-up g-delay-2">
            GENIST réunit CRM, facturation, projets, automatisations et finance dans une plateforme
            unique, modulable et pensée pour la performance — basée sur le moteur éprouvé Dolibarr.
          </p>
          <div className="g-hero__cta g-anim-up g-delay-3">
            <Link to="/contact" className="g-btn g-btn--primary g-btn--lg">
              Demander une démo {I.arrow}
            </Link>
            <Link to="/fonctionnalites" className="g-btn g-btn--ghost g-btn--lg">
              Découvrir GENIST
            </Link>
          </div>

          <div className="g-hero__stats g-anim-up g-delay-4">
            <div><strong>+40%</strong><span>de productivité commerciale</span></div>
            <div><strong>-12h</strong><span>de saisie par semaine</span></div>
            <div><strong>4 sem.</strong><span>pour être opérationnel</span></div>
          </div>
        </div>
      </section>

      {/* PROBLÈME */}
      <section className="g-section">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Le constat</span>
            <h2 className="g-h2">Votre activité grandit. Vos outils, eux, vous freinent.</h2>
            <p className="g-lead">
              Tableurs qui s'empilent, mails qui s'égarent, devis oubliés, relances qui n'arrivent
              jamais. Chaque jour, des opportunités vous échappent — sans même que vous le voyiez.
            </p>
          </div>

          <div className="g-grid g-grid--3 g-mt-md">
            {[
              { n: "01", t: "Informations dispersées", d: "Vos données vivent dans 6 outils différents. Personne n'a la vue d'ensemble." },
              { n: "02", t: "Suivi qui s'évapore", d: "Les relances tombent à l'eau, les paiements traînent, le cash flow trinque." },
              { n: "03", t: "Opportunités perdues", d: "Sans process clair, 1 lead qualifié sur 3 ne reçoit jamais de seconde réponse." },
            ].map((p) => (
              <article key={p.n} className="g-card g-prob">
                <span className="g-prob__num">{p.n}</span>
                <h3 className="g-h3">{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="g-section g-section--dark">
        <div className="g-container">
          <div className="g-solution">
            <div>
              <span className="g-eyebrow">La réponse GENIST</span>
              <h2 className="g-h2">Un seul système. Toute votre entreprise.</h2>
              <p className="g-lead">
                GENIST orchestre vos clients, vos ventes, vos projets et votre comptabilité dans une
                plateforme cohérente. Vos équipes arrêtent de chercher l'information : elles la créent
                et l'exploitent. Vos décisions s'appuient enfin sur des données fiables, en temps réel.
              </p>
              <div className="g-flex g-gap-md g-flex-wrap">
                {["Centraliser", "Automatiser", "Piloter"].map((w) => (
                  <span key={w} className="g-pill">
                    <span className="g-pill__dot" /> {w}
                  </span>
                ))}
              </div>
            </div>
            <div className="g-solution__visual" aria-hidden="true">
              <div className="g-orbit">
                <div className="g-orbit__core">G</div>
                {["CRM", "Devis", "Projets", "Banque", "Email", "Auto"].map((label, i) => (
                  <span key={label} className="g-orbit__node" style={{ ["--i" as never]: i }}>
                    {label}
                  </span>
                ))}
                <div className="g-orbit__ring g-orbit__ring--1" />
                <div className="g-orbit__ring g-orbit__ring--2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS APERÇU */}
      <section className="g-section g-section--cream">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Modules clés</span>
            <h2 className="g-h2">Tout ce qu'il vous faut. Rien de superflu.</h2>
          </div>

          <div className="g-grid g-grid--3 g-mt-md">
            {[
              { icon: I.users, t: "CRM intelligent", d: "Centralisez contacts, opportunités et historique. Vos commerciaux savent quoi faire ensuite — toujours." },
              { icon: I.invoice, t: "Devis & Facturation", d: "Devis en 2 minutes, conversion en facture en 1 clic, relances automatisées." },
              { icon: I.project, t: "Gestion de projets", d: "Tâches, jalons, temps passé, rentabilité. La vue qu'attendaient vos chefs de projet." },
              { icon: I.bolt, t: "Automatisations", d: "Workflows sans code : déclenchez emails, tâches et alertes selon vos règles." },
              { icon: I.mail, t: "Mailing automatisé", d: "Campagnes ciblées, séquences de relance, suivi des ouvertures intégré au CRM." },
              { icon: I.bank, t: "Connexion bancaire", d: "Réconciliation automatique, vue cash en temps réel, encaissements sans friction." },
            ].map((f, i) => (
              <article key={f.t} className={`g-card g-feature g-anim-up g-delay-${(i % 4) + 1}`}>
                <span className="g-feature__icon">{f.icon}</span>
                <h3 className="g-h3">{f.t}</h3>
                <p>{f.d}</p>
                <Link to="/fonctionnalites" className="g-arrow-link">En savoir plus {I.arrow}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PACKS MÉTIERS */}
      <section className="g-section g-section--warm">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Packs métiers</span>
            <h2 className="g-h2">Pré-configuré pour votre secteur. Prêt dès le jour 1.</h2>
            <p className="g-lead">
              Chaque pack embarque les workflows, modèles de documents et indicateurs adaptés à votre
              métier. Vous gagnez plusieurs semaines de paramétrage.
            </p>
          </div>

          <div className="g-grid g-grid--3 g-mt-md">
            {[
              { icon: I.store, t: "Commerce / Vente", d: "Catalogue, stock, caisse, fidélité. La vue 360° de vos ventes." },
              { icon: I.briefcase, t: "Services / Agences", d: "Affaires, temps facturable, marges. Pilotez la rentabilité par mission." },
              { icon: I.home, t: "Immobilier", d: "Mandats, biens, contacts qualifiés, suivi des transactions." },
              { icon: I.hardhat, t: "BTP / CVC", d: "Chantiers, sous-traitants, situations de travaux, suivi des heures terrain." },
              { icon: I.hr, t: "RH / Recrutement", d: "Pipeline candidats, entretiens, contrats, onboarding structuré." },
              { icon: I.heart, t: "Associations", d: "Adhérents, cotisations, dons, événements, reçus fiscaux automatiques." },
            ].map((p) => (
              <article key={p.t} className="g-card g-pack">
                <span className="g-pack__icon">{p.icon}</span>
                <h3 className="g-h3">{p.t}</h3>
                <p>{p.d}</p>
              </article>
            ))}
          </div>
          <div className="g-text-center g-mt-lg">
            <Link to="/packs" className="g-btn g-btn--ghost">Explorer tous les packs métiers</Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="g-section g-section--cream" id="pricing">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Tarifs</span>
            <h2 className="g-h2">Une offre claire. Sans surprise.</h2>
          </div>

          <div className="g-pricing">
            {/* Essentiel */}
            <article className="g-price">
              <div className="g-price__head">
                <h3>GENIST Essentiel</h3>
                <p>Tout ce qu'il faut pour structurer votre activité dès aujourd'hui.</p>
              </div>
              <div className="g-price__amount">
                <span className="g-price__num">35€</span>
                <span className="g-price__per">/ mois</span>
              </div>
              <span className="g-price__setup">+ 200€ d'installation et paramétrage</span>
              <ul className="g-price__list">
                {[
                  "Création & gestion clients",
                  "Devis personnalisables",
                  "Facturation & relances",
                  "Gestion de projets",
                  "Connexion bancaire",
                  "Mailing automatisé",
                ].map((f) => (
                  <li key={f}>{I.check}<span>{f}</span></li>
                ))}
              </ul>
              <Link to="/contact" className="g-btn g-btn--ghost">Démarrer avec Essentiel</Link>
            </article>

            {/* Excellence */}
            <article className="g-price g-price--featured">
              <span className="g-price__badge">{I.spark} Bientôt disponible</span>
              <div className="g-price__head">
                <h3>GENIST Excellence</h3>
                <p className="g-price__promise">"Votre CRM qui travaille à votre place."</p>
              </div>
              <div className="g-price__amount">
                <span className="g-price__num">89€</span>
                <span className="g-price__per">/ mois</span>
              </div>
              <span className="g-price__setup">Inclut tout l'Essentiel · IA propulsée</span>
              <ul className="g-price__list">
                <li>{I.check}<span>Analyse de données prédictive</span></li>
                <li>{I.check}<span>Génération automatique de contenu (emails, propositions)</span></li>
                <li>{I.check}<span>Automatisations avancées multi-déclencheurs</span></li>
                <li>{I.check}<span>Scoring intelligent des opportunités</span></li>
                <li>{I.check}<span>Assistant conversationnel intégré</span></li>
              </ul>
              <Link to="/contact" className="g-btn g-btn--primary">Rejoindre la liste prioritaire</Link>
            </article>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="g-section g-section--dark" id="roadmap">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Roadmap produit</span>
            <h2 className="g-h2">Un produit qui grandit avec vous.</h2>
          </div>
          <div className="g-roadmap">
            {[
              { tag: "Disponible", color: "live", items: ["CRM complet", "Facturation", "Projets", "Mailing", "Connexion bancaire"] },
              { tag: "Prochainement", color: "soon", items: ["App mobile native", "Signature électronique", "Tableau de bord temps réel"] },
              { tag: "Vision 2026", color: "future", items: ["GENIST Excellence (IA)", "Marketplace de modules", "Multi-entités avancé"] },
            ].map((col) => (
              <div key={col.tag} className={`g-road g-road--${col.color}`}>
                <span className="g-road__tag">{col.tag}</span>
                <ul>
                  {col.items.map((i) => <li key={i}>{I.check}<span>{i}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARAISON */}
      <section className="g-section">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Pourquoi GENIST</span>
            <h2 className="g-h2">Là où les CRM classiques s'arrêtent, GENIST commence.</h2>
          </div>

          <div className="g-compare g-mt-md">
            {[
              { c: "Simplicité d'usage", a: "Interface pensée terrain — vos équipes adoptent en quelques heures.", b: "Courbe d'apprentissage longue, formations onéreuses." },
              { c: "Adapté aux PME", a: "Configuration fine, pricing PME, pas de modules superflus.", b: "Pensés pour l'enterprise — vous payez pour 80% de fonctionnalités inutiles." },
              { c: "Périmètre fonctionnel", a: "CRM + ERP + facturation + projets, dans un seul système.", b: "CRM seul, intégrations multiples à maintenir." },
              { c: "Intelligence artificielle", a: "IA intégrée nativement avec GENIST Excellence.", b: "IA en option payante, souvent superficielle." },
              { c: "Mise en place", a: "Opérationnel en 4 semaines, packs métiers prêts à l'emploi.", b: "3 à 6 mois, intégrateurs facturés au forfait." },
            ].map((row, i) => (
              <div key={row.c} className={`g-compare__row ${i % 2 ? "alt" : ""}`}>
                <div className="g-compare__crit">{row.c}</div>
                <div className="g-compare__cell g-compare__cell--us">
                  <span className="g-compare__check">{I.check}</span>
                  <div>
                    <strong>GENIST</strong>
                    <p>{row.a}</p>
                  </div>
                </div>
                <div className="g-compare__cell g-compare__cell--them">
                  <strong>Autres CRM</strong>
                  <p>{row.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="g-section g-cta-final">
        <img src={ctaBg} alt="" className="g-cta-final__bg" loading="lazy" width={1920} height={1000} />
        <div className="g-container g-text-center">
          <span className="g-eyebrow">Prêt ?</span>
          <h2 className="g-h2 g-mx-auto" style={{ maxWidth: "16ch" }}>
            Passez du chaos opérationnel à un <span className="g-gold-grad">système qui scale</span>.
          </h2>
          <p className="g-lead g-mx-auto g-text-center" style={{ marginInline: "auto" }}>
            30 minutes. Une démo concrète sur vos cas d'usage. Aucun engagement.
          </p>
          <div className="g-mt-md g-flex g-justify-center g-gap-md g-flex-wrap">
            <Link to="/contact" className="g-btn g-btn--primary g-btn--lg">Demander ma démo {I.arrow}</Link>
            <Link to="/fonctionnalites" className="g-btn g-btn--ghost g-btn--lg">Voir les fonctionnalités</Link>
          </div>
        </div>
      </section>
    </>
  );
}
