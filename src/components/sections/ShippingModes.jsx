// src/components/sections/ShippingModes.jsx
import { Plane, Ship, Package, ArrowRight } from 'lucide-react';

const MODES = [
  {
    icon: Plane,
    title: 'Fret aérien',
    text: 'La solution pour vos envois urgents et vos colis légers.',
    points: ['Acheminement rapide', 'Suivi de bout en bout'],
  },
  {
    icon: Ship,
    title: 'Fret maritime',
    text: 'Une option économique pour vos colis volumineux et vos gros envois.',
    points: ['Idéal pour les grands volumes', 'Suivi de bout en bout'],
  },
  {
    icon: Package,
    title: 'Colis GP',
    text: 'Une formule souple pour vos envois du quotidien.',
    points: ['Pratique pour les petits colis', 'Suivi de bout en bout'],
  },
];

const ShippingModes = () => (
  <section id="modes-expedition" className="sm-section">
    <div className="container">
      <div className="sec-head sr">
        <span className="sec-eyebrow">Nos modes d'expédition</span>
        <h2 className="sec-title">Choisissez la formule qui vous convient</h2>
        <p className="sec-sub">
          Aérien, maritime ou GP : un mode d'envoi adapté à la taille de votre colis et à vos délais.
        </p>
      </div>

      <div className="sm-grid">
        {MODES.map(({ icon: Icon, title, text, points }, i) => (
          <article key={title} className={`sm-card sr sr-d${i + 1}`}>
            <span className="sm-icon"><Icon size={30} strokeWidth={1.8} /></span>
            <h3>{title}</h3>
            <p>{text}</p>
            <ul>
              {points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="sec-cta sr">
        <a className="sm-btn" href="#contact">
          Demander un renseignement <ArrowRight size={17} strokeWidth={2.2} />
        </a>
      </div>
    </div>

    <style>{`
      .sm-section { padding: var(--section-y) 0; background: linear-gradient(180deg, #f8fbff, #eef4ff); }

      .sm-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
      .sm-card {
        padding: 34px 28px; border-radius: 26px; background: #fff;
        border: 1px solid rgba(30,58,138,.08); box-shadow: 0 8px 34px rgba(30,58,138,.07);
        transition: transform .3s ease, box-shadow .3s ease;
      }
      .sm-card:hover { transform: translateY(-6px); box-shadow: 0 20px 50px rgba(30,58,138,.14); }
      .sm-icon {
        display: grid; place-items: center; width: 64px; height: 64px; margin-bottom: 20px;
        border-radius: 20px; background: #fff3ca; color: #1E3A8A;
      }
      .sm-card h3 { margin: 0 0 8px; color: #1E3A8A; font-size: 21px; font-weight: 900; }
      .sm-card p { margin: 0 0 18px; color: #64748b; font-size: 15px; line-height: 1.65; }
      .sm-card ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; }
      .sm-card li {
        position: relative; padding-left: 28px; color: #334155; font-size: 14px; font-weight: 600;
      }
      .sm-card li::before {
        content: '✓'; position: absolute; left: 0; top: 0; width: 20px; height: 20px;
        display: grid; place-items: center; border-radius: 50%;
        background: #1E3A8A; color: #fff; font-size: 11px; font-weight: 900;
      }

      .sm-btn {
        display: inline-flex; align-items: center; justify-content: center; gap: 10px;
        min-height: var(--tap, 44px); padding: 14px 28px; border-radius: 999px;
        background: #F5C518; color: #1E3A8A; font-weight: 800; font-size: 15px; text-decoration: none;
        box-shadow: 0 10px 26px rgba(245,197,24,.4); transition: transform .25s ease, box-shadow .25s ease;
      }
      .sm-btn:hover { transform: translateY(-3px); box-shadow: 0 16px 34px rgba(245,197,24,.5); }

      @media (max-width: 900px) { .sm-grid { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; } }
      @media (max-width: 480px) { .sm-btn { width: 100%; } }
    `}</style>
  </section>
);

export default ShippingModes;
