<script setup>
defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
})
</script>

<template>
  <article class="group border-l-2 border-neutral-200 py-6 pl-6 transition-all duration-300 hover:border-red-600 hover:pl-8">
    <h3 class="text-lg font-bold text-black transition-colors group-hover:text-red-600">
      {{ title }}
    </h3>
    <p class="mt-3 leading-relaxed text-neutral-500">{{ content }}</p>
  </article>
</template>
