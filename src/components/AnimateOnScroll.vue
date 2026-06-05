<script setup>
import { useScrollReveal } from '../composables/useScrollReveal'

const props = defineProps({
  animation: {
    type: String,
    default: 'fade-up',
    validator: (v) => ['fade-up', 'fade-down', 'fade-left', 'fade-right', 'scale', 'blur'].includes(v),
  },
  delay: { type: Number, default: 0 },
  duration: { type: Number, default: 800 },
})

const { el, isVisible } = useScrollReveal()
</script>

<template>
  <div
    ref="el"
    class="reveal"
    :class="[`reveal-${animation}`, { 'reveal-visible': isVisible }]"
    :style="{
      transitionDuration: `${duration}ms`,
      transitionDelay: `${delay}ms`,
    }"
  >
    <slot />
  </div>
</template>
