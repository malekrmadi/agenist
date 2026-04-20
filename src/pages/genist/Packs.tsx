import { Link } from "react-router-dom";
import "./SubPages.css";

const packs = [
  {
    icon: "🛍️",
    name: "Commerce / Vente",
    problem: "Stock dispersé entre Excel et caisse, fidélité bricolée, marges floues.",
    solution: "Un système unifié catalogue + caisse + CRM + fidélité, synchronisé en temps réel.",
    benefits: ["Vue stock multi-points de vente", "Programme fidélité intégré au CRM", "Marges par produit et par vente", "Rapports quotidiens automatisés"],
  },
  {
    icon: "💼",
    name: "Services / Agences",
    problem: "Temps facturable sous-évalué, marges projets opaques, devis qui traînent.",
    solution: "Pilotage projet → temps → facturation, avec rentabilité visible mission par mission.",
    benefits: ["Temps facturable suivi automatiquement", "Marges projet en temps réel", "Devis récurrents en 1 clic", "Pipeline commercial intégré"],
  },
  {
    icon: "🏠",
    name: "Immobilier",
    problem: "Mandats éparpillés, contacts non qualifiés, suivi transactions manuel.",
    solution: "Mandats, biens, prospects et transactions unifiés dans un CRM pensé immobilier.",
    benefits: ["Fiches biens enrichies (photos, plans)", "Matching prospect ↔ bien automatique", "Suivi des transactions étape par étape", "Reporting agence en temps réel"],
  },
  {
    icon: "🏗️",
    name: "BTP / CVC",
    problem: "Chantiers décorrélés des bureaux, sous-traitants mal suivis, situations qui s'accumulent.",
    solution: "Vision chantier complète : avancement, équipes, sous-traitants, situations de travaux.",
    benefits: ["Suivi chantier en temps réel", "Gestion des sous-traitants centralisée", "Situations de travaux conformes", "Heures terrain saisies depuis mobile"],
  },
  {
    icon: "👥",
    name: "RH / Recrutement",
    problem: "Pipeline candidats dans des spreadsheets, onboarding artisanal, contrats à la main.",
    solution: "Du sourcing à l'onboarding, un pipeline RH structuré et automatisé.",
    benefits: ["Pipeline candidats par poste", "Entretiens planifiés et notés", "Génération automatique des contrats", "Parcours d'onboarding scénarisés"],
  },
  {
    icon: "🤝",
    name: "Associations",
    problem: "Adhésions et dons gérés à la main, reçus fiscaux artisanaux, événements éparpillés.",
    solution: "Un back-office associatif complet : adhérents, cotisations, dons, événements.",
    benefits: ["Adhésions et renouvellements auto", "Reçus fiscaux générés automatiquement", "Gestion d'événements et inscriptions", "Communication ciblée par segment"],
  },
];

export default function Packs() {
  return (
    <>
      <section className="g-page-hero">
        <div className="g-container g-text-center">
          <span className="g-eyebrow">Packs métiers</span>
          <h1 className="g-h1">Votre métier, <span className="g-gold-grad">déjà configuré.</span></h1>
          <p className="g-lead g-mx-auto" style={{ marginInline: "auto" }}>
            Chaque pack embarque les workflows, modèles et indicateurs spécifiques à votre secteur.
            Vous économisez des semaines de paramétrage.
          </p>
        </div>
      </section>

      <section className="g-section">
        <div className="g-container">
          {packs.map((p, i) => (
            <article key={p.name} className="g-pack-row">
              <div className="g-pack-row__head">
                <span className="g-pack-row__icon">{p.icon}</span>
                <div>
                  <span className="g-pack-row__num">Pack {String(i + 1).padStart(2, "0")}</span>
                  <h2 className="g-h2">{p.name}</h2>
                </div>
              </div>
              <div className="g-pack-row__grid">
                <div className="g-pack-block g-pack-block--problem">
                  <span className="g-pack-block__label">Le problème</span>
                  <p>{p.problem}</p>
                </div>
                <div className="g-pack-block g-pack-block--solution">
                  <span className="g-pack-block__label">La solution GENIST</span>
                  <p>{p.solution}</p>
                </div>
                <div className="g-pack-block g-pack-block--benefits">
                  <span className="g-pack-block__label">Bénéfices clés</span>
                  <ul>
                    {p.benefits.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="g-section g-cta-band">
        <div className="g-container g-text-center">
          <h2 className="g-h2">Votre métier n'est pas listé ?</h2>
          <p className="g-lead g-mx-auto" style={{ marginInline: "auto" }}>
            GENIST s'adapte. Parlons de votre activité — on saura faire.
          </p>
          <Link to="/contact" className="g-btn g-btn--primary g-btn--lg g-mt-md">Discuter de mon projet</Link>
        </div>
      </section>
    </>
  );
}
