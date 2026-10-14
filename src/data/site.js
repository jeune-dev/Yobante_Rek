// Informations propres à ce site (YOBANTÉ REK).
// Les blocs Contact, Qui sommes-nous, pied de page et pages légales sont
// identiques sur YOBANTÉ Boutique et YOBANTÉ REK : seul ce fichier change
// d'un site à l'autre. Pour mettre à jour les coordonnées, modifier ici.

import footerLogo from '../assets/images/logo-footer.webp';

const env = import.meta.env;

// Numéros à saisir ici, entre les guillemets (ex. '+33 6 12 34 56 78').
// S'ils restent vides, les variables de déploiement VITE_CONTACT_PHONE et
// VITE_WHATSAPP_NUMBER sont utilisées quand elles existent.
const PHONE = '';
const WHATSAPP = '';

export const site = {
  name: 'YOBANTÉ REK',
  // Identifie le site d'origine des messages envoyés par le formulaire.
  source: 'rek',

  // ── Coordonnées (à compléter) ─────────────────────────────────────────
  // Tant qu'un champ est vide, la carte correspondante affiche « — » dans
  // la section Contact et la ligne est masquée dans le pied de page.
  phone: PHONE || env.VITE_CONTACT_PHONE || '',
  whatsapp: WHATSAPP || env.VITE_WHATSAPP_NUMBER || '',
  email: 'contact@yobanterek.com',
  address: '', // ex. 'Paris, France · Dakar, Sénégal'
  hours: '', // ex. 'Lun – Sam : 9h – 19h' (retour à la ligne possible avec \n)

  // ── Section Contact ───────────────────────────────────────────────────
  contactIntro: 'Notre service client est disponible pour répondre à toutes vos questions.',
  subjects: [
    'Demande de devis - Produit max 30kg',
    'Demande de devis - Gros colis',
    'Envoi de documents',
    'Autres',
  ],

  // ── Section Qui sommes-nous ? ─────────────────────────────────────────
  about:
    "YOBANTÉ REK facilite l'envoi de colis entre le Sénégal et la France grâce à un service fiable, accessible et transparent.",

  // ── Pied de page ──────────────────────────────────────────────────────
  footerLogo,
  footerLogoSize: { width: 538, height: 159 },

  // ── Pages légales ─────────────────────────────────────────────────────
  // Activité décrite dans les conditions générales.
  activity: "l'expédition et le suivi de colis entre la France et le Sénégal",
  // Règles de confidentialité de l'application mobile, publiées sur ce site.
  appPrivacyUrl: '/regle-confidentialite/',
};
