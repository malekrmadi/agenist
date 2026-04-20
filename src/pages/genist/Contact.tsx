import { useState } from "react";
import "./SubPages.css";

const faqs = [
  {
    q: "Combien de temps pour être opérationnel ?",
    a: "En moyenne 4 semaines : 1 semaine de cadrage, 2 semaines de paramétrage avec vos données, 1 semaine de formation et déploiement.",
  },
  {
    q: "Mes données sont-elles en sécurité ?",
    a: "Hébergement souverain en France, chiffrement au repos et en transit, sauvegardes quotidiennes. Vous restez propriétaire de vos données et pouvez les exporter à tout moment.",
  },
  {
    q: "Faut-il un service informatique pour utiliser GENIST ?",
    a: "Non. GENIST est pensé pour être utilisé par vos équipes métier directement. Notre équipe gère l'installation, la mise à jour et le support technique.",
  },
  {
    q: "Que se passe-t-il si j'arrête mon abonnement ?",
    a: "Vous récupérez l'intégralité de vos données dans des formats ouverts (CSV, PDF). Aucun verrou, aucun chantage à la migration.",
  },
  {
    q: "GENIST remplace-t-il mon comptable ?",
    a: "Non, GENIST l'épaule. Nous générons les exports comptables conformes que votre comptable adore recevoir, et nous automatisons toute la partie facturation/relances.",
  },
];

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="g-page-hero g-page-hero--compact">
        <div className="g-container g-text-center">
          <span className="g-eyebrow">Demande de démo</span>
          <h1 className="g-h1">30 minutes pour voir GENIST <span className="g-gold-grad">sur vos cas réels.</span></h1>
          <p className="g-lead g-mx-auto" style={{ marginInline: "auto" }}>
            Notre équipe vous rappelle sous 24h ouvrées. Aucune carte demandée, aucun engagement.
          </p>
        </div>
      </section>

      <section className="g-section" style={{ paddingTop: 0 }}>
        <div className="g-container">
          <div className="g-contact">
            <aside className="g-contact__side">
              <h3 className="g-h3">Ce qu'il se passe ensuite</h3>
              <ol className="g-steps">
                <li><strong>Premier appel (15 min)</strong><span>Compréhension de vos enjeux et de votre contexte.</span></li>
                <li><strong>Démo personnalisée (45 min)</strong><span>Démonstration sur vos cas d'usage concrets.</span></li>
                <li><strong>Proposition sur mesure</strong><span>Pack métier recommandé, planning et tarif détaillés.</span></li>
              </ol>
              <div className="g-contact__trust">
                <div><strong>4 sem.</strong><span>Mise en route moyenne</span></div>
                <div><strong>24h</strong><span>Délai de rappel</span></div>
                <div><strong>0€</strong><span>Coût de la démo</span></div>
              </div>
            </aside>

            <div className="g-contact__formwrap">
              {submitted ? (
                <div className="g-contact__success">
                  <div className="g-contact__success-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                  </div>
                  <h3 className="g-h3">Message bien reçu.</h3>
                  <p>Nous vous recontactons sous 24h ouvrées pour planifier votre démo.</p>
                </div>
              ) : (
                <form className="g-form" onSubmit={handleSubmit}>
                  <div className="g-form__row">
                    <label>
                      <span>Nom *</span>
                      <input required type="text" name="nom" placeholder="Jean Dupont" />
                    </label>
                    <label>
                      <span>Email pro *</span>
                      <input required type="email" name="email" placeholder="jean@entreprise.fr" />
                    </label>
                  </div>
                  <div className="g-form__row">
                    <label>
                      <span>Téléphone</span>
                      <input type="tel" name="tel" placeholder="06 12 34 56 78" />
                    </label>
                    <label>
                      <span>Entreprise *</span>
                      <input required type="text" name="entreprise" placeholder="Acme SAS" />
                    </label>
                  </div>
                  <div className="g-form__row">
                    <label>
                      <span>Poste</span>
                      <input type="text" name="poste" placeholder="Dirigeant, DAF, COO…" />
                    </label>
                    <label>
                      <span>Secteur</span>
                      <select name="secteur" defaultValue="">
                        <option value="" disabled>Sélectionner…</option>
                        <option>Commerce / Vente</option>
                        <option>Services / Agences</option>
                        <option>Immobilier</option>
                        <option>BTP / CVC</option>
                        <option>RH / Recrutement</option>
                        <option>Associations</option>
                        <option>Autre</option>
                      </select>
                    </label>
                  </div>
                  <label>
                    <span>Nombre de salariés</span>
                    <select name="salaries" defaultValue="">
                      <option value="" disabled>Sélectionner…</option>
                      <option>1 – 5</option>
                      <option>6 – 20</option>
                      <option>21 – 50</option>
                      <option>51 – 200</option>
                      <option>200+</option>
                    </select>
                  </label>
                  <label>
                    <span>Votre besoin (optionnel)</span>
                    <textarea name="besoin" rows={4} placeholder="Quelques mots sur votre contexte et vos enjeux…" />
                  </label>
                  <button type="submit" className="g-btn g-btn--primary g-btn--lg g-form__submit">
                    Demander ma démo
                  </button>
                  <p className="g-form__legal">
                    En soumettant, vous acceptez d'être recontacté par GENIST. Vos données ne seront jamais cédées.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="g-section g-section--cream" id="faq">
        <div className="g-container">
          <div className="g-section-head">
            <span className="g-eyebrow">FAQ</span>
            <h2 className="g-h2">Les réponses aux questions qu'on nous pose le plus.</h2>
          </div>
          <div className="g-faq g-mt-md">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={f.q}
                  className={`g-faq__item ${open ? "is-open" : ""}`}
                  onClick={() => setOpenFaq(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="g-faq__q">
                    {f.q}
                    <span className="g-faq__icon" aria-hidden="true">{open ? "−" : "+"}</span>
                  </span>
                  <span className="g-faq__a"><span>{f.a}</span></span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
