<script setup>
import { ref, watch, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollReveal } from '../composables/useScrollReveal'

const props = defineProps({
  stats: { type: Object, required: true },
})

const { tm } = useI18n({ useScope: 'global' })

const labels = computed(() => tm('stats'))

const { el, isVisible } = useScrollReveal({ threshold: 0.3 })
const animatedValues = ref({})
let hasAnimated = false

function animateValue(key, target) {
  const duration = 1200
  const start = performance.now()
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    animatedValues.value[key] = Math.round(target * eased)
    if (progress < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}

watch(isVisible, (v) => {
  if (!v || hasAnimated) return
  hasAnimated = true
  Object.entries(props.stats).forEach(([key, target], i) => {
    setTimeout(() => animateValue(key, target), i * 150)
  })
})
</script>

<template>
  <div ref="el" class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
    <div
      v-for="(value, key, index) in stats"
      :key="key"
      class="stat-animate group border border-neutral-200 bg-white p-6 text-center transition-all duration-300 hover:border-red-600 hover:shadow-lg md:p-8"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <p class="text-4xl font-black text-black transition-colors group-hover:text-red-600 md:text-5xl">
        {{ animatedValues[key] ?? 0 }}
      </p>
      <p class="mt-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500 md:text-xs">
        {{ labels[key] || key }}
      </p>
    </div>
  </div>
</template>
