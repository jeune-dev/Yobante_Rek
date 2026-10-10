import { Calculator, PackageCheck, Home } from 'lucide-react';

const STEPS = [
  {
    icon: Calculator,
    title: 'Simulez votre envoi',
    text: 'Estimez le coût de votre colis en quelques clics, avant de vous engager.',
  },
  {
    icon: PackageCheck,
    title: 'Remettez votre colis',
    text: 'Choisissez la collecte à domicile ou le dépôt en point relais.',
  },
  {
    icon: Home,
    title: 'Votre colis est livré',
    text: 'Il est remis à son destinataire, au Sénégal comme en France.',
  },
];

const HowItWorks = () => (
  <section id="comment-ca-marche" className="hiw-section">
    <div className="container">
      <div className="sec-head sr">
        <span className="sec-eyebrow">Comment ça marche</span>
        <h2 className="sec-title">Envoyer un colis en 3 étapes</h2>
        <p className="sec-sub">
          Un parcours simple et transparent entre le Sénégal et la France, de la simulation à la livraison.
        </p>
      </div>

      <ol className="hiw-grid">
        {STEPS.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className={`hiw-card sr sr-d${i + 1}`}>
            <span className="hiw-num">{i + 1}</span>
            <span className="hiw-icon"><Icon size={26} strokeWidth={1.9} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
          </li>
        ))}
      </ol>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .hiw-section { padding: var(--section-y) 0; background: #fff; }

      .hiw-grid {
        list-style: none; margin: 0; padding: 0;
        display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px;
        position: relative;
      }
      .hiw-card {
        position: relative; padding: 34px 24px 28px; border-radius: 24px;
        background: #f8fbff; border: 1px solid rgba(30,58,138,.08);
        box-shadow: 0 8px 30px rgba(30,58,138,.06);
        transition: transform .3s ease, box-shadow .3s ease;
      }
      .hiw-card:hover { transform: translateY(-6px); box-shadow: 0 18px 44px rgba(30,58,138,.12); }
      .hiw-num {
        position: absolute; top: 16px; right: 18px;
        font-size: 44px; font-weight: 900; line-height: 1; color: rgba(245,197,24,.55);
      }
      .hiw-icon {
        display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 18px;
        border-radius: 18px; color: #fff;
        background: #1E3A8A;
        box-shadow: 0 10px 22px rgba(30,58,138,.22);
      }
      .hiw-card h3 { margin: 0 0 8px; color: #1E3A8A; font-size: 18px; font-weight: 800; }
      .hiw-card p { margin: 0; color: #64748b; font-size: 14.5px; line-height: 1.65; }

      @media (max-width: 760px) {
        .hiw-grid { grid-template-columns: 1fr; gap: 16px; }
        .hiw-card { padding: 28px 20px 24px; }
      }
    ` }} />
  </section>
);

export default HowItWorks;
