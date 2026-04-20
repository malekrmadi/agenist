import { Link } from "react-router-dom";
import featCrm from "@/assets/feat-crm.jpg";
import featBilling from "@/assets/feat-billing.jpg";
import featProjects from "@/assets/feat-projects.jpg";
import featAutomation from "@/assets/feat-automation.jpg";
import featFinance from "@/assets/feat-finance.jpg";
import featMailing from "@/assets/feat-mailing.jpg";
import featPilotage from "@/assets/feat-pilotage.jpg";
import "./SubPages.css";

const features = [
  {
    tag: "01 — CRM",
    image: featCrm,
    title: "Gestion des contacts qui ne dort jamais",
    desc: "Centralisez tous vos contacts, leur historique d'interactions, leurs opportunités et leurs documents. Vos commerciaux savent exactement à qui parler, quand, et avec quel angle. Plus aucune relation ne s'éteint faute de suivi.",
    bullets: [
      "Fiche client unifiée (mails, devis, factures, appels)",
      "Segmentation dynamique par secteur, statut, valeur",
      "Pipeline d'opportunités avec scoring",
      "Rappels automatiques de relance",
    ],
  },
  {
    tag: "02 — Ventes",
    image: featBilling,
    title: "Devis & facturation fluides, conformes, signables",
    desc: "Créez un devis professionnel en 2 minutes, transformez-le en facture en 1 clic, programmez les relances automatiques. Vos délais de paiement raccourcissent, votre cash flow respire.",
    bullets: [
      "Modèles de devis personnalisables à votre image",
      "Conversion devis → facture en un clic",
      "Relances automatiques multi-niveaux",
      "Conformité légale française (TVA, mentions, archivage)",
    ],
  },
  {
    tag: "03 — Projets",
    image: featProjects,
    title: "Vision projet, du planning à la rentabilité",
    desc: "Suivez vos projets de bout en bout : tâches, jalons, temps passé, budget consommé. Vos chefs de projet pilotent enfin avec des chiffres réels — pas des intuitions.",
    bullets: [
      "Tâches, sous-tâches, dépendances",
      "Suivi du temps par collaborateur",
      "Budget vs réel en temps réel",
      "Alertes de dépassement automatiques",
    ],
  },
  {
    tag: "04 — Automatisation",
    image: featAutomation,
    title: "Workflows intelligents, sans code",
    desc: "Définissez des règles métier qui déclenchent emails, tâches, alertes ou changements de statut. Libérez vos équipes des tâches répétitives qui les font fuir.",
    bullets: [
      "Déclencheurs sur événement (devis signé, facture impayée…)",
      "Actions enchaînées illimitées",
      "Bibliothèque de workflows prêts à l'emploi",
      "Logs détaillés pour auditer chaque exécution",
    ],
  },
  {
    tag: "05 — Finance",
    image: featFinance,
    title: "Connexion bancaire & rapprochement automatique",
    desc: "Reliez vos comptes bancaires, laissez GENIST réconcilier vos paiements avec vos factures. Votre vue cash devient instantanée, votre comptable vous remercie.",
    bullets: [
      "Synchronisation bancaire sécurisée (DSP2)",
      "Rapprochement automatique facture/paiement",
      "Vue trésorerie en temps réel",
      "Export comptable conforme",
    ],
  },
  {
    tag: "06 — Communication",
    image: featMailing,
    title: "Mailing automatisé qui convertit vraiment",
    desc: "Lancez des campagnes ciblées depuis vos données CRM, créez des séquences de relance commerciale, suivez chaque ouverture. Vos messages atteignent enfin la bonne personne au bon moment.",
    bullets: [
      "Campagnes ciblées sur segments CRM",
      "Séquences de relance multi-touch",
      "Suivi ouvertures et clics intégré aux fiches",
      "Modèles responsive prêts à l'emploi",
    ],
  },
  {
    tag: "07 — Pilotage",
    image: featPilotage,
    title: "Vision globale en un coup d'œil",
    desc: "Tableaux de bord temps réel sur vos KPI clés : chiffre d'affaires, marges, encours, productivité, taux de conversion. Décidez avec des faits, pas des suppositions.",
    bullets: [
      "Dashboards par rôle (DG, commercial, projet, finance)",
      "KPI personnalisables",
      "Exports PDF et Excel en un clic",
      "Comparaisons période / objectifs",
    ],
  },
];

export default function Features() {
  return (
    <>
      <section className="g-page-hero">
        <div className="g-container g-text-center">
          <span className="g-eyebrow">Fonctionnalités</span>
          <h1 className="g-h1">Une plateforme. <span className="g-gold-grad">Sept superpouvoirs.</span></h1>
          <p className="g-lead g-mx-auto" style={{ marginInline: "auto" }}>
            Découvrez en détail chaque module GENIST. Conçu pour s'adapter à votre métier — pas l'inverse.
          </p>
        </div>
      </section>

      <section className="g-section">
        <div className="g-container">
          <div className="g-feature-list">
            {features.map((f, i) => (
              <article key={f.tag} className={`g-feature-row ${i % 2 ? "reverse" : ""}`}>
                <div className="g-feature-row__text">
                  <span className="g-eyebrow">{f.tag}</span>
                  <h2 className="g-h2">{f.title}</h2>
                  <p className="g-lead">{f.desc}</p>
                  <ul className="g-bullets">
                    {f.bullets.map((b) => (
                      <li key={b}>
                        <span className="g-bullets__dot" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="g-feature-row__visual">
                  <div className="g-feature-photo">
                    <img
                      src={f.image}
                      alt={f.title}
                      loading="lazy"
                      width={1280}
                      height={960}
                    />
                    <span className="g-feature-photo__tag">{f.tag.split(" — ")[1]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="g-section g-cta-band">
        <div className="g-container g-text-center">
          <h2 className="g-h2">Prêt à voir GENIST en action sur vos cas réels ?</h2>
          <Link to="/contact" className="g-btn g-btn--primary g-btn--lg g-mt-md">Réserver ma démo</Link>
        </div>
      </section>
    </>
  );
}
