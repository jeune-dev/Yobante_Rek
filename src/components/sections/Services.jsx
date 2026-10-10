import { useCallback } from "react";
import rekLogo from "../../assets/images/Logo Yobante Rek.webp";
import { Mail, Package, Truck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    id: "create",
    num: "01",
    title: "Remplissez le formulaire",
    desc: "Renseignez les informations de votre colis sur notre site ou via l'application."
  },
  {
    id: "pay",
    num: "02",
    title: "Payez en ligne",
    desc: "Choisissez votre mode de paiement : en ligne, à la collecte ou à la livraison."
  },
  {
    id: "deliver",
    num: "03",
    title: "Nous livrons votre colis",
    desc: "Le colis est livré à l'adresse de votre choix."
  }
];

const PRICING_PLANS = [
  {
    id: "docs",
    icon: <Mail size={30} strokeWidth={1.5} color="#1E3A8A" />,
    name: "Documents",
    price: "Tarif fixe",
    desc: "Lettres, documents administratifs, courriers",
    features: ["Poids inférieur à 500g"],
    button: "Effectuez un envoi",
    type: "default"
  },
  {
    id: "colis10",
    icon: <Package size={30} strokeWidth={1.5} color="#1E3A8A" />,
    name: "Produit max 30kg",
    price: "Devis",
    desc: "Vêtements, chaussures, Électronique légère...",
    features: ["Jusqu'à 30 kilos"],
    button: "Obtenir un devis",
    type: "popular"
  },
  {
    id: "colis20",
    icon: <Truck size={30} strokeWidth={1.5} color="#1E3A8A" />,
    name: "Gros colis",
    price: "Devis",
    desc: "Gros colis, électroménagers, mobiliers...",
    features: ["Collecte à domicile"],
    button: "Obtenir un devis",
    type: "default"
  }
];

