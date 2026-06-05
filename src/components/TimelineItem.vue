<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'
import AnimateOnScroll from './AnimateOnScroll.vue'

defineProps({
  event: { type: Object, required: true },
  index: { type: Number, default: 0 },
})

const { el, isVisible } = useScrollReveal({ threshold: 0.08 })
</script>

<template>
  <article
    ref="el"
    class="relative overflow-hidden border-b border-neutral-200/60 px-6 py-24 md:py-32"
    :class="index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'"
  >
    <span
      class="timeline-year pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[7rem] font-black leading-none text-neutral-100 md:text-[11rem] lg:text-[14rem]"
      :class="{ 'scale-110 opacity-30': isVisible }"
      aria-hidden="true"
    >
      {{ event.year }}
    </span>

    <div class="relative z-10 mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2 md:gap-16">
      <AnimateOnScroll
        :animation="index % 2 === 0 ? 'fade-right' : 'fade-left'"
        class="md:order-none"
        :class="index % 2 !== 0 ? 'md:order-2' : ''"
      >
        <div v-if="event.photos?.length" class="image-zoom shadow-xl">
          <img
            :src="event.photos[0]"
            :alt="event.title"
            class="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div v-else class="flex aspect-[4/3] items-center justify-center bg-neutral-100">
          <span class="text-6xl font-black text-neutral-200">{{ event.year }}</span>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll
        :animation="index % 2 === 0 ? 'fade-left' : 'fade-right'"
        :delay="150"
        :class="index % 2 !== 0 ? 'md:order-1' : ''"
      >
        <time class="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          {{ event.date }}
        </time>
        <h3 class="mt-3 text-2xl font-bold text-black md:text-3xl">
          {{ event.title }}
        </h3>
        <p class="mt-5 leading-relaxed text-neutral-500">
          {{ event.description }}
        </p>

        <div v-if="event.videos?.length" class="mt-8 space-y-4">
          <div
            v-for="(videoId, i) in event.videos"
            :key="i"
            class="aspect-video overflow-hidden shadow-lg"
          >
            <iframe
              :src="`https://www.youtube.com/embed/${videoId}`"
              :title="`${event.title} — vidéo ${i + 1}`"
              class="h-full w-full"
              allowfullscreen
            />
          </div>
        </div>

        <div v-if="event.sources?.length" class="mt-6 border-t border-neutral-200 pt-4">
          <p class="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Sources</p>
          <ul class="mt-2 space-y-1">
            <li v-for="source in event.sources" :key="source" class="text-xs text-neutral-400">
              {{ source }}
            </li>
          </ul>
        </div>
      </AnimateOnScroll>
    </div>
  </article>
</template>
