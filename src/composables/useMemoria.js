import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import staticData from '../data/index.js'

export function useMemoria() {
  const { tm, locale } = useI18n({ useScope: 'global' })

  const t = (key) => tm(key)

  const brand = computed(() => tm('brand'))
  const name = computed(() => tm('name'))
  const quote = computed(() => tm('quote'))
  const summary = computed(() => tm('summary'))
  const navigation = computed(() => tm('navigation'))
  const heroImage = staticData.heroImage
  const emblematicPhoto = staticData.emblematicPhoto
  const stats = staticData.stats
  const trailer = computed(() => ({
    ...staticData.trailer,
    title: tm('trailer.title'),
  }))

  const timeline = computed(() =>
    staticData.timeline.map((event) => {
      const texts = tm(`timeline.${event.id}`)
      return {
        ...event,
        title: texts?.title ?? event.title,
        date: texts?.date ?? event.date,
        description: texts?.description ?? event.description,
      }
    }),
  )

  const biography = computed(() => {
    const bio = tm('biography')
    const result = {}
    for (const [key, section] of Object.entries(staticData.biography)) {
      const translated = bio[key]
      result[key] = {
        title: translated?.title ?? section.title,
        blocks: section.blocks.map((block) => ({
          ...block,
          title: translated?.blocks?.[block.id]?.title ?? block.title,
          content: translated?.blocks?.[block.id]?.content ?? block.content,
        })),
      }
    }
    return result
  })

  const albums = computed(() => ({
    albums: staticData.albums.albums.map((album) => ({
      ...album,
      description: tm(`albums.descriptions.${album.id}`) ?? album.description,
    })),
    singles: staticData.albums.singles,
    collaborations: staticData.albums.collaborations,
    participations: staticData.albums.participations,
    labels: {
      singles: tm('albums.singles'),
      collaborations: tm('albums.collaborations'),
      participations: tm('albums.participations'),
    },
  }))

  const gallery = computed(() => {
    const captions = tm('gallery.captions')
    const categories = tm('gallery.categories')
    const result = {}
    for (const [key, photos] of Object.entries(staticData.gallery)) {
      result[key] = photos.map((photo) => ({
        ...photo,
        caption: captions[photo.id] ?? photo.caption,
      }))
    }
    return { photos: result, categoryLabels: categories }
  })

  const videos = computed(() => ({
    data: staticData.videos,
    categoryLabels: tm('videos.categories'),
  }))

  const awards = computed(() =>
    staticData.awards.map((award) => {
      const texts = tm(`awards.${award.id}`)
      return {
        ...award,
        prize: texts?.prize ?? award.prize,
        description: texts?.description ?? award.description,
      }
    }),
  )

  const heritage = computed(() => {
    const h = tm('heritage')
    return {
      musical: h.musical,
      cultural: h.cultural,
      african: h.african,
      youth: h.youth,
      cards: h.cards,
      quotes: h.quotes,
      testimonials: h.testimonials,
      sources: h.sources,
    }
  })

  return {
    locale,
    t,
    tm,
    brand,
    name,
    quote,
    summary,
    navigation,
    heroImage,
    emblematicPhoto,
    stats,
    trailer,
    timeline,
    biography,
    albums,
    gallery,
    videos,
    awards,
    heritage,
  }
}
