import { Plane, ArrowRight, ShieldCheck, Timer, Tag, Smartphone } from 'lucide-react';

// Servi depuis public/ (URL stable) pour être préchargé dans index.html.
const HERO_IMAGE = '/images/hero-rek.webp';
const APP_STORE_URL = 'https://apps.apple.com';
const PLAY_STORE_URL = 'https://play.google.com';

const AppStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z" />
  </svg>
);

const BENEFITS = [
  { icon: ShieldCheck, title: 'Sécurité garantie', text: 'Vos colis entre de bonnes mains' },
  { icon: Timer, title: 'Livraison rapide', text: 'En France et au Sénégal' },
  { icon: Tag, title: 'Prix compétitifs', text: 'Des offres adaptées à vos besoins' },
];

const Hero = ({ scrollTo }) => (
  <section id="hero" className="hero rek-hero">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-badge">
            <span className="badge-mark" aria-hidden="true" />
            Expédition de colis - Sénégal ↔ France
          </p>

          <h1 className="hero-title">
            <span className="rek-title-line">Vos colis <span>Sénégal ↔ France</span></span>
            <span className="rek-title-line">en toute simplicité !</span>
          </h1>

          <p className="rek-description">
            Yobante Rek vous accompagne dans l'envoi de vos colis entre le Sénégal et la France.
            Rapide, sécurisé et à prix compétitif.
          </p>

          <ul className="rek-benefits">
            {BENEFITS.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rek-benefit">
                <span className="rek-benefit-icon"><Icon size={21} strokeWidth={2} aria-hidden="true" /></span>
                <span><strong>{title}</strong><small>{text}</small></span>
              </li>
            ))}
          </ul>

          <div className="rek-actions">
            <button type="button" className="hero-btn rek-primary" onClick={() => scrollTo('apps')}>
              <Smartphone size={17} strokeWidth={2} aria-hidden="true" /> Télécharger l'application
              <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
            </button>
            <button type="button" className="hero-btn rek-secondary" onClick={() => scrollTo('services')}>
              <Plane size={17} strokeWidth={2} aria-hidden="true" /> Découvrir nos services
            </button>
          </div>

          <div className="store-buttons">
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">
              <AppStoreIcon />
              <span className="store-text"><small>Télécharger sur</small><strong>App Store</strong></span>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">
              <PlayStoreIcon />
              <span className="store-text"><small>Disponible sur</small><strong>Google Play</strong></span>
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img
            src={HERO_IMAGE}
            alt="Application Yobanté Rek pour l'envoi de colis entre la France et le Sénégal"
            width="1203"
            height="793"
            decoding="async"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .rek-hero {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: calc(100vh - var(--nav-h));
        min-height: calc(100svh - var(--nav-h));
        margin-top: var(--nav-h);
        scroll-margin-top: var(--nav-h);
        overflow: hidden;
        background: #fff;
      }

      .rek-hero .hero-container {
        position: relative;
        z-index: 5;
        width: 100%;
        max-width: none;
        padding: 40px clamp(var(--gutter), 5vw, 96px) 38px;
      }

      .rek-hero .hero-content {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 48px;
        min-height: min(720px, calc(100vh - var(--nav-h) - 62px));
      }

      .rek-hero .hero-text {
        position: relative;
        z-index: 4;
        display: flex;
        flex: 0 0 47%;
        flex-direction: column;
        justify-content: center;
        max-width: 700px;
      }

      .rek-hero .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 9px;
        width: fit-content;
        margin-bottom: 20px;
        padding: 8px 14px;
        border-radius: 999px;
        background: #fff3ca;
        color: #10264d;
        font-size: 13px;
        font-weight: 600;
      }
      .badge-mark {
        flex-shrink: 0;
        width: 9px;
        height: 9px;
        margin: 0 4px;
        border: 2px solid #f5c518;
        border-radius: 3px;
        transform: rotate(45deg);
      }

      .rek-hero .hero-title {
        display: flex;
        flex-direction: column;
        margin: 0 0 16px;
        color: #10264d;
        font-size: clamp(38px, 3vw, 54px);
        font-weight: 900;
        line-height: 1.04;
        letter-spacing: -1.2px;
      }
      .rek-title-line { display: block; width: fit-content; max-width: 100%; }
      .rek-title-line:first-child span { color: #f5bd00; white-space: nowrap; }
      @media (min-width: 1280px) {
        .rek-title-line:first-child { white-space: nowrap; }
      }

      .rek-description {
        max-width: 470px;
        margin: 0 0 26px;
        color: #65738b;
        font-size: 16px;
        line-height: 1.5;
      }

      .rek-benefits {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        max-width: 580px;
        margin-bottom: 28px;
        list-style: none;
      }
      .rek-benefit { display: flex; flex-direction: column; gap: 9px; color: #10264d; }
      .rek-benefit-icon {
        display: grid;
        place-items: center;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: #fff2c3;
        color: #10264d;
      }
      .rek-benefit strong { display: block; font-size: 13px; font-weight: 800; }
      .rek-benefit small { display: block; max-width: 130px; margin-top: 4px; color: #5b6a82; font-size: 12px; line-height: 1.35; }

      .rek-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
      .rek-hero .hero-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 9px;
        max-width: 100%;
        min-height: 50px;
        padding: 0 21px;
        border: none;
        border-radius: 999px;
        font-size: 14px;
        font-weight: 800;
        white-space: nowrap;
        cursor: pointer;
        transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.28s ease, background 0.2s ease;
      }
      .rek-primary { background: #f5c518; color: #10264d; box-shadow: 0 10px 28px rgba(245, 197, 24, 0.38); }
      .rek-primary:hover { transform: translateY(-2px); box-shadow: 0 16px 36px rgba(245, 197, 24, 0.45); }
      .rek-hero .rek-secondary { border: 1.5px solid #183d7d; background: #fff; color: #183d7d; }
      .rek-secondary:hover { background: #f5f8fc; }

      .rek-hero .store-buttons { display: flex; flex-wrap: wrap; gap: 12px; }
      .rek-hero .store-btn {
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 126px;
        min-height: var(--tap);
        padding: 8px 12px;
        border: 1px solid #303030;
        border-radius: 7px;
        background: #090909;
        color: #fff;
        text-decoration: none;
        transition: transform 0.28s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .rek-hero .store-btn:hover { transform: translateY(-2px); }
      .store-text { display: flex; flex-direction: column; line-height: 1.1; }
      .store-text small { font-size: 10px; opacity: 0.8; }
      .store-text strong { font-size: 13px; font-weight: 800; letter-spacing: 0.1px; }

      .rek-hero .hero-image {
        position: absolute;
        inset: 0 calc(clamp(var(--gutter), 5vw, 96px) * -1) 0 42%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
      }
      .rek-hero .hero-image::before {
        content: '';
        position: absolute;
        inset: 0 auto 0 0;
        z-index: 2;
        width: 12%;
        background: linear-gradient(90deg, #fff 0%, rgba(255, 255, 255, 0) 100%);
        pointer-events: none;
      }
      .rek-hero .hero-image img {
        display: block;
        width: 100%;
        height: 100%;
        max-height: 700px;
        object-fit: contain;
        object-position: right center;
        transform: scale(1.04);
        transform-origin: right center;
      }

      @media (min-width: 981px) and (max-width: 1279px) {
        .rek-hero .hero-text { flex-basis: 52%; }
        .rek-hero .hero-image { left: 52%; }
      }

      @media (max-width: 980px) {
        .rek-hero { min-height: auto; }
        .rek-hero .hero-container { padding: 44px var(--gutter) 42px; }
        .rek-hero .hero-content { flex-direction: column; gap: 26px; min-height: 0; text-align: center; }
        .rek-hero .hero-text { flex: 0 0 auto; align-items: center; width: 100%; max-width: 650px; }
        .rek-hero .hero-title { font-size: clamp(36px, 6vw, 48px); }
        .rek-description { max-width: 560px; }
        .rek-benefits { width: 100%; text-align: left; }
        .rek-actions, .rek-hero .store-buttons { justify-content: center; }
        .rek-hero .hero-image {
          position: relative;
          inset: auto;
          justify-content: center;
          width: 100%;
          height: auto;
        }
        .rek-hero .hero-image::before { display: none; }
        .rek-hero .hero-image img {
          width: 100%;
          max-width: 680px;
          height: auto;
          max-height: none;
          transform: none;
          -webkit-mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 82%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, #000 12%, #000 82%, transparent 100%);
        }
      }

      @media (max-width: 520px) {
        .rek-hero .hero-container { padding: 36px var(--gutter) 32px; }
        .rek-hero .hero-title { font-size: 34px; line-height: 1.08; }
        .rek-hero .hero-badge { font-size: 11px; }
        .rek-description { margin-bottom: 20px; font-size: 14px; }
        .rek-benefits { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px 12px; width: 100%; max-width: 360px; margin: 0 auto 24px; }
        .rek-benefit { align-items: center; gap: 8px; text-align: center; }
        .rek-benefit:last-child { grid-column: 1 / -1; }
        .rek-benefit-icon { flex-shrink: 0; width: 40px; height: 40px; }
        .rek-benefit strong { font-size: 13px; }
        .rek-benefit small { max-width: 160px; margin: 2px auto 0; font-size: 12px; }
        .rek-actions { flex-direction: column; align-items: center; gap: 10px; width: 100%; }
        .rek-hero .hero-btn { width: 100%; max-width: 360px; }
        .rek-hero .store-buttons { flex-wrap: nowrap; gap: 8px; width: 100%; max-width: 360px; margin-inline: auto; }
        .rek-hero .store-btn { flex: 1; min-width: 0; padding: 8px; }
      }
    ` }} />
  </section>
);

export default Hero;
