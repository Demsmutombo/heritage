<script setup>
defineProps({
  title: { type: String, required: true },
  youtubeId: { type: String, required: true },
  year: { type: Number, default: null },
})
</script>

<template>
  <article class="card-hover group overflow-hidden border border-neutral-800 bg-neutral-900 transition-colors hover:border-red-600/50">
    <div class="relative aspect-video overflow-hidden">
      <iframe
        :src="`https://www.youtube.com/embed/${youtubeId}`"
        :title="title"
        class="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]"
        allowfullscreen
      />
    </div>
    <div class="border-t border-neutral-800 p-4 transition-colors group-hover:border-red-600/30">
      <h4 class="font-semibold text-white transition-colors group-hover:text-red-400">{{ title }}</h4>
      <p v-if="year" class="mt-1 text-xs font-bold uppercase tracking-wider text-neutral-500">{{ year }}</p>
    </div>
  </article>
</template>
