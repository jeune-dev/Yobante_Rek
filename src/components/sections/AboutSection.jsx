
const FlagSN = () => (
  <svg className="about-flag" viewBox="0 0 3 2" aria-hidden="true">
    <rect width="1" height="2" fill="#00853F" />
    <rect x="1" width="1" height="2" fill="#FDEF42" />
    <rect x="2" width="1" height="2" fill="#E31B23" />
    <path d="M1.5 0.62l0.11 0.34h0.36l-0.29 0.21 0.11 0.34-0.29-0.21-0.29 0.21 0.11-0.34-0.29-0.21h0.36z" fill="#00853F" />
  </svg>
);

const FlagFR = () => (
  <svg className="about-flag" viewBox="0 0 3 2" aria-hidden="true">
    <rect width="1" height="2" fill="#002395" />
    <rect x="1" width="1" height="2" fill="#fff" />
    <rect x="2" width="1" height="2" fill="#ED2939" />
  </svg>
);

const AboutSection = () => {
  return (
    <section id="about" className="about-section">

      <div className="container">
        <div className="about-inner">

          {/* HEADER */}
          <div className="about-header sr">
            <div className="section-tag">
              <span className="tag-dot"></span>
              À propos
            </div>
            <h2 className="about-title">Qui sommes-nous ?</h2>

            <div className="about-divider"></div>

            <p className="about-description">
              YOBANTÉ REK facilite l'envoi de colis entre le Sénégal et la France grâce à un service fiable, accessible et transparent.
            </p>

            <div className="about-badges">
              <span className="about-badge"><FlagSN />Sénégal</span>
              <span className="about-badge-arrow" aria-hidden="true">↔</span>
              <span className="about-badge"><FlagFR />France</span>
            </div>
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .about-section {
          position: relative; overflow: hidden;
          padding: var(--section-y) 0;
          background: #1E3A8A;
          color: white;
        }


        .about-inner { display: flex; flex-direction: column; }

        .about-header { max-width: 100%; }

        /* TAG */
        .about-section .section-tag {
          display: inline-flex; align-items: center; gap: 10px;
          color: #F5C518; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; margin-bottom: 20px; font-size: 11px;
          background: rgba(245,197,24,0.1);
          padding: 8px 16px; border-radius: 999px;
          border: 1px solid rgba(245,197,24,0.2);
        }

        .tag-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #F5C518;
          box-shadow: 0 0 0 0 rgba(245,197,24,0.4);
          animation: pulse-gold 2.5s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse-gold {
          0%   { box-shadow: 0 0 0 0 rgba(245,197,24,0.5); }
          60%  { box-shadow: 0 0 0 7px rgba(245,197,24,0); }
          100% { box-shadow: 0 0 0 0 rgba(245,197,24,0); }
        }

        .about-title {
          font-size: var(--fs-h2);
          font-weight: 900; line-height: 1.08;
          color: white; margin-bottom: 28px;
          letter-spacing: -0.5px;
        }

        /* Diviseur doré */
        .about-divider {
          width: 64px; height: 4px;
          background: #F5C518;
          border-radius: 4px;
          margin-bottom: 28px;
        }

        .about-description {
          color: rgba(255,255,255,.78);
          font-size: 17px; line-height: 1.85;
          max-width: 720px;
          margin-bottom: 36px;
        }

        /* Badges pays */
        .about-badges {
          display: flex; align-items: center; gap: 14px;
          flex-wrap: wrap;
        }

        .about-badge {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 15px; font-weight: 700;
          letter-spacing: 0.2px;
        }

        .about-badge { display: inline-flex; align-items: center; gap: 10px; }
        .about-flag { width: 22px; height: 15px; border-radius: 3px; box-shadow: 0 0 0 1px rgba(255,255,255,0.25); }

        .about-badge-arrow {
          font-size: 20px; color: #F5C518; font-weight: 800;
        }

        @media (max-width: 768px) {
          .about-description { font-size: 15px; }
        }

        @media (max-width: 520px) {
          .about-title { font-size: 30px; }
          .about-description { font-size: 14px; }
          .about-badges { gap: 10px; }
          .about-badge { font-size: 13px; padding: 8px 14px; }
        }
      ` }} />
    </section>
  );
};

export default AboutSection;
