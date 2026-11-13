import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Henna Stainz",
  tagline: "Bridal, party and festive henna for every occasion.",
  category: "Henna artist",
  schemaType: "BeautySalon",
  area: "GTA, ON",
  siteUrl: "https://henna-stainz-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#8a6a4e" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Henna for all occasions",
    headline: "Bridal, party and festive henna, drawn with care",
    subhead: "Henna Stainz creates bridal, party and festive henna in the GTA. Send a message to enquire about your date, or email saniyaakthar123@gmail.com.",
    images: [
      { src: "/images/post-1.jpg", alt: "Festive henna on both hands by Henna Stainz", width: 1080, height: 1440 },
      { src: "/images/post-6.jpg", alt: "Floral henna on both hands by Henna Stainz", width: 1080, height: 1105 },
      { src: "/images/post-2.jpg", alt: "Detailed festive henna by Henna Stainz", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "DM to enquire", href: "https://ig.me/m/henna.stainz" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Bridal, party and festive henna",
    "Henna for all occasions",
    "Serving the GTA",
    "Enquire by Instagram DM or email",
  ],

  about: {
    title: "Welcome to Henna Stainz",
    body: [
      "Henna Stainz is the henna art of Saniya Akthar, creating bridal, party and festive henna in the GTA.",
      "Designs are drawn for celebrations and everyday occasions. Send a message on Instagram to enquire about a date, or email saniyaakthar123@gmail.com.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Floral henna on both hands by Henna Stainz", width: 1080, height: 1105 },
  },

  menu: {
    label: "Services",
    title: "Henna services",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message to ask about current pricing and to check a date.",
    groups: [
      {
        title: "Occasions",
        items: [
          { name: "Bridal henna" },
          { name: "Party henna" },
          { name: "Festive henna" },
          { name: "Henna for all occasions" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent henna",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "Festive henna on both hands by Henna Stainz", caption: "Festive henna", href: "https://www.instagram.com/p/DfncHO_GheZ/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1105, alt: "Floral henna on both hands by Henna Stainz", caption: "Floral henna", href: "https://www.instagram.com/p/DfbY8LuvP0z/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "Detailed festive henna by Henna Stainz", caption: "In the details", href: "https://www.instagram.com/p/DfnbI8ImgCR/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1425, alt: "Henna on both hands by Henna Stainz", caption: "A little henna", href: "https://www.instagram.com/p/DfbYX1enNaD/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1440, alt: "Henna on both hands, outdoors, by Henna Stainz", caption: "Elegant details", href: "https://www.instagram.com/p/DfbaWocnOLG/" },
      { src: "/images/post-3.jpg", width: 1080, height: 1404, alt: "Matching henna designs on both hands by Henna Stainz", caption: "Festive hands", href: "https://www.instagram.com/p/Dfbcf01nAsN/" },
      { src: "/images/post-4.jpg", width: 1080, height: 1043, alt: "Henna covering the palms by Henna Stainz", caption: "Tradition and imagination", href: "https://www.instagram.com/p/DfbcKJvnNO2/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1045, alt: "Intricate henna on the palms by Henna Stainz", caption: "Tradition unfolding", href: "https://www.instagram.com/p/DfbYyoxHNqA/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "henna.stainz",
    embeds: ["https://www.instagram.com/p/DfncHO_GheZ/", "https://www.instagram.com/p/DfbY8LuvP0z/", "https://www.instagram.com/p/DfbYX1enNaD/"],
  },

  order: {
    label: "How to book",
    title: "Enquire in a DM or by email",
    intro: "Send a message on Instagram, or email saniyaakthar123@gmail.com, with your date and the occasion.",
    dmMessage: "Hi Henna Stainz! I would like to enquire.\nDate:\nOccasion (bridal, party, festive or other):",
    headerCtaLabel: "DM to enquire",
    links: [
      { label: "DM to enquire", href: "https://ig.me/m/henna.stainz" },
      { label: "Email saniyaakthar123@gmail.com", href: "mailto:saniyaakthar123@gmail.com" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram, or email saniyaakthar123@gmail.com, with your date and the occasion." },
    { q: "What henna do you offer?", a: "Bridal, party and festive henna, and henna for all occasions." },
    { q: "Where do you work?", a: "Henna Stainz serves the GTA." },
  ],

  contact: {
    title: "Contact and booking",
    area: "the GTA, Ontario",
    email: "saniyaakthar123@gmail.com",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/henna.stainz/" }],
  },

  seo: {
    title: "Henna Stainz | Bridal and festive henna in the GTA",
    description: "Bridal, party and festive henna in the GTA, by Saniya Akthar. Send an Instagram DM to enquire about your date, or email saniyaakthar123@gmail.com.",
    keywords: ["henna artist GTA", "bridal henna GTA", "Henna Stainz"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
