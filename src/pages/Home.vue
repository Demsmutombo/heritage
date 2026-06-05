<script setup>
import { useI18n } from 'vue-i18n'
import { useMemoria } from '../composables/useMemoria'
import Navbar from '../components/Navbar.vue'
import ScrollProgress from '../components/ScrollProgress.vue'
import HeroSection from '../components/HeroSection.vue'
import SectionNav from '../components/SectionNav.vue'
import SectionWrapper from '../components/SectionWrapper.vue'
import SectionTitle from '../components/SectionTitle.vue'
import AnimateOnScroll from '../components/AnimateOnScroll.vue'
import StatsGrid from '../components/StatsGrid.vue'
import Timeline from '../components/Timeline.vue'
import BiographyTabs from '../components/BiographyTabs.vue'
import GalleryGrid from '../components/GalleryGrid.vue'
import AlbumCard from '../components/AlbumCard.vue'
import VideoTabs from '../components/VideoTabs.vue'
import QuoteCard from '../components/QuoteCard.vue'
import BlackBlock from '../components/BlackBlock.vue'
import Footer from '../components/Footer.vue'

const { tm } = useI18n({ useScope: 'global' })
const {
  brand, name, quote, summary, navigation, heroImage, emblematicPhoto,
  stats, trailer, timeline, biography, albums, gallery, videos, awards, heritage,
} = useMemoria()
</script>

