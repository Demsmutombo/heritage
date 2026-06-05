<script setup>
import GalleryCard from './GalleryCard.vue'
import AnimateOnScroll from './AnimateOnScroll.vue'

defineProps({
  categories: { type: Object, required: true },
  categoryLabels: { type: Object, default: () => ({}) },
})
</script>

<template>
  <div class="space-y-20">
    <div v-for="(photos, key) in categories" :key="key">
      <AnimateOnScroll animation="fade-up">
        <div class="mb-10 flex items-end gap-6">
          <span class="text-7xl font-black leading-none text-neutral-100 md:text-9xl">
            {{ key.charAt(0).toUpperCase() }}
          </span>
          <div class="pb-2">
            <p class="text-xs font-bold uppercase tracking-[0.2em] text-red-600">
              {{ categoryLabels[key] || key }}
            </p>
            <div class="mt-2 h-0.5 w-12 bg-neutral-300" />
          </div>
        </div>
      </AnimateOnScroll>

      <div class="grid gap-6 sm:grid-cols-2">
        <AnimateOnScroll
          v-for="(photo, i) in photos"
          :key="photo.id"
          animation="scale"
          :delay="i * 100"
        >
          <GalleryCard :src="photo.src" :caption="photo.caption" />
        </AnimateOnScroll>
      </div>
    </div>
  </div>
</template>
