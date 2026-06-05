import artist from '../../data/artist.json'
import biography from '../../data/biography.json'
import timeline from '../../data/timeline.json'
import albums from '../../data/albums.json'
import awards from '../../data/awards.json'
import heritage from '../../data/heritage.json'
import gallery from '../../data/gallery.json'

const timelineTexts = Object.fromEntries(
  timeline.map((e) => [e.id, { title: e.title, date: e.date, description: e.description }]),
)

const awardsTexts = Object.fromEntries(
  awards.map((a) => [a.id, { prize: a.prize, description: a.description }]),
)

const albumDescriptions = Object.fromEntries(
  albums.albums.map((a) => [a.id, a.description]),
)

const galleryCaptions = {}
Object.values(gallery).flat().forEach((p) => {
  galleryCaptions[p.id] = p.caption
})

const biographyTexts = {}
for (const [key, section] of Object.entries(biography)) {
  biographyTexts[key] = {
    title: section.title,
    blocks: Object.fromEntries(
      section.blocks.map((b) => [b.id, { title: b.title, content: b.content }]),
    ),
  }
}

export default {
  lang: {
    fr: 'Français',
    en: 'English',
    es: 'Español',
    pt: 'Português',
    de: 'Deutsch',
    it: 'Italiano',
    select: 'Choisir la langue',
  },
  brand: artist.brand,
  name: artist.name,
  quote: artist.quote,
  summary: artist.summary,
  navigation: artist.navigation,
  hero: { cta: 'Découvrir son histoire' },
  sections: {
    presentation: {
      eyebrow: '01 — Présentation',
      title: 'Qui est Fally Ipupa ?',
      subtitle: "Le parcours d'un artiste qui a redéfini la rumba congolaise",
    },
    stats: {
      title: 'Chiffres clés',
      subtitle: 'Une carrière exceptionnelle en quelques nombres',
    },
    timeline: {
      eyebrow: '02 — Chronologie',
      title: 'Ligne du temps',
      subtitle: 'De Kinshasa aux plus grandes scènes du monde',
    },
    origines: {
      eyebrow: '03 — Origines',
      title: 'Son histoire',
      subtitle: 'Famille, Quartier Latin et carrière solo',
    },
    discographie: {
      eyebrow: '04 — Discographie',
      title: 'Discographie',
      subtitle: 'Les albums qui ont marqué une carrière',
    },
    galerie: {
      eyebrow: '05 — Galerie',
      title: 'Galerie historique',
      subtitle: 'Images à travers les époques',
    },
    archives: {
      eyebrow: '06 — Archives',
      title: 'Archives vidéo',
      subtitle: 'Interviews, documentaires, concerts et clips officiels',
    },
    awards: {
      title: 'Récompenses',
      subtitle: 'Une carrière saluée par le monde entier',
    },
    quotes: {
      title: 'Citations',
      subtitle: 'Les paroles qui marquent',
    },
    heritage: {
      eyebrow: '07 — Héritage',
      title: 'Héritage culturel',
      subtitle: "L'impact qui transforme un artiste en légende",
      testimonials: 'Témoignages',
    },
  },
  stats: {
    careerYears: 'Années de carrière',
    albums: 'Albums',
    awards: 'Distinctions',
    internationalTours: 'Tournées internationales',
  },
  trailer: {
    title: artist.trailer.title,
    iframeTitle: 'Bande-annonce',
  },
  biography: biographyTexts,
  timeline: timelineTexts,
  albums: {
    descriptions: albumDescriptions,
    singles: 'Singles',
    collaborations: 'Collaborations',
    participations: 'Participations',
  },
  gallery: {
    categories: {
      enfance: 'Enfance',
      debuts: 'Débuts',
      quartierLatin: 'Quartier Latin',
      carriereSolo: 'Carrière solo',
      scenesInternationales: 'Scènes internationales',
    },
    captions: galleryCaptions,
  },
  videos: {
    categories: {
      interviews: 'Interviews',
      documentaries: 'Documentaires',
      concerts: 'Concerts',
      clips: 'Clips',
      historical: 'Moments historiques',
    },
  },
  awards: awardsTexts,
  heritage: {
    musical: heritage.musical,
    cultural: heritage.cultural,
    african: heritage.african,
    youth: heritage.youth,
    cards: {
      musical: 'Influence musicale',
      cultural: 'Impact culturel',
      african: 'Rayonnement africain',
      youth: 'Inspiration jeunesse',
    },
    quotes: heritage.quotes,
    testimonials: heritage.testimonials,
    sources: heritage.sources,
  },
  blackBlock: {
    title: 'Son héritage',
    badge: 'Essentiel',
    description: "Découvrez l'influence musicale, l'impact culturel et le rayonnement africain de Fally Ipupa.",
    linkLabel: 'Découvrir',
  },
  albumCard: {
    album: 'Album',
    famousTracks: 'Titres célèbres',
    listen: 'Écouter',
  },
  footer: {
    biography: 'Biographie',
    works: 'Œuvres',
    heritageNav: 'Héritage',
    sources: 'Sources',
    copyright: 'Tous droits réservés',
    nav: {
      biography: [
        { label: 'Présentation', href: '#presentation' },
        { label: 'Les Origines', href: '#origines' },
        { label: 'Chronologie', href: '#timeline' },
      ],
      works: [
        { label: 'Discographie', href: '#discographie' },
        { label: 'Galerie', href: '#galerie' },
        { label: 'Archives vidéo', href: '#videotheque' },
      ],
      heritage: [
        { label: 'Récompenses', href: '#recompenses' },
        { label: 'Citations', href: '#citations' },
        { label: 'Impact', href: '#heritage' },
        { label: 'Sources', href: '#sources' },
      ],
    },
    sectionTitles: {
      biography: 'Biographie',
      works: 'Œuvres',
      heritage: 'Héritage',
    },
  },
  meta: {
    description: "One Memoria Heritage — L'Histoire de Fally Ipupa. Découvrez le parcours exceptionnel de l'artiste congolais à travers une expérience immersive.",
    pageTitle: "Les Warriors — One Memoria Heritage",
  },
}
