// Données propres à ce site : tout ce qui change d'un site à l'autre est ici,
// les specs restent identiques.
export const site = {
  name: 'YOBANTÉ REK',
  title: 'YOBANTÉ REK | Expédition de colis Sénégal ↔ France',
  h1: /Vos colis/,
  domain: 'https://www.yobanterek.com',
  source: 'rek',
  subject: 'Autres',
  // Visuel du Hero préchargé dans index.html (élément LCP) ; null si aucun.
  heroPreload: '/images/hero-rek.webp',
  // Sections de la page, dans l'ordre d'affichage.
  sections: ['hero', 'services', 'comment-ca-marche', 'modes-expedition', 'apps', 'faq', 'contact', 'about'],
  // Entrées du menu principal.
  nav: [
    { label: 'Services', id: 'services' },
    { label: 'Applications', id: 'apps' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
    { label: 'Qui sommes-nous ?', id: 'about' },
  ],
  // Boutons d'appel à l'action du Hero et section qu'ils doivent afficher.
  heroCtas: [
    { name: /Télécharger l.application/, target: 'apps' },
    { name: /Découvrir nos services/, target: 'services' },
  ],
  // Exclusions axe documentées : problèmes connus et assumés, JAMAIS des erreurs masquées.
  // Le jaune de la marque sur fond blanc (titre du Hero, « Yobanté dès maintenant ! » en mobile) est
  // sous les 3:1 requis pour un grand texte : décision de design en attente du propriétaire du site.
  axeExclude: ['.rek-title-line:nth-child(1) > span', '.expedition-title > span'],
};
