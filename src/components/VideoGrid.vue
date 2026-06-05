<script setup>
import VideoCard from './VideoCard.vue'

defineProps({
  categories: { type: Object, required: true },
})

const categoryLabels = {
  interviews: 'Interviews',
  documentaries: 'Documentaires',
  concerts: 'Concerts',
  clips: 'Clips',
  historical: 'Moments historiques',
}
</script>

<template>
  <div class="space-y-16">
    <div v-for="(videos, key) in categories" :key="key">
      <h3 class="mb-8 text-center text-xl font-bold uppercase tracking-widest text-white">
        {{ categoryLabels[key] || key }}
      </h3>
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <VideoCard
          v-for="video in videos"
          :key="video.id"
          :title="video.title"
          :youtube-id="video.youtubeId"
          :year="video.year"
        />
      </div>
    </div>
  </div>
</template>
