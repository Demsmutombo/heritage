<script setup>
import TimelineItem from './TimelineItem.vue'

defineProps({
  events: { type: Array, required: true },
})
</script>

<template>
  <div class="section-full-bleed">
    <TimelineItem
      v-for="(event, index) in events"
      :key="event.id"
      :event="event"
      :index="index"
    />
  </div>
</template>
