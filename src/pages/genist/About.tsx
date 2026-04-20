import { Link } from "react-router-dom";
import teamCollab from "@/assets/team-collab.jpg";
import "./SubPages.css";

const values = [
  { t: "Clarté", d: "Pas de jargon. Pas de complexité gratuite. Juste ce qui vous fait avancer." },
  { t: "Modularité", d: "Vous activez ce qui sert votre métier — pas ce que la roadmap vous impose." },
  { t: "Proximité", d: "Une équipe française, accessible, qui connaît votre réalité d'entrepreneur." },
  { t: "Performance", d: "Chaque fonctionnalité est pensée pour générer un retour sur investissement mesurable." },
];

const why = [
  { n: "01", t: "Un seul outil au lieu de cinq", d: "Vos données vivent au même endroit. Vos équipes parlent enfin la même langue." },
  { n: "02", t: "Configuré pour votre métier", d: "Packs métiers prêts à l'emploi : opérationnel en quelques semaines, pas en mois." },
  { n: "03", t: "Un éditeur français à votre écoute", d: "Support humain, évolutions co-construites, hébergement souverain." },
  { n: "04", t: "Sans verrou", d: "Basé sur Dolibarr open source : vos données restent les vôtres, toujours." },
];

export default function About() {
  return (
    <>
      <section className="g-page-hero g-page-hero--image">
        <img src={teamCollab} alt="" className="g-page-hero__img" width={1600} height={1200} />
        <div className="g-page-hero__veil" />
        <div className="g-container g-text-center g-page-hero__content">
          <span className="g-eyebrow">À propos</span>
          <h1 className="g-h1">Né d'un constat. Construit pour <span className="g-gold-grad">y répondre.</span></h1>
          <p className="g-lead g-mx-auto" style={{ marginInline: "auto" }}>
            Trop d'entreprises talentueuses sont freinées par leur propre désorganisation.
            GENIST existe pour leur rendre la maîtrise de leur activité.
          </p>
        </div>
      </section>

      <section className="g-section">
        <div className="g-container">
          <div className="g-about-story">
            <div>
              <span className="g-eyebrow">Notre histoire</span>
              <h2 className="g-h2">Le constat</h2>
              <p className="g-lead">
                En accompagnant des dizaines de PME, nous avons vu le même schéma se répéter :
                des dirigeants brillants, des équipes engagées, des produits remarquables — et pourtant
                un quotidien empêché par la dispersion des outils, la perte d'informations, le suivi
                qui s'effrite. Le problème n'était jamais le talent. C'était la <strong>structure</strong>.
              </p>
              <p className="g-lead">
                Nous avons donc construit GENIST : un système d'exploitation conçu pour les PME qui
                veulent passer du chaos opérationnel à un fonctionnement industrialisé, sans renoncer
                à leur agilité.
              </p>
            </div>
            <div className="g-about-mark">
              <div className="g-about-mark__bg" />
              <span className="g-about-mark__quote">«</span>
              <p>
                On ne vend pas un logiciel. On vend du temps retrouvé, des opportunités saisies,
                et une sérénité qui change la vie d'un dirigeant.
              </p>
              <span className="g-about-mark__sign">— L'équipe GENIST</span>
            </div>
          </div>
        </div>
      </section>

      <section className="g-section g-section--dark">
        <div className="g-container">
          <div className="g-grid g-grid--2">
            <div className="g-card g-card--dark g-vision">
              <span className="g-eyebrow">Notre vision</span>
              <h3 className="g-h3">Apporter clarté et efficacité aux PME ambitieuses.</h3>
              <p>
                Nous croyons qu'une PME structurée n'est pas une PME bureaucratisée — c'est une PME
                libérée. Libérée du chaos, elle peut enfin se concentrer sur l'essentiel :
                créer de la valeur pour ses clients.
              </p>
            </div>
            <div className="g-card g-card--dark g-vision">
              <span className="g-eyebrow">Notre mission</span>
              <h3 className="g-h3">Proposer des solutions modulables, accessibles et puissantes.</h3>
              <p>
                Outiller chaque PME française avec un système digne des grandes entreprises,
                sans la complexité ni le budget. Démocratiser l'excellence opérationnelle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="g-section">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Nos valeurs</span>
            <h2 className="g-h2">Ce qui guide chacune de nos décisions.</h2>
          </div>
          <div className="g-grid g-grid--4 g-mt-md">
            {values.map((v) => (
              <div key={v.t} className="g-card">
                <h3 className="g-h3">{v.t}</h3>
                <p style={{ color: "var(--muted)", margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="g-section g-section--cream">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">Pourquoi GENIST</span>
            <h2 className="g-h2">Quatre raisons qui font la différence.</h2>
          </div>
          <div className="g-grid g-grid--2 g-mt-md">
            {why.map((w) => (
              <article key={w.n} className="g-card g-why">
                <span className="g-why__num">{w.n}</span>
                <h3 className="g-h3">{w.t}</h3>
                <p>{w.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="g-section g-cta-band">
        <div className="g-container g-text-center">
          <h2 className="g-h2">Construisons ensemble votre prochaine étape.</h2>
          <Link to="/contact" className="g-btn g-btn--primary g-btn--lg g-mt-md">Demander une démo</Link>
        </div>
      </section>
    </>
  );
}