<template>
  <div>
    <ScrollProgress />
    <Navbar :brand-title="brand.title" :links="navigation" />

    <HeroSection
      :name="name"
      :subtitle="brand.subtitle"
      :quote="quote"
      :hero-image="heroImage"
      :cta-label="tm('hero.cta')"
      cta-href="#presentation"
    />

    <SectionNav :links="navigation" />

    <SectionWrapper id="presentation" variant="light">
      <SectionTitle
        :eyebrow="tm('sections.presentation.eyebrow')"
        :title="tm('sections.presentation.title')"
        :subtitle="tm('sections.presentation.subtitle')"
      />

      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <AnimateOnScroll animation="fade-right">
          <blockquote class="border-l-4 border-red-600 pl-6 font-serif text-xl font-bold italic leading-relaxed text-neutral-700 md:text-2xl">
            « {{ quote }} »
          </blockquote>
          <p class="mt-8 leading-relaxed text-neutral-500">{{ summary }}</p>
          <p class="mt-4 text-sm leading-relaxed text-neutral-400">{{ brand.description }}</p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-left" :delay="200">
          <div class="image-zoom shadow-2xl">
            <img :src="emblematicPhoto" :alt="name" class="aspect-[3/4] w-full object-cover" />
          </div>
        </AnimateOnScroll>
      </div>

      <div class="mt-20">
        <SectionTitle
          :title="tm('sections.stats.title')"
          :subtitle="tm('sections.stats.subtitle')"
          align="center"
        />
        <StatsGrid :stats="stats" />
      </div>

      <AnimateOnScroll v-if="trailer?.youtubeId" animation="scale" class="mt-20">
        <div class="overflow-hidden border border-neutral-200 bg-black shadow-2xl">
          <div class="border-b border-neutral-800 px-6 py-4 text-center">
            <p class="font-serif text-sm italic text-neutral-400">{{ brand.title }}</p>
            <h3 class="mt-1 text-lg font-bold text-white">{{ trailer.title }}</h3>
          </div>
          <div class="aspect-video">
            <iframe
              :src="`https://www.youtube.com/embed/${trailer.youtubeId}`"
              :title="tm('trailer.iframeTitle')"
              class="h-full w-full"
              allowfullscreen
            />
          </div>
        </div>
      </AnimateOnScroll>
    </SectionWrapper>

    <SectionWrapper id="timeline" variant="muted" full-width>
      <div class="section-contained">
        <SectionTitle
          :eyebrow="tm('sections.timeline.eyebrow')"
          :title="tm('sections.timeline.title')"
          :subtitle="tm('sections.timeline.subtitle')"
        />
      </div>
      <Timeline :events="timeline" />
    </SectionWrapper>

    <SectionWrapper id="origines" variant="light">
      <SectionTitle
        :eyebrow="tm('sections.origines.eyebrow')"
        :title="tm('sections.origines.title')"
        :subtitle="tm('sections.origines.subtitle')"
      />
      <BiographyTabs :sections="biography" />
    </SectionWrapper>

    <SectionWrapper id="discographie" variant="muted">
      <SectionTitle
        :eyebrow="tm('sections.discographie.eyebrow')"
        :title="tm('sections.discographie.title')"
        :subtitle="tm('sections.discographie.subtitle')"
      />

      <div class="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        <AnimateOnScroll
          v-for="(album, i) in albums.albums"
          :key="album.id"
          animation="fade-up"
          :delay="i * 100"
        >
          <AlbumCard :album="album" />
        </AnimateOnScroll>
      </div>

      <div class="mt-20 grid gap-10 md:grid-cols-3">
        <AnimateOnScroll animation="fade-up">
          <div class="border border-neutral-200 bg-white p-6">
            <h3 class="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-red-600">{{ albums.labels.singles }}</h3>
            <ul class="space-y-3">
              <li
                v-for="single in albums.singles"
                :key="single.title"
                class="flex justify-between border-b border-neutral-100 pb-3 text-sm transition-colors hover:text-red-600"
              >
                <span>{{ single.title }}</span>
                <span class="font-bold text-neutral-400">{{ single.year }}</span>
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" :delay="120">
          <div class="border border-neutral-200 bg-white p-6">
            <h3 class="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-red-600">{{ albums.labels.collaborations }}</h3>
            <ul class="space-y-3">
              <li
                v-for="collab in albums.collaborations"
                :key="collab.title"
                class="flex justify-between border-b border-neutral-100 pb-3 text-sm transition-colors hover:text-red-600"
              >
                <span>{{ collab.title }}</span>
                <span class="font-bold text-neutral-400">{{ collab.year }}</span>
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" :delay="240">
          <div class="border border-neutral-200 bg-white p-6">
            <h3 class="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-red-600">{{ albums.labels.participations }}</h3>
            <ul class="space-y-3">
              <li
                v-for="part in albums.participations"
                :key="part.title"
                class="flex justify-between border-b border-neutral-100 pb-3 text-sm transition-colors hover:text-red-600"
              >
                <span>{{ part.title }}</span>
                <span class="font-bold text-neutral-400">{{ part.year }}</span>
              </li>
            </ul>
          </div>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>

    <SectionWrapper id="galerie" variant="light">
      <SectionTitle
        :eyebrow="tm('sections.galerie.eyebrow')"
        :title="tm('sections.galerie.title')"
        :subtitle="tm('sections.galerie.subtitle')"
      />
      <GalleryGrid :categories="gallery.photos" :category-labels="gallery.categoryLabels" />
    </SectionWrapper>

    <SectionWrapper id="videotheque" variant="accent">
      <SectionTitle
        :eyebrow="tm('sections.archives.eyebrow')"
        :title="tm('sections.archives.title')"
        :subtitle="tm('sections.archives.subtitle')"
        dark
      />
      <VideoTabs :categories="videos.data" :category-labels="videos.categoryLabels" />
    </SectionWrapper>

    <SectionWrapper id="recompenses" variant="muted">
      <SectionTitle
        :title="tm('sections.awards.title')"
        :subtitle="tm('sections.awards.subtitle')"
      />
      <div class="mx-auto max-w-3xl">
        <AnimateOnScroll
          v-for="(award, i) in awards"
          :key="award.id"
          animation="fade-up"
          :delay="i * 80"
        >
          <article class="group border-b border-neutral-200 py-8 text-center transition-colors hover:bg-white">
            <p class="text-3xl font-black text-black transition-colors group-hover:text-red-600">{{ award.year }}</p>
            <h3 class="mt-2 text-lg font-bold">{{ award.prize }}</h3>
            <p class="mx-auto mt-3 max-w-lg text-neutral-500">{{ award.description }}</p>
          </article>
        </AnimateOnScroll>
      </div>
    </SectionWrapper>

    <SectionWrapper id="citations" variant="light">
      <SectionTitle :title="tm('sections.quotes.title')" :subtitle="tm('sections.quotes.subtitle')" />
      <div class="grid gap-6 md:grid-cols-2">
        <AnimateOnScroll
          v-for="(q, i) in heritage.quotes"
          :key="i"
          animation="fade-up"
          :delay="i * 100"
        >
          <QuoteCard :text="q.text" :context="q.context" />
        </AnimateOnScroll>
      </div>
    </SectionWrapper>

    <BlackBlock
      :title="tm('blackBlock.title')"
      :badge="tm('blackBlock.badge')"
      :description="tm('blackBlock.description')"
      :link-label="tm('blackBlock.linkLabel')"
      link-href="#heritage"
    />

    <SectionWrapper id="heritage" variant="dark">
      <SectionTitle
        :eyebrow="tm('sections.heritage.eyebrow')"
        :title="tm('sections.heritage.title')"
        :subtitle="tm('sections.heritage.subtitle')"
        dark
      />

      <div class="grid gap-6 md:grid-cols-2">
        <AnimateOnScroll animation="fade-up">
          <article class="heritage-card">
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-red-500">{{ heritage.cards.musical }}</h3>
            <p class="mt-4 leading-relaxed text-neutral-400">{{ heritage.musical }}</p>
          </article>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" :delay="100">
          <article class="heritage-card">
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-red-500">{{ heritage.cards.cultural }}</h3>
            <p class="mt-4 leading-relaxed text-neutral-400">{{ heritage.cultural }}</p>
          </article>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" :delay="200">
          <article class="heritage-card">
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-red-500">{{ heritage.cards.african }}</h3>
            <p class="mt-4 leading-relaxed text-neutral-400">{{ heritage.african }}</p>
          </article>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-up" :delay="300">
          <article class="heritage-card">
            <h3 class="text-xs font-bold uppercase tracking-[0.2em] text-red-500">{{ heritage.cards.youth }}</h3>
            <p class="mt-4 leading-relaxed text-neutral-400">{{ heritage.youth }}</p>
          </article>
        </AnimateOnScroll>
      </div>

      <div class="mt-20">
        <AnimateOnScroll animation="fade-up">
          <h3 class="text-center text-xl font-bold">{{ tm('sections.heritage.testimonials') }}</h3>
        </AnimateOnScroll>
        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <AnimateOnScroll
            v-for="(testimonial, i) in heritage.testimonials"
            :key="i"
            animation="scale"
            :delay="i * 120"
          >
            <QuoteCard
              :text="testimonial.text"
              :author="testimonial.author"
              :role="testimonial.role"
              dark
            />
          </AnimateOnScroll>
        </div>
      </div>
    </SectionWrapper>

    <Footer
      :brand-title="brand.title"
      :artist-name="name"
      :subtitle="brand.subtitle"
      :tribute="brand.footerTribute"
      :sources="heritage.sources"
    />
  </div>
</template>
