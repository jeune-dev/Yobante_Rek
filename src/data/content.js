// Contenu des sections de YOBANTÉ REK.
// Les composants sont identiques sur YOBANTÉ Boutique et YOBANTÉ REK :
// seul ce fichier (avec site.js) change d'un site à l'autre.

import {
  ArrowRight, Calculator, Home, Lock, Mail, MessageCircle, Package, PackageCheck, Plane, Ship,
  ShieldCheck, Smartphone, Tag, Timer, Truck, Zap,
} from 'lucide-react';
import navLogo from '../assets/images/logo-nav.webp';
import promoLogo from '../assets/images/Logo Yobante Rek.webp';
import appPreview from '../assets/images/mockup-app-store-rek.webp';

export const navbar = {
  logo: navLogo,
  logoSize: { width: 538, height: 159 },
};

export const hero = {
  // 'dark' : visuel sur fond bleu (texte blanc) ; 'light' : visuel sur fond blanc.
  theme: 'light',
  background: '#FFFFFF', // couleur du fond du visuel, pour un raccord invisible
  badge: { icon: Package, label: 'Expédition de colis - Sénégal ↔ France' },
  title: [
    { text: 'Vos colis' },
    { text: 'Sénégal ↔ France', accent: true },
    { text: 'en toute simplicité !' },
  ],
  text: "Yobante Rek vous accompagne dans l'envoi de vos colis entre le Sénégal et la France. Rapide, sécurisé et à prix compétitif.",
  primary: { icon: Smartphone, label: "Télécharger l'application", target: 'apps' },
  secondary: { icon: Plane, label: 'Découvrir nos services', target: 'services' },
  image: { alt: "Application Yobanté Rek pour l'envoi de colis entre la France et le Sénégal" },
  features: [
    { icon: ShieldCheck, title: 'Sécurité garantie', text: 'Vos colis entre de bonnes mains' },
    { icon: Timer, title: 'Livraison rapide', text: 'En France et au Sénégal' },
    { icon: Tag, title: 'Prix compétitifs', text: 'Des offres adaptées à vos besoins' },
  ],
};

export const trust = [
  { icon: Truck, text: 'Livraison Sénégal ↔ France' },
  { icon: MessageCircle, text: 'Support en ligne' },
  { icon: Lock, text: 'Paiement 100% sécurisé' },
  { icon: Smartphone, text: 'Application iOS & Android' },
  { icon: Zap, text: 'Expédition rapide' },
];

export const services = {
  cardId: 'app-rek',
  promo: {
    logo: promoLogo,
    alt: 'Yobanté Rek',
    text: 'Envoyez vos colis entre la France et le Sénégal, dans les deux sens, avec collecte à domicile ou dépôt en point relais.',
    button: { label: 'En savoir plus', target: 'app-expedition' },
  },
  icon: Package,
  title: 'Expédiez votre colis',
  blocks: [
    {
      type: 'steps',
      label: 'Comment ça marche ?',
      items: [
        { title: 'Remplissez le formulaire', text: "Renseignez les informations de votre colis sur notre site ou via l'application." },
        { title: 'Payez en ligne', text: 'Choisissez votre mode de paiement : en ligne, à la collecte ou à la livraison.' },
        { title: 'Nous livrons votre colis', text: "Le colis est livré à l'adresse de votre choix." },
      ],
    },
    {
      type: 'offers',
      label: 'Nos tarifs',
      items: [
        { icon: Mail, name: 'Documents', price: 'Tarif fixe', text: 'Lettres, documents administratifs, courriers', feature: 'Poids inférieur à 500g', button: 'Effectuez un envoi', target: 'contact' },
        { icon: Package, name: 'Produit max 30kg', price: 'Devis', text: 'Vêtements, chaussures, Électronique légère...', feature: "Jusqu'à 30 kilos", button: 'Obtenir un devis', target: 'contact', badge: 'Le + populaire' },
        { icon: Truck, name: 'Gros colis', price: 'Devis', text: 'Gros colis, électroménagers, mobiliers...', feature: 'Collecte à domicile', button: 'Obtenir un devis', target: 'contact' },
      ],
    },
  ],
};

export const howItWorks = {
  id: 'comment-ca-marche',
  eyebrow: 'Comment ça marche',
  title: 'Envoyer un colis en 3 étapes',
  text: 'Un parcours simple et transparent entre le Sénégal et la France, de la simulation à la livraison.',
  steps: [
    { icon: Calculator, title: 'Simulez votre envoi', text: 'Estimez le coût de votre colis en quelques clics, avant de vous engager.' },
    { icon: PackageCheck, title: 'Remettez votre colis', text: 'Choisissez la collecte à domicile ou le dépôt en point relais.' },
    { icon: Home, title: 'Votre colis est livré', text: 'Il est remis à son destinataire, au Sénégal comme en France.' },
  ],
};

export const highlights = {
  id: 'modes-expedition',
  eyebrow: "Nos modes d'expédition",
  title: 'Choisissez la formule qui vous convient',
  text: "Aérien, maritime ou GP : un mode d'envoi adapté à la taille de votre colis et à vos délais.",
  cards: [
    { icon: Plane, title: 'Fret aérien', text: 'La solution pour vos envois urgents et vos colis légers.', points: ['Acheminement rapide'] },
    { icon: Ship, title: 'Fret maritime', text: 'Une option économique pour vos colis volumineux et vos gros envois.', points: ['Idéal pour les grands volumes'] },
    { icon: Package, title: 'Colis GP', text: 'Une formule souple pour vos envois du quotidien.', points: ['Pratique pour les petits colis'] },
  ],
  cta: { label: 'Demander un renseignement', href: '#contact', icon: ArrowRight },
};

export const apps = {
  anchorId: 'app-expedition',
  image: { src: appPreview, width: 813, height: 1400, alt: "Application Yobanté Rek sur l'App Store" },
  chip: { icon: Smartphone, label: 'Application mobile' },
  title: 'Téléchargez',
  titleAccent: 'Yobanté dès maintenant !',
  text: 'Gérez vos envois entre la France et le Sénégal de manière rapide, sécurisée et transparente. Simulez votre envoi, payez en ligne depuis une seule application.',
  features: [
    { icon: Zap, title: 'Simulez votre envoi', text: 'Estimez le coût de votre colis en quelques clics.' },
    { icon: ShieldCheck, title: 'Paiement sécurisé', text: 'Transactions fiables et 100 % sécurisées.' },
    { icon: Package, title: 'Collecte ou point relais', text: 'Choisissez la remise qui vous convient.' },
  ],
  appStoreUrl: 'https://apps.apple.com',
  playStoreUrl: 'https://play.google.com',
};

export const faq = [
  { q: 'Quels objets puis-je envoyer ?', a: 'Vous pouvez envoyer tout objet autorisé par la législation en vigueur au Sénégal et en France, sous réserve des conditions de transport et de douane. Les objets interdits, dangereux, inflammables, illicites ou soumis à restriction ne sont pas acceptés. Pour vérifier un cas particulier, contactez-nous ou écrivez-nous via nos réseaux sociaux.' },
  { q: 'Comment obtenir un devis ?', a: "Téléchargez l'application Yobanté Rêk puis renseignez les informations de votre colis. Selon la catégorie, un devis vous sera transmis rapidement." },
  { q: 'Quels sont les moyens de paiement acceptés ?', a: 'Nous acceptons Orange Money, Wave et la carte bancaire. Les options disponibles sont affichées lors de la validation.' },
];
