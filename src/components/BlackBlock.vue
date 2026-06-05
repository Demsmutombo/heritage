<script setup>
import AnimateOnScroll from './AnimateOnScroll.vue'

defineProps({
  title: { type: String, required: true },
  description: { type: String, default: '' },
  badge: { type: String, default: '' },
  linkLabel: { type: String, default: 'Découvrir' },
  linkHref: { type: String, default: '#' },
})
</script>

<template>
  <section class="section-dark section-block section-contained text-center">
    <AnimateOnScroll animation="scale">
      <h2 class="text-3xl font-bold uppercase tracking-wide md:text-5xl">
        {{ title }}
      </h2>
      <span v-if="badge" class="badge-new mt-6">{{ badge }}</span>
      <p v-if="description" class="mx-auto mt-6 max-w-xl text-neutral-400">
        {{ description }}
      </p>
      <a :href="linkHref" class="red-underline mt-10 inline-block text-white transition-colors hover:text-red-400">
        {{ linkLabel }}
      </a>
    </AnimateOnScroll>
  </section>
</template>
