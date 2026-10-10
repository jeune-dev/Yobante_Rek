import { Truck, MessageCircle, Lock, Smartphone, Zap } from 'lucide-react';

const TRUST_ITEMS = [
  { icon: Truck, text: 'Livraison Sénégal ↔ France' },
  { icon: MessageCircle, text: 'Support en ligne' },
  { icon: Lock, text: 'Paiement 100% sécurisé' },
  { icon: Smartphone, text: 'Application iOS & Android' },
  { icon: Zap, text: 'Expédition rapide' },
];

const TrustBar = () => (
  <section className="trust-wrapper" aria-label="Nos engagements">
    <div className="container">
      <ul className="trust-track">
        {TRUST_ITEMS.map(({ icon: Icon, text }) => (
          <li className="trust-item" key={text}>
            <span className="trust-icon"><Icon size={18} strokeWidth={1.9} aria-hidden="true" /></span>
            <span className="trust-text">{text}</span>
          </li>
        ))}
      </ul>
    </div>

    <style dangerouslySetInnerHTML={{ __html: `
      .trust-wrapper {
        position: relative;
        padding: 22px 0;
        border-bottom: 1px solid #E2E8F0;
        background: #fff;
      }

      .trust-wrapper .trust-track {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px 0;
        list-style: none;
      }

      .trust-wrapper .trust-item {
        display: flex;
        flex: 1 1 0;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 4px 16px;
        border-left: 1px solid #E2E8F0;
      }
      .trust-wrapper .trust-item:first-child { border-left: 0; }

      .trust-wrapper .trust-icon {
        display: grid;
        flex-shrink: 0;
        place-items: center;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: #EEF2FF;
        color: #1E3A8A;
      }

      .trust-wrapper .trust-text {
        color: #334155;
        font-size: 13.5px;
        font-weight: 600;
        white-space: nowrap;
      }

      @media (max-width: 1100px) {
        .trust-wrapper .trust-item { padding: 4px 10px; }
        .trust-wrapper .trust-text { font-size: 12.5px; }
      }

      @media (max-width: 900px) {
        .trust-wrapper .trust-track { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px 16px; }
        .trust-wrapper .trust-item { justify-content: flex-start; padding: 0; border-left: 0; }
        .trust-wrapper .trust-item:last-child { grid-column: 1 / -1; justify-content: center; }
        .trust-wrapper .trust-text { white-space: normal; }
      }
    ` }} />
  </section>
);

export default TrustBar;
