<script setup>
import AnimateOnScroll from './AnimateOnScroll.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  dark: { type: Boolean, default: false },
  align: { type: String, default: 'center' },
})
</script>

<template>
  <AnimateOnScroll animation="fade-up" class="mb-12 md:mb-16">
    <div :class="align === 'center' ? 'text-center' : 'text-left'">
      <p v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</p>
      <h2
        class="section-heading"
        :class="dark ? 'text-white' : 'text-black'"
      >
        {{ title }}
      </h2>
      <div
        class="section-divider"
        :class="align === 'left' ? 'mx-0' : ''"
      />
      <p
        v-if="subtitle"
        class="section-subheading"
        :class="[
          dark ? 'text-neutral-400' : '',
          align === 'left' ? 'mx-0' : '',
        ]"
      >
        {{ subtitle }}
      </p>
    </div>
  </AnimateOnScroll>
</template>
