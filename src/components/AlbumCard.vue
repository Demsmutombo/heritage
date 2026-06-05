<script setup>
import { useI18n } from 'vue-i18n'

defineProps({
  album: { type: Object, required: true },
})

const { tm } = useI18n({ useScope: 'global' })
</script>

<template>
  <article class="card-hover group flex flex-col overflow-hidden border border-neutral-200 bg-white">
    <div class="image-zoom relative">
      <img :src="album.cover" :alt="album.title" class="aspect-square w-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <span class="absolute bottom-4 left-4 text-5xl font-black text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
        {{ album.year }}
      </span>
    </div>
    <div class="flex flex-1 flex-col p-6">
      <p class="font-serif text-xs italic text-neutral-400">{{ tm('albumCard.album') }}</p>
      <h3 class="mt-2 text-lg font-bold uppercase tracking-wide text-black">{{ album.title }}</h3>
      <p class="mt-3 text-sm leading-relaxed text-neutral-500">{{ album.description }}</p>

      <div v-if="album.hits?.length" class="mt-4">
        <p class="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{{ tm('albumCard.famousTracks') }}</p>
        <ul class="mt-2 flex flex-wrap gap-2">
          <li
            v-for="hit in album.hits"
            :key="hit"
            class="border border-neutral-200 px-2 py-1 text-xs text-neutral-600 transition-colors group-hover:border-red-200"
          >
            {{ hit }}
          </li>
        </ul>
      </div>

      <a
        v-if="album.youtubeId"
        :href="`https://www.youtube.com/watch?v=${album.youtubeId}`"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-auto flex items-center justify-center gap-2 bg-red-600 py-4 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 group-hover:shadow-lg"
      >
        <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
        {{ tm('albumCard.listen') }}
      </a>
    </div>
  </article>
</template>