const Services = ({ scrollTo }) => {
  const handleClick = useCallback(() => { scrollTo("contact"); }, [scrollTo]);

  return (
    <section id="services" className="section">

      <div className="container">

        {/* HEADER */}
        <div className="section-header sr">
          <h2 className="section-tag">
            <span className="tag-line"></span>
            Nos services
          </h2>
        </div>

        {/* ===== EXPEDITION ===== */}
        <div className="service-card-wrapper glass-card sr expedition-service">

          <div className="card-left yellow-main">
            <div className="card-title-row">
              <div className="card-icon-circle blue-bg">
                <Package size={28} strokeWidth={1.5} color="white" />
              </div>
              <div>
                <h3 className="card-main-title blue-text">Expédiez votre colis</h3>
              </div>
            </div>

            {/* Comment ça marche */}
            <div className="inner-section">
              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                COMMENT ÇA MARCHE ?
              </div>
              <div className="steps-row">
                {STEPS.map((step, i) => (
                  <div key={step.id} className="step-wrapper">
                    <div className="step-card white-card">
                      <div className="step-num blue-bg">Étape {i + 1}</div>
                      <p className="step-title blue-text">{step.title}</p>
                      <p className="step-desc dark-text">{step.desc}</p>
                    </div>
                    {i < STEPS.length - 1 && <div className="step-arrow"><ArrowRight size={22} strokeWidth={2.5} className="blue-text" /></div>}
                  </div>
                ))}
              </div>
            </div>

            {/* Nos tarifs */}
            <div className="inner-section">
              <div className="inner-tag blue-text">
                <span className="inner-tag-line blue-bg"></span>
                NOS TARIFS
              </div>
              <div className="pricing-row">
                {PRICING_PLANS.map((plan) => (
                  <div
                    key={plan.id}
                    className={`pricing-card ${plan.type === "popular" ? "popular-card" : "white-card"}`}
                  >
                    {plan.type === "popular" && (
                      <div className="popular-badge">LE + POPULAIRE</div>
                    )}
                    <div className="plan-icon-container">{plan.icon}</div>
                    <h4 className="plan-name blue-text">{plan.name}</h4>
                    <p className="plan-price-label">{plan.price}</p>
                    <div className="plan-details-box">
                      <p className="plan-desc">{plan.desc}</p>
                      {plan.features.map((f, i) => (
                        <p key={i} className="plan-feature">{f}</p>
                      ))}
                    </div>
                    <button className="plan-btn" onClick={handleClick}>{plan.button}</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT promo expédition */}
          <div className="card-right promo-side">
            <div className="promo-box expedition-gradient">
              <img src={rekLogo} alt="Yobanté Rek" className="promo-logo" width="150" height="150" loading="lazy" decoding="async" />
              <p className="promo-desc expedition-desc">
                Envoyez vos colis entre la France et le Sénégal, dans les deux sens, avec collecte à domicile ou dépôt en point relais.
              </p>
              <button className="promo-btn expedition-btn" onClick={() => scrollTo("app-expedition")}>
                En savoir plus →
              </button>
            </div>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; }

        .section {
          position: relative;
          padding: var(--section-y) 0;
          background:
            #f8fafc;
          overflow: hidden;
        }

        /* HEADER */
        .section .section-header { text-align: center; margin-bottom: clamp(36px, 5vw, 56px); }

        .section .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: var(--fs-eyebrow);
          font-weight: 800;
          text-transform: uppercase;
          color: #1E3A8A;
          letter-spacing: 2px;
          background: rgba(30,58,138,0.06);
          padding: 8px 16px;
          border-radius: 999px;
        }

        .tag-line { width: 20px; height: 2px; background: #F5C518; border-radius: 2px; }

        /* WRAPPERS */
        .service-card-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          border-radius: 30px;
          overflow: hidden;
          align-items: stretch;
          gap: 0;
        }

        .glass-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(255,255,255,0.45);
          box-shadow: 0 20px 60px rgba(30,58,138,0.1), 0 2px 0 rgba(255,255,255,0.8) inset;
        }



        .card-left {
          padding: 38px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .yellow-main { background: #F5C518; }
        .blue-dark-bg { background: #1E3A8A; }

        /* COLORS */
        .blue-text   { color: #1E3A8A; }
        .white-text  { color: white; }
        .gold-text   { color: #F5C518; }
        .dark-text   { color: #475569; }
        .blue-bg     { background: #1E3A8A; }
        .gold-bg     { background: #F5C518; }

        /* CARD TITLE */
        .card-title-row { display: flex; align-items: center; gap: 16px; }

        .card-icon-circle {
          width: 62px; height: 62px;
          border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 8px 22px rgba(0,0,0,0.15);
          flex-shrink: 0;
        }

        .card-main-title {
          font-size: 28px;
          font-weight: 900;
          line-height: 1.1;
        }

        /* INNER */
        .inner-section { display: flex; flex-direction: column; gap: 16px; }

        .inner-tag {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .inner-tag-line { width: 18px; height: 2px; }

        /* STEPS */
        .steps-row { display: flex; gap: 16px; align-items: stretch; width: 100%; }

        .step-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .step-card {
          width: 100%;
          min-height: 200px;
          padding: 26px 16px;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          box-sizing: border-box;
        }

        .white-card {
          background: rgba(255,255,255,0.97);
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .white-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(30,58,138,0.14);
        }


        .step-num {
          height: 30px;
          border-radius: 50px;
          padding: 0 14px;
          width: auto;
          white-space: nowrap;
          margin: 0 auto 12px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 900; color: white;
          flex-shrink: 0;
        }

        .step-num-dark { color: #1E3A8A; }

        .step-title {
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 6px;
          min-height: 36px;
          display: flex; align-items: center; justify-content: center;
          text-align: center;
        }

        .step-desc { font-size: 13px; line-height: 1.6; }


        .step-arrow {
          font-size: 32px; font-weight: 800;
          display: flex; align-items: center;
          user-select: none; flex-shrink: 0;
        }

        /* PRICING */
        .pricing-row {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          align-items: stretch;
        }

        .pricing-card {
          position: relative;
          border-radius: 20px;
          padding: 20px 14px;
          text-align: center;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .popular-card {
          background: #FFFBEB;
          border: 2px solid #1E3A8A;
        }

        .popular-badge {
          position: absolute;
          top: -1px; left: 50%;
          transform: translateX(-50%);
          background: #1E3A8A;
          color: white;
          padding: 4px 28px;
          border-radius: 0 0 14px 14px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.8px;
          z-index: 10;
          white-space: nowrap;
          text-transform: uppercase;
          box-shadow: 0 4px 12px rgba(30,58,138,0.25);
        }

        .plan-icon-container {
          display: flex; align-items: center; justify-content: center;
          margin-bottom: 8px; height: 36px;
        }

        .plan-name { font-size: 15px; font-weight: 900; }

        .plan-price-label {
          margin: 8px 0;
          font-size: 12px; font-weight: 700; color: #0f172a;
        }

        .plan-details-box {
          flex-grow: 1;
          display: flex; flex-direction: column;
          justify-content: flex-start;
          margin-bottom: 14px;
        }

        .plan-desc { font-size: 13px; line-height: 1.5; color: #475569; margin: 0; }
        .plan-feature { margin-top: 8px; font-size: 12px; font-weight: 700; color: #1E3A8A; }

        .plan-btn {
          margin-top: auto;
          width: 100%; border: none;
          min-height: var(--tap);
          padding: 11px; border-radius: 50px;
          background: #1E3A8A;
          color: white;
          font-size: 12px; font-weight: 800; cursor: pointer;
          flex-shrink: 0;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(30,58,138,0.25);
          letter-spacing: 0.3px;
        }
        .plan-btn:hover {
          background: #152E70;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(30,58,138,0.35);
        }

        /* PROMO */
        .promo-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px;
        }

        .promo-box {
          width: 100%; max-width: 300px;
          border-radius: 24px;
          padding: 36px 26px;
          display: flex; flex-direction: column;
          justify-content: center; align-items: center;
          text-align: center;
          box-sizing: border-box;
          gap: 24px;
          position: relative;
          overflow: hidden;
        }

        .expedition-gradient { background: #F5C518; }

        .promo-logo {
          width: 150px;
          height: auto;
          border-radius: 20px;
          object-fit: contain;
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          flex-shrink: 0;
        }

        .promo-desc {
          font-size: 20px; line-height: 1.55;
          font-weight: 800; margin: 0; color: white;
        }

        .expedition-desc { color: #1E3A8A !important; }

        .promo-btn {
          width: 100%; max-width: 260px;
          border: none; border-radius: 50px;
          min-height: var(--tap);
          padding: 15px 24px;
          font-size: 14px; font-weight: 800;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.28s cubic-bezier(0.22,1,0.36,1);
          letter-spacing: 0.2px;
        }

        .expedition-btn {
          background: #1E3A8A; color: white;
          box-shadow: 0 8px 24px rgba(30,58,138,0.35);
        }
        .expedition-btn:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(30,58,138,0.45); }


        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .service-card-wrapper { grid-template-columns: 1fr; }
          .service-card-wrapper .card-left { order: 2; }
          .service-card-wrapper .promo-side { order: 1; }
          .promo-box { max-width: 560px; }
        }

        @media (max-width: 768px) {
          .card-left { padding: 26px 20px; }
          .service-card-wrapper { border-radius: 22px; }
          .promo-side { padding: 16px; }
          .card-title-row { align-items: center; }
          .step-card { min-height: 0; padding: 22px 12px; }
          .promo-desc { font-size: 17px; }
        }

        @media (max-width: 640px) {
          .steps-row { flex-direction: column; align-items: stretch; gap: 0; }
          .step-wrapper { flex-direction: column; width: 100%; }
          .step-card { width: 100%; height: auto; padding: 20px 16px; }
          .step-title { min-height: 0; }
          .step-arrow { margin: 6px 0; transform: rotate(90deg); }

          .pricing-row { grid-template-columns: 1fr; gap: 14px; }
          .pricing-card { width: 100%; padding: 26px 16px 18px; }

          .promo-box { max-width: 100%; padding: 26px 20px; gap: 16px; }
          .promo-logo { width: 96px; border-radius: 16px; }
          .promo-desc { font-size: 16px; line-height: 1.45; }
        }

        @media (max-width: 480px) {
          .card-main-title { font-size: 22px; }
          .card-left { padding: 22px 14px; gap: 22px; }
          .promo-desc { font-size: 15px; }
          .promo-btn { max-width: 100%; font-size: 14px; padding: 12px 18px; }
          .card-icon-circle { width: 48px; height: 48px; border-radius: 14px; }
        }
      ` }} />
    </section>
  );
};

export default Services;

