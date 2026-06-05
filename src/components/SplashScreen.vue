<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['complete'])

const ZOOM_IN_MS = 900
const HOLD_MS = 3000
const ZOOM_OUT_MS = 800

const phase = ref('enter')

let timers = []

onMounted(() => {
  document.body.classList.add('splash-active')

  timers = [
    setTimeout(() => { phase.value = 'hold' }, 50),
    setTimeout(() => { phase.value = 'exit' }, ZOOM_IN_MS + HOLD_MS),
    setTimeout(() => {
      document.body.classList.remove('splash-active')
      window.scrollTo({ top: 0, behavior: 'instant' })
      emit('complete')
    }, ZOOM_IN_MS + HOLD_MS + ZOOM_OUT_MS),
  ]
})

onUnmounted(() => {
  timers.forEach(clearTimeout)
  document.body.classList.remove('splash-active')
})
</script>

<template>
  <div
    class="splash-screen"
    :class="`splash-screen--${phase}`"
    role="presentation"
    aria-hidden="true"
  >
    <div class="splash-screen__backdrop" />

    <img
      src="/logowarriors.png"
      alt="Les Warriors"
      class="splash-screen__logo"
      width="480"
      height="320"
      fetchpriority="high"
    />
  </div>
</template>
