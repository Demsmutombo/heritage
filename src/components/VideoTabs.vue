<script setup>
import { ref, computed } from 'vue'
import VideoCard from './VideoCard.vue'
import AnimateOnScroll from './AnimateOnScroll.vue'

const props = defineProps({
  categories: { type: Object, required: true },
  categoryLabels: { type: Object, default: () => ({}) },
})

const tabs = computed(() =>
  Object.keys(props.categories).map((key) => ({
    key,
    label: props.categoryLabels[key] || key,
    count: props.categories[key].length,
  })),
)

const activeTab = ref(tabs.value[0]?.key || 'clips')
</script>

<template>
  <div>
    <div class="video-tabs" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.key"
        type="button"
        role="tab"
        class="video-tab"
        :class="{ 'video-tab--active': activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
        <span class="video-tab-count">{{ tab.count }}</span>
      </button>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <AnimateOnScroll
        v-for="(video, i) in categories[activeTab]"
        :key="video.id"
        animation="scale"
        :delay="i * 80"
      >
        <VideoCard :title="video.title" :youtube-id="video.youtubeId" :year="video.year" />
      </AnimateOnScroll>
    </div>
  </div>
</template>
