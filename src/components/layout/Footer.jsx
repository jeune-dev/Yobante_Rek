import { Zap, Lock, HeadphonesIcon, Smartphone } from 'lucide-react';
import yobanteLogo from '../../assets/images/Logo Yobante Rek - pied de page.webp';

const trustItems = [
  { icon: <Zap size={13} />, label: 'Livraison rapide' },
  { icon: <Lock size={13} />, label: 'Paiement sécurisé' },
  { icon: <HeadphonesIcon size={13} />, label: 'Support en ligne' },
  { icon: <Smartphone size={13} />, label: 'iOS & Android' },
];

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">
        <div className="footer-main">

          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={yobanteLogo} alt="Yobanté Logo" className="logo-img" width="714" height="219" loading="lazy" decoding="async" />
            </div>
            <p className="footer-description">
              Votre spécialiste de l'expédition de colis et du e-commerce
              entre la France et le Sénégal.
            </p>
          </div>

          {/* TRUST + LINKS */}
          <div className="footer-right">
            <div className="footer-trust">
              {trustItems.map(({ icon, label }) => (
                <div className="trust-item" key={label}>
                  <span className="trust-icon">{icon}</span>
                  {label}
                </div>
              ))}
            </div>
            <div className="footer-links">
              <button>Mentions légales</button>
              <button>CGV</button>
              <button>Confidentialité</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="copyright">© 2026 YOBANTÉ. Tous droits réservés.</span>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .footer {
          position: relative; overflow: hidden;
          background: #053d8f;
          color: white; padding-top: 38px;
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }

        .footer-main {
          display: flex; flex-wrap: wrap;
          justify-content: space-between; align-items: flex-start;
          gap: 24px clamp(24px, 5vw, 50px); padding-bottom: 24px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .footer-brand { max-width: 290px; flex: 1 1 220px; }
        .footer-logo  { margin-bottom: 12px; }

        /* Le logo est bleu sur fond transparent : il repose sur une pastille blanche pour rester lisible sur le fond bleu du pied de page. */
        .footer-logo {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 14px;
          background: #fff;
        }
        .footer .logo-img {
          display: block;
          width: auto;
          height: clamp(46px, 13vw, 58px);
          max-width: 100%;
        }

        .footer-description {
          color: rgba(255,255,255,.74);
          line-height: 1.65; font-size: 13px; margin: 0;
        }

        .footer-right {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 12px;
          flex: 1 1 280px;
          min-width: 0;
        }

        .footer-trust {
          display: flex; flex-wrap: wrap; gap: 9px; justify-content: flex-end;
        }

        .footer .trust-item {
          display: flex; align-items: center; gap: 6px;
          padding: 6px 12px; border-radius: 18px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.09);
          color: rgba(255,255,255,.82);
          font-size: 11.5px; font-weight: 700;
          margin-left: 0;
          white-space: normal;
        }

        .trust-icon { display: flex; align-items: center; color: #F5C518; }

        .footer-links { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 0 18px; }

        /* Cible tactile ≥ 44px de haut sans changer l'allure du lien. */
        .footer-links button {
          background: transparent; border: none;
          color: rgba(255,255,255,.75);
          font-size: 12.5px; cursor: pointer;
          min-height: var(--tap); min-width: var(--tap); padding: 0 2px;
          display: inline-flex; align-items: center;
          transition: color 0.2s;
        }

        .footer-links button:hover { color: #fff; }

        .footer-bottom {
          display: flex; justify-content: center; padding: 14px 0;
        }

        .copyright { color: rgba(255,255,255,.66); font-size: 12.5px; text-align: center; }

        @media (max-width: 768px) {
          .footer-main { flex-direction: column; }
          .footer-brand { max-width: 100%; flex: 0 0 auto; }
          .footer-right { align-items: flex-start; flex: 0 0 auto; width: 100%; }
          .footer-trust, .footer-links { justify-content: flex-start; }
        }

        @media (max-width: 480px) {
          .footer-links { gap: 0 16px; }
        }
      ` }} />
    </footer>
  );
};

export default Footer;
