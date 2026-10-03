// src/components/sections/Hero.jsx

import { useState } from 'react';
import { Package, ShoppingBag, Plane, ArrowRight, ShieldCheck, Timer, Tag, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import deliveryPhone from '../../assets/images/mockeup.png';
import deliveryPhone2 from '../../assets/images/mockeup2.png';
import rekHeroImage from '../../assets/images/rek.webp';

const AppStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const PlayStoreIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.37.21.8.22 1.2.04l11.9-6.53-2.58-2.58-10.52 9.07zM20.44 10.2L17.63 8.62 14.75 11.5l2.88 2.87 2.83-1.59c.8-.45.8-1.74-.02-2.18zM1.07 1.43C1.03 1.61 1 1.8 1 2v20c0 .2.03.38.07.56l11.44-11.13L1.07 1.43zM4.38.24L15.25 6.35l-2.58 2.58L2.39.3c.63-.32 1.36-.3 1.99-.06z"/>
  </svg>
);

const Hero = ({ scrollTo, variant = 'rek' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      title: "Expédiez vos colis depuis chez vous !",
      buttonText: "En savoir plus",
      buttonLink: "services",
      image: deliveryPhone2,
      bgColor: "#ffffff",
      textColor: "#1E3A8A",
      statColor: "#1E3A8A",
      labelColor: "rgba(30,58,138,0.65)",
      badgeBg: "#ffffff",
      badgeTextColor: "#1E3A8A",
      dotColor: "rgba(0,0,0,.15)",
      dotActiveColor: "#1E3A8A",
    },
    {
      id: 2,
      title: "Achetez vos marques préférées à prix discount !",
      buttonText: "Explorer",
      buttonLink: "app-boutique",
      image: deliveryPhone,
      bgColor: "#1E3A8A",
      textColor: "#ffffff",
      statColor: "#ffffff",
      labelColor: "rgba(255,255,255,0.65)",
      badgeBg: "rgba(255,255,255,.15)",
      badgeTextColor: "#ffffff",
      dotColor: "rgba(255,255,255,.3)",
      dotActiveColor: "#F5C518",
    },
  ];

  const visibleSlides = slides.filter((slide) => variant === 'rek' ? slide.id === 1 : slide.id === 2);
  const current = visibleSlides[currentSlide] || visibleSlides[0];

  return (
    <section id="hero" className="hero rek-hero">

      {/* BACKGROUND */}
      <motion.div
        className="hero-bg"
        animate={{ background: current.bgColor }}
        transition={{ duration: 0.6 }}
      />
      <div className="hero-glow"></div>

      {/* CONTENT */}
      <div className="hero-container">

        {/* TABS */}
        <div className="hero-tabs" style={{ display: visibleSlides.length > 1 ? undefined : 'none' }}>
          <div className="tabs-wrapper">
            <button className={`tab-btn ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}>
              <Package size={14} strokeWidth={1.8} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
               Yobanté Rek
            </button>
            <button className={`tab-btn ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}>
              <ShoppingBag size={14} strokeWidth={1.8} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
               Yobanté Boutique
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55 }}
          >
            {/* TEXT */}
            <div className="hero-text">
              <div className="hero-badge rek-badge" style={{ background: current.badgeBg }}>
                <span className="badge-dot"></span>
                <span style={{ color: current.badgeTextColor }}>
                  Expédition de colis - Sénégal ↔ France
                </span>
              </div>

              <h1 className="hero-title" style={{ color: current.textColor }}>
                {current.id === 2 ? (
                  <>
                    <span className="title-main">Achetez vos marques</span>
                    <span className="title-brand">préférées</span>
                    <span className="title-slogan">à prix discount !</span>
                  </>
                ) : (
                  <>
                    <span className="rek-title-line">Vos colis <span>Sénégal ↔ France</span></span>
                    <span className="rek-title-line">en toute simplicité !</span>
                  </>
                )}
              </h1>

              {current.id === 1 && (
                <p className="rek-description">
                  Yobante Rek vous accompagne dans l'envoi de vos colis entre le Sénégal et la France.
                  Rapide, sécurisé et à prix compétitif.
                </p>
              )}

              {current.id === 1 && (
                <div className="rek-benefits">
                  <div className="rek-benefit">
                    <span className="rek-benefit-icon"><ShieldCheck size={21} strokeWidth={2} /></span>
                    <span><strong>Sécurité garantie</strong><small>Vos colis entre de bonnes mains</small></span>
                  </div>
                  <div className="rek-benefit">
                    <span className="rek-benefit-icon"><Timer size={21} strokeWidth={2} /></span>
                    <span><strong>Livraison rapide</strong><small>En France et au Sénégal</small></span>
                  </div>
                  <div className="rek-benefit">
                    <span className="rek-benefit-icon"><Tag size={21} strokeWidth={2} /></span>
                    <span><strong>Prix compétitifs</strong><small>Des offres adaptées à vos besoins</small></span>
                  </div>
                </div>
              )}

              {current.id === 1 ? (
                <div className="rek-actions">
                  <button className="hero-btn rek-primary" onClick={() => scrollTo('apps')}>
                    <Smartphone size={17} strokeWidth={2} /> Télécharger l'application
                    <ArrowRight size={16} strokeWidth={2} />
                  </button>
                  <button className="hero-btn rek-secondary" onClick={() => scrollTo('services')}>
                    <Plane size={17} strokeWidth={2} /> Découvrir nos services
                  </button>
                </div>
              ) : (
                <button className="hero-btn" onClick={() => scrollTo(current.buttonLink)}>
                  {current.buttonText}
                  <ArrowRight size={15} strokeWidth={2} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                </button>
              )}

              {/* STORES */}
              <div className="store-buttons">
                <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`store-btn ${current.id === 1 ? 'appstore rek-store' : 'appstore-white'}`}>
                  <AppStoreIcon />
                  <div className="store-text">
                    <small>Télécharger sur</small>
                    <strong>App Store</strong>
                  </div>
                </a>
                <a
                  href="https://play.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className={`store-btn ${current.id === 1 ? 'play-gold rek-store' : 'play-white'}`}
                >
                  <PlayStoreIcon />
                  <div className="store-text">
                    <small>Disponible sur</small>
                    <strong>Google Play</strong>
                  </div>
                </a>
              </div>

            </div>

            {/* IMAGE */}
            <motion.div className="hero-image rek-visual">
              <img
                src={current.id === 1 ? rekHeroImage : current.image}
                alt={current.id === 1 ? 'Livreur Yobante Rek, colis et application mobile' : 'Application mobile'}
                width="1460"
                height="1078"
                decoding="async"
                fetchpriority="high"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="slide-dots">
        {visibleSlides.length > 1 && visibleSlides.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            style={{
              background: currentSlide === index ? current.dotActiveColor : current.dotColor,
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <style>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: rgba(255,255,255,0.12);
          filter: blur(110px);
          border-radius: 50%;
          top: -130px;
          right: -80px;
          animation: floatGlow 8s ease-in-out infinite;
        }

        @keyframes floatGlow {
          0% { transform: translate(0,0); }
          50% { transform: translate(-50px,35px); }
          100% { transform: translate(0,0); }
        }

        .hero-tabs {
          position: absolute;
          top: 108px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
        }

        .tabs-wrapper {
          display: flex;
          gap: 6px;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(16px);
          padding: 5px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
        }

        .tab-btn {
          border: none;
          padding: 10px 20px;
          border-radius: 14px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 700;
          background: transparent;
          color: rgba(255,255,255,0.85);
          transition: all 0.25s cubic-bezier(0.4,0,0.2,1);
          letter-spacing: 0.1px;
        }

        .tab-btn:hover:not(.active) { color: white; background: rgba(255,255,255,0.12); }

        .tab-btn.active {
          background: white;
          color: #1E3A8A;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }

        .hero-container {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1250px;
          padding: 200px 32px 90px;
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
        }

        .hero-text {
          flex: 1;
          max-width: 540px;
          min-height: 490px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 7px 16px;
          border-radius: 999px;
          margin-bottom: 22px;
          backdrop-filter: blur(10px);
          font-size: 13px;
          font-weight: 600;
          width: fit-content;
        }

        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 0 rgba(16,185,129,0.5);
          animation: pulse-dot 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-dot {
          0%   { box-shadow: 0 0 0 0 rgba(16,185,129,0.55); }
          60%  { box-shadow: 0 0 0 7px rgba(16,185,129,0); }
          100% { box-shadow: 0 0 0 0 rgba(16,185,129,0); }
        }

        .hero-title {
          font-size: clamp(34px, 4.5vw, 62px);
          line-height: 1.07;
          font-weight: 900;
          margin-bottom: 26px;
          letter-spacing: -0.5px;
        }

        .title-main,
        .title-context,
        .title-brand,
        .title-slogan {
          display: block;
          width: fit-content;
        }

        .title-main { color: #ffffff; }
        .title-context {
          margin: 0 0 -2px 18%;
          padding: 2px 8px 3px;
          background: #111111;
          color: #ffffff;
          font-size: .42em;
          line-height: 1;
          font-weight: 600;
          letter-spacing: 0;
        }
        .title-line-rek .rek-title-brand {
          margin-left: 18px;
          padding: 0;
          background: transparent;
          color: #ffffff;
        }
        .title-footer {
          display: block;
          width: fit-content;
          margin: 10px 0 0 16%;
          padding: 0;
          background: transparent;
          color: #F5C518;
          font-size: .42em;
          font-weight: 800;
          letter-spacing: .12em;
        }
        .title-footer { display: flex; align-items: center; gap: 8px; }
        .title-footer-ak {
          padding: 6px 16px 7px;
          background: #F5C518;
          color: #1E3A8A;
          border: 3px solid #1E3A8A;
          font-size: 1.65em;
          font-weight: 900;
          letter-spacing: .04em;
        }
        .title-footer-name { padding: 7px 16px 8px; background: #1E3A8A; }
        .rek-title-brand {
          display: inline;
          margin-left: 18px;
          padding: 0;
          background: transparent;
          color: #ffffff;
        }
        .title-line-rek { display: flex; align-items: baseline; width: max-content; max-width: 100%; white-space: nowrap; font-size: .78em; transform: translateX(-24px); }
        .title-colis { color: #ffffff; }
        .rek-title-footer { flex-direction: column; align-items: center; align-self: center; gap: 0; margin: 10px 0 0; }
        .rek-title-footer .title-footer-ak { font-size: 1.35em; }
        .title-brand {
          margin-left: 24%;
          padding: 0 12px 5px;
          background: #F5C518;
          color: #1E3A8A;
          line-height: .88;
          font-weight: 900;
        }
        .title-slogan {
          margin: 4px 0 0 14%;
          padding: 5px 12px 7px;
          background: #F5C518;
          color: #ffffff;
          font-size: .47em;
          line-height: 1;
          font-weight: 900;
          letter-spacing: 0;
        }

        .shipping-methods {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-bottom: 28px;
        }

        .method-card {
          background: white;
          padding: 16px 12px;
          border-radius: 18px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(30,58,138,0.12);
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1px solid rgba(30,58,138,0.06);
        }

        .method-card:hover {
          transform: translateY(-10px) scale(1.04);
          box-shadow: 0 16px 36px rgba(30,58,138,0.18);
          border-color: rgba(30,58,138,0.14);
        }

        .method-icon {
          display: block;
          margin-bottom: 8px;
        }

        .method-name {
          display: block;
          font-weight: 800;
          color: #1E3A8A;
          font-size: 12px;
          letter-spacing: 0.2px;
        }

        .hero-btn {
          border: none;
          padding: 15px 34px;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          background: #F5C518;
          color: #1E3A8A;
          width: fit-content;
          box-shadow: 0 10px 28px rgba(245,197,24,0.38);
          letter-spacing: 0.2px;
        }

        .hero-btn:hover { transform: translateY(-4px) scale(1.03); box-shadow: 0 16px 36px rgba(245,197,24,0.45); }

        .hero-btn.expedition {
          background: #1E3A8A;
          color: #F5C518;
          box-shadow: 0 10px 28px rgba(30,58,138,0.28);
        }

        .hero-btn.expedition:hover { box-shadow: 0 16px 36px rgba(30,58,138,0.38); }

        .store-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .store-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 18px;
          border-radius: 15px;
          text-decoration: none;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          min-width: 165px;
        }

        .store-btn:hover { transform: translateY(-4px) scale(1.03); }

        .store-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .appstore       { background: #1E3A8A; color: white;   box-shadow: 0 6px 18px rgba(30,58,138,0.28); }
        .appstore-white { background: white;   color: #1E3A8A; box-shadow: 0 6px 18px rgba(255,255,255,0.3);  border: 1px solid rgba(255,255,255,0.5); }
        .play-gold  { background: #ffffff; color: #1E3A8A; box-shadow: 0 6px 18px rgba(0,0,0,0.14); }
        .play-white { background: #F5C518; color: #1E3A8A; box-shadow: 0 6px 18px rgba(245,197,24,0.35); }

        .store-btn small { font-size: 10px; opacity: 0.65; }
        .store-btn strong { font-size: 14px; font-weight: 800; letter-spacing: 0.1px; }

        .hero-stats { display: flex; gap: 36px; }

        .stat-number {
          font-size: 26px;
          font-weight: 900;
          display: block;
        }

        .stat-label { font-size: 12px; }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .hero-image::before {
          content: '';
          position: absolute;
          width: 340px; height: 340px;
          border-radius: 50%;
          background: rgba(255,255,255,0.14);
          filter: blur(70px);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          pointer-events: none;
        }

        .hero-image img {
          width: 100%;
          max-width: 400px;
          filter: drop-shadow(0 28px 50px rgba(0,0,0,0.22));
          transform: rotate(-8deg);
          transform-origin: center center;
          position: relative;
          z-index: 1;
        }

        .slide-dots {
          position: absolute;
          bottom: 34px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 10;
        }

        .dot {
          width: 9px;
          height: 9px;
          border: none;
          border-radius: 999px;
          transition: 0.3s;
          cursor: pointer;
        }

        .dot.active { width: 30px; }

        /* �"?�"?�"? RESPONSIVE �"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"?�"? */
        @media (max-width: 1024px) {
          .hero-container { padding: 190px 24px 74px; }
          .hero-content { gap: 28px; }
          .hero-image img { max-width: 320px; }
        }

        @media (max-width: 980px) {
          .hero { min-height: auto; }

          .hero-tabs {
            position: relative;
            top: 0; left: 0; transform: none;
            margin: 0 auto 26px;
            display: flex;
            justify-content: center;
            width: 100%;
          }

          .hero-container { padding: 120px 24px 72px; }

          .hero-content {
            flex-direction: column;
            text-align: center;
            gap: 36px;
          }

          .hero-text {
            max-width: 600px;
            min-height: auto;
            align-items: center;
          }

          .hero-title { font-size: 42px; }

          .title-context { margin-left: 12%; }
          .title-brand { margin-left: 17%; }
          .title-slogan { margin-left: 8%; }
          .title-footer { margin-left: 8%; }
          .rek-title-brand { margin-left: 12px; }
          .title-line-rek { font-size: .68em; transform: translateX(-10px); }
          .rek-title-footer { margin-left: 0; }

          .shipping-methods {
            grid-template-columns: repeat(2,1fr);
            width: 100%;
            max-width: 480px;
          }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 6px);
            max-width: calc(50% - 6px);
            margin: 0 auto;
          }

          .store-buttons { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-image img { max-width: 280px; }
        }

        @media (max-width: 520px) {
          .hero-container { padding: 115px 16px 56px; }
          .hero-title { font-size: 30px; line-height: 1.17; margin-bottom: 20px; }

          .shipping-methods {
            width: 100%; max-width: 320px;
            grid-template-columns: repeat(2,1fr);
            gap: 9px; margin-bottom: 20px;
          }

          .method-card { padding: 12px 8px; border-radius: 14px; }
          .method-name { font-size: 12px; }

          .shipping-methods .method-card:last-child {
            grid-column: span 2;
            width: calc(50% - 4.5px);
            max-width: calc(50% - 4.5px);
            margin: 0 auto;
          }

          .hero-btn { width: 100%; max-width: 320px; padding: 13px 18px; font-size: 15px; margin-bottom: 18px; }

          .store-buttons {
            width: 100%; max-width: 320px;
            flex-direction: column; gap: 10px; margin-bottom: 26px;
          }

          .store-btn { width: 100%; min-height: 56px; }

          .hero-stats { width: 100%; max-width: 320px; justify-content: center; gap: 36px; }
          .stat-number { font-size: 26px; }
          .hero-image img { max-width: 200px; }
        }

        @media (max-width: 380px) {
          .hero-container { padding-left: 12px; padding-right: 12px; }
          .hero-badge { max-width: 100%; text-align: left; font-size: 11px; padding: 7px 12px; }
          .hero-title { font-size: 27px; }
          .shipping-methods { max-width: 290px; }
          .hero-stats { gap: 20px; }
          .stat-number { font-size: 22px; }
          .stat-label { font-size: 11px; }
        }

        .rek-hero { background: #fff; }
        .rek-hero .hero-bg {
          z-index: 0;
          pointer-events: none;
          background: #fff;
        }
        .rek-hero .hero-glow { display: none; }
        .rek-hero .hero-container {
          max-width: 1600px;
          padding: 105px 8.75% 38px;
        }
        .rek-hero .hero-content {
          position: relative;
          min-height: min(720px, calc(100vh - 86px));
          align-items: center;
        }
        .rek-hero .hero-text {
          position: relative;
          z-index: 4;
          flex: 0 0 47%;
          max-width: 700px;
          min-height: 0;
          justify-content: center;
        }
        .rek-hero .hero-badge {
          gap: 9px;
          padding: 8px 14px;
          margin-bottom: 20px;
          border-radius: 999px;
          background: #fff3ca !important;
          color: #10264d;
          font-size: 13px;
        }
        .rek-hero .badge-dot {
          width: 18px;
          height: 18px;
          background: transparent;
          box-shadow: none;
          animation: none;
        }
        .rek-hero .badge-dot::before {
          content: '';
          display: block;
          width: 9px;
          height: 9px;
          margin: 4px;
          border: 2px solid #f5c518;
          border-radius: 3px;
          transform: rotate(45deg);
        }
        .rek-hero .hero-title {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0 0 16px;
          color: #10264d !important;
          font-size: clamp(38px, 3vw, 54px);
          line-height: 1.04;
          letter-spacing: -1.2px;
        }
        .rek-title-line { display: block; width: fit-content; max-width: 100%; }
        @media (min-width: 1280px) {
          .rek-title-line:first-child { white-space: nowrap; }
        }
        .rek-title-line:first-child span { color: #f5bd00; white-space: nowrap; }
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
        }
        .rek-benefit { display: flex; flex-direction: column; gap: 9px; color: #10264d; }
        .rek-benefit-icon {
          display: grid;
          width: 48px;
          height: 48px;
          place-items: center;
          border-radius: 50%;
          background: #fff2c3;
          color: #10264d;
        }
        .rek-benefit strong { display: block; font-size: 13px; font-weight: 800; }
        .rek-benefit small { display: block; max-width: 130px; margin-top: 4px; color: #5b6a82; font-size: 12px; line-height: 1.35; }
        .rek-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; }
        .rek-actions .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 50px;
          margin: 0;
          padding: 0 21px;
          max-width: 100%;
          font-size: 14px;
          white-space: nowrap;
        }
        .rek-primary { background: #f5c518; color: #10264d; }
        .rek-secondary { border: 1.5px solid #183d7d; background: #fff; color: #183d7d; box-shadow: none; }
        .rek-secondary:hover { background: #f5f8fc; box-shadow: none; }
        .rek-hero .store-buttons { gap: 12px; margin-bottom: 0; }
        .rek-hero .store-btn.rek-store {
          min-width: 126px;
          padding: 8px 12px;
          border: 1px solid #303030;
          border-radius: 7px;
          background: #090909;
          color: #fff;
          box-shadow: none;
        }
        .rek-hero .store-btn.rek-store { min-height: var(--tap); }
        .rek-hero .store-btn.rek-store small { font-size: 10px; opacity: 0.8; }
        .rek-hero .store-btn.rek-store strong { font-size: 13px; }
        .rek-hero .hero-image.rek-visual {
          position: absolute;
          inset: 0 min(-8.75vw, calc(660px - 50vw)) 0 50%;
          z-index: 1;
          overflow: hidden;
          margin: 0;
          align-items: stretch;
          justify-content: flex-end;
        }
        .rek-hero .hero-image.rek-visual::before {
          display: block;
          content: '';
          position: absolute;
          inset: 0 auto 0 0;
          width: 54%;
          z-index: 2;
          background: linear-gradient(90deg, #fff 0%, rgba(255,255,255,.98) 55%, rgba(255,255,255,0) 100%);
        }
        .rek-hero .hero-image.rek-visual img {
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          transform: none;
          filter: none;
        }

        @media (max-width: 980px) {
          .rek-hero .hero-bg {
            background: linear-gradient(180deg, #fff 0%, #fff 44%, rgba(255,255,255,.9) 56%, rgba(255,255,255,0) 68%);
          }
          .rek-hero .hero-container { padding: calc(var(--nav-h) + 36px) var(--gutter) 42px; }
          .rek-hero .hero-content { min-height: 0; flex-direction: column; gap: 26px; }
          .rek-hero .hero-text { width: 100%; max-width: 650px; flex: 0 0 auto; }
          .rek-hero .hero-title { font-size: clamp(36px, 6vw, 48px); }
          .rek-description { max-width: 560px; }
          .rek-benefits { width: 100%; max-width: 580px; text-align: left; }
          .rek-hero .hero-image.rek-visual {
            position: relative;
            inset: auto;
            width: calc(100% + var(--gutter) * 2);
            height: min(62vw, 430px);
            min-height: 280px;
            margin: 0 calc(var(--gutter) * -1);
          }
          .rek-hero .hero-image.rek-visual::before { display: none; }
          .rek-hero .hero-image.rek-visual img { object-position: right center; }
        }

        @media (max-width: 520px) {
          .rek-hero .hero-container { padding: calc(var(--nav-h) + 28px) var(--gutter) 32px; }
          .rek-hero .hero-title { font-size: 34px; line-height: 1.08; }
          .rek-badge { font-size: 11px !important; }
          .rek-description { font-size: 14px; margin-bottom: 20px; }
          .rek-benefits { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; margin-bottom: 22px; }
          .rek-benefit { gap: 7px; }
          .rek-benefit-icon { width: 40px; height: 40px; }
          .rek-benefit strong { font-size: 12px; }
          .rek-benefit small { font-size: 11px; }
          .rek-actions { width: 100%; flex-direction: column; gap: 10px; }
          .rek-actions .hero-btn { width: 100%; max-width: 360px; }
          .rek-hero .store-buttons { width: 100%; max-width: 360px; flex-direction: row; justify-content: flex-start; gap: 8px; }
          .rek-hero .store-btn.rek-store { min-width: 0; flex: 1; padding: 8px; }
          .rek-hero .hero-image.rek-visual { height: 300px; min-height: 260px; }
        }

        @media (min-width: 981px) and (max-width: 1279px) {
          .rek-hero .hero-text { flex-basis: 50%; }
          .rek-hero .hero-image.rek-visual { left: 56%; }
          .rek-hero .hero-image.rek-visual::before { width: 22%; }
          .rek-hero .hero-image.rek-visual img { object-position: 24% center; }
        }

      `}</style>
    </section>
  );
};

export default Hero;

