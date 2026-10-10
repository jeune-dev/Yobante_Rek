import { Package, Smartphone, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import appPreview from '../../assets/images/mockup-app-store-rek.webp';

const APP_STORE_URL = 'https://apps.apple.com';
const PLAY_STORE_URL = 'https://play.google.com';

const FEATURES = [
  { icon: Zap, title: 'Simulez votre envoi', description: 'Estimez le coût de votre colis en quelques clics.' },
  { icon: ShieldCheck, title: 'Paiement sécurisé', description: 'Transactions fiables et 100 % sécurisées.' },
  { icon: Package, title: 'Collecte ou point relais', description: 'Choisissez la remise qui vous convient.' },
];

const openStore = (url) => window.open(url, '_blank', 'noopener,noreferrer');

const Applications = () => (
  <section id="apps" className="apps-section">
    <div className="container">
      <div id="app-expedition" className="apps-grid">
        <div className="apps-visual sr-l">
          <img
            src={appPreview}
            alt="Application Yobanté Rek sur l'App Store"
            width="813"
            height="1400"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="apps-content sr-r">
          <p className="apps-chip">
            <Smartphone size={15} strokeWidth={1.8} aria-hidden="true" />
            Application mobile
          </p>

          <h2 className="expedition-title">
            Téléchargez <span>Yobanté dès maintenant !</span>
          </h2>

          <p className="apps-desc">
            Gérez vos envois entre la France et le Sénégal de manière rapide, sécurisée et transparente.
            Simulez votre envoi, payez en ligne depuis une seule application.
          </p>

          <ul className="expedition-features">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li className="expedition-feature" key={title}>
                <span className="expedition-feature-icon"><Icon size={22} strokeWidth={2.2} aria-hidden="true" /></span>
                <strong>{title}</strong>
                <small>{description}</small>
              </li>
            ))}
          </ul>

          <div className="download-buttons">
            <button type="button" className="download-btn" onClick={() => openStore(APP_STORE_URL)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,22c-1.31,0.05-1.73,-0.75-3.23,-0.75c-1.49,0-1.96,0.73,-3.22,0.78c-1.33,0.05-2.29,-1.32-3.13,-2.53C4.37,17.18 3.05,12.35 4.81,9.31c0.88,-1.52 2.45,-2.48 4.16,-2.51c1.3,-0.02 2.53,0.88 3.32,0.88c0.79,0 2.27,-1.07 3.82,-0.91c0.65,0.03 2.47,0.26 3.64,1.98c-0.09,0.06 -2.17,1.28 -2.15,3.81c0.03,3.02 2.65,4.03 2.68,4.04c-0.03,0.07 -0.42,1.44 -1.38,2.83M15.97,4.17C16.63,3.37 17.07,2.28 16.95,1c-1.09,0.04 -2.41,0.72 -3.19,1.63c-0.67,0.77 -1.25,1.88 -1.09,3.14c1.21,0.09 2.47,-0.6 3.3,-1.6" />
              </svg>
              <span><small>Télécharger sur</small><strong>App Store</strong></span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
            <button type="button" className="download-btn" onClick={() => openStore(PLAY_STORE_URL)}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z" />
              </svg>
              <span><small>Disponible sur</small><strong>Google Play</strong></span>
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .apps-section {
        position: relative;
        padding: var(--section-y) 0;
        overflow: hidden;
        background: #fff;
      }

      .apps-grid {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr);
        align-items: center;
        gap: clamp(32px, 5vw, 72px);
        scroll-margin-top: var(--nav-h);
      }

      .apps-visual { display: flex; justify-content: center; }
      .apps-visual img { display: block; width: 100%; max-width: 320px; height: auto; }

      .apps-chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        width: fit-content;
        margin-bottom: 24px;
        padding: 9px 16px;
        border-radius: 999px;
        background: #fff3ca;
        color: #123679;
        font-size: 13px;
        font-weight: 700;
      }

      .expedition-title {
        margin-bottom: 20px;
        color: #103b80;
        font-size: clamp(34px, 2.7vw, 46px);
        font-weight: 900;
        line-height: 1.05;
      }
      .expedition-title span { display: block; color: #f5c518; }

      .apps-desc {
        max-width: 610px;
        margin-bottom: 28px;
        color: #173b72;
        font-size: clamp(15px, 1.35vw, 19px);
        line-height: 1.5;
      }

      .expedition-features {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
        max-width: 660px;
        margin-bottom: 32px;
        list-style: none;
      }
      .expedition-feature { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; color: #123679; }
      .expedition-feature-icon {
        display: grid;
        place-items: center;
        width: 52px;
        height: 52px;
        margin-bottom: 2px;
        border-radius: 50%;
        background: #ffdf45;
        color: #123679;
      }
      .expedition-feature strong { font-size: 14px; font-weight: 800; line-height: 1.2; }
      .expedition-feature small { max-width: 170px; color: #587096; font-size: 13px; line-height: 1.35; }

      .download-buttons { display: flex; gap: 14px; max-width: 580px; }
      .download-btn {
        display: inline-flex;
        flex: 1;
        align-items: center;
        gap: 10px;
        min-height: 66px;
        padding: 9px 16px;
        border: 0;
        border-radius: 11px;
        background: #050505;
        color: #fff;
        text-align: left;
        cursor: pointer;
        transition: transform 0.25s ease, opacity 0.25s ease;
      }
      .download-btn:hover { transform: translateY(-3px); opacity: 0.92; }
      .download-btn span { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.08; }
      .download-btn small { font-size: 10px; font-weight: 500; opacity: 0.88; }
      .download-btn strong { font-size: 18px; font-weight: 700; }
      .download-btn > svg:last-child { margin-left: auto; }

      @media (max-width: 1100px) {
        .expedition-features { grid-template-columns: 1fr; gap: 16px; }
        .expedition-feature { display: grid; grid-template-columns: 46px minmax(0, 1fr); align-items: center; column-gap: 12px; row-gap: 3px; }
        .expedition-feature-icon { grid-row: span 2; width: 42px; height: 42px; margin: 0; }
        .expedition-feature small { max-width: none; }
      }

      @media (max-width: 860px) {
        .apps-grid { grid-template-columns: 1fr; }
        .apps-visual img { max-width: 260px; }
        .expedition-title { font-size: clamp(34px, 8vw, 46px); }
      }

      @media (max-width: 420px) {
        .download-buttons { flex-direction: column; }
        .download-btn { min-height: 60px; }
        .download-btn strong { font-size: 15px; }
      }
    ` }} />
  </section>
);

export default Applications;
