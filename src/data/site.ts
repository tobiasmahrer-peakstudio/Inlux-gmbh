export const company = {
  name: "Inlux GmbH",
  shortName: "Inlux Team",
  founded: 2017,
  address: {
    street: "Hauptstrasse 130",
    zip: "5742",
    city: "Kolliken",
    country: "Schweiz",
    countryCode: "CH",
  },
  phone: "+41 76 435 46 66",
  phoneHref: "tel:+41764354666",
  whatsappNumber: "41764354666",
  social: {
    instagram: "https://instagram.com/inluxteam",
    facebook: "https://facebook.com/inluxhomedesign",
  },
  productionArea: "500 m²",
  positioning: "Intelligente Dekoration, Professioneller Service",
  tagline: "Werbetechnik & Leuchtreklame aus eigener Produktion",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hallo Inlux Team, ich interessiere mich für...";

export type Product = {
  slug: string;
  name: string;
  description: string;
  whatsappMessage: string;
  detailUrl?: string;
  pdfUrl?: string;
};

export const werbetechnikProducts: Product[] = [
  {
    slug: "leuchtreklame",
    name: "Leuchtreklame",
    description:
      "Herstellung in Wunschmassen mit über 30 Modelloptionen — von klassisch bis individuell gestaltet.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für Leuchtreklame.",
    detailUrl: "/werbetechnik/leuchtreklame",
  },
  {
    slug: "wandausleger",
    name: "Wandausleger",
    description:
      "Einseitig oder doppelseitig, aus Chrom, Metall oder Acrylglas — über 50 Modelle zur Auswahl.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für einen Wandausleger.",
    detailUrl: "/werbetechnik/wandausleger",
    pdfUrl: "/downloads/inlux-wandausleger-katalog.pdf",
  },
  {
    slug: "inplex",
    name: "Inplex",
    description: "Effektive Werbelösung für hohe Sichtbarkeit an stark frequentierten Standorten.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für Inplex.",
    detailUrl: "/werbetechnik/inplex",
  },
  {
    slug: "orientierungsschilder",
    name: "Orientierungsschilder",
    description:
      "Wegweiser für Hotel, Restaurant oder Einkaufszentrum — im firmenspezifischen Design.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für Orientierungsschilder.",
    detailUrl: "/werbetechnik/orientierungsschilder",
    pdfUrl: "/downloads/inlux-orientierungsschilder-katalog.pdf",
  },
  {
    slug: "leuchtkasten",
    name: "Leuchtkasten",
    description: "In Wunschmassen gefertigt, mit hoher Druckqualität und gleichmässiger Beleuchtung.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für einen Leuchtkasten.",
    detailUrl: "/werbetechnik/leuchtkasten",
  },
  {
    slug: "lightbox-drehmotor",
    name: "Lightbox mit Drehmotor",
    description: "Wirtschaftliche, auffällige Alternative mit rotierendem Werbeträger.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für eine Lightbox mit Drehmotor.",
    detailUrl: "/werbetechnik/lightbox-drehmotor",
  },
  {
    slug: "metall-logo",
    name: "Metall-Logo",
    description: "2mm Blechzuschnitt mit farbiger Beleuchtung, mit oder ohne Seitenwand.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für ein Metall-Logo.",
    detailUrl: "/werbetechnik/metall-logo",
  },
  {
    slug: "3d-beschriftungen",
    name: "3D-Beschriftungen",
    description: "In verschiedenen Materialien und Farben — für einen markanten Auftritt.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für 3D-Beschriftungen.",
    detailUrl: "/werbetechnik/3d-beschriftungen",
  },
];

export const wanddekorationProducts: Product[] = [
  {
    slug: "mdf-paneele",
    name: "MDF-Paneele",
    description: "Hohe Qualität, stossfest, in über 6 Modellen — für eine hochwertige Wandgestaltung.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für MDF-Paneele.",
    detailUrl: "/wanddekoration/mdf-paneele",
    pdfUrl: "/downloads/inlux-mdf-paneele-katalog.pdf",
  },
  {
    slug: "3d-wand",
    name: "3D-Wand (PVC)",
    description: "Einfache Montage, verschiedene Modelle und Farben für ein plastisches Wandbild.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für eine 3D-Wand.",
    detailUrl: "/wanddekoration/3d-wand",
    pdfUrl: "/downloads/inlux-3d-wand-katalog.pdf",
  },
  {
    slug: "spiegel-beleuchtung",
    name: "Spiegel mit Beleuchtung",
    description: "Wunschmasse, mit oder ohne Beleuchtung, inklusive beleuchteter Logogravur.",
    whatsappMessage: "Hallo Inlux Team, ich interessiere mich für einen Spiegel mit Beleuchtung.",
    detailUrl: "/wanddekoration/spiegel-beleuchtung",
  },
];

export type ProcessStep = {
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    title: "Beratung",
    description: "Unverbindliches Erstgespräch vor Ort — wir klären Wünsche, Masse und Budget.",
  },
  {
    title: "Entwurf",
    description: "2D-Vektorgrafik & 3D-Visualisierung, damit du dein Projekt vorab siehst.",
  },
  {
    title: "Herstellung",
    description: "Produktion in unserer eigenen 500 m² Produktionsstätte in der Schweiz.",
  },
  {
    title: "Montage",
    description: "Termingerechte Montage durch unser eigenes Fachpersonal.",
  },
];

export type Testimonial = {
  name: string;
  company: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Eden Merhawi",
    company: "Swissbraids",
    quote:
      "Sie sind auf alle meine Wünsche und Bedürfnisse eingegangen und haben auch alle Aufträge termingerecht und fachgerecht geliefert und montiert.",
  },
  {
    name: "Esra Ay",
    company: "Beauty by Esra Ay",
    quote: "Schnelle Rückmeldung und hervorragende Materialqualität — gefunden über Instagram.",
  },
  {
    name: "Tajfun Ademi",
    company: "Buchsiauto",
    quote: "3D-Logos und ein unkomplizierter Ablauf von der Beratung bis zur Montage.",
  },
  {
    name: "Marc Berbet",
    company: "Skullpot",
    quote: "Top Preis-Leistungs-Verhältnis bei den Leuchtreklame-Tafeln.",
  },
  {
    name: "Dragana Scheffler",
    company: "E'la Kosmetik",
    quote: "Grosser Spiegel mit Rückbeleuchtung und Chrom-Leuchtbuchstaben — genau wie gewünscht.",
  },
];
