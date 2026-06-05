<script setup>
defineProps({
  src: { type: String, required: true },
  caption: { type: String, default: '' },
})
</script>

<template>
  <figure class="card-hover group overflow-hidden border border-neutral-200 bg-white">
    <div class="image-zoom relative">
      <img :src="src" :alt="caption" class="aspect-[4/3] w-full object-cover" />
      <div class="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/20" />
    </div>
    <figcaption
      v-if="caption"
      class="border-t border-neutral-100 px-4 py-4 text-center text-sm font-bold text-black transition-colors group-hover:bg-neutral-50 group-hover:text-red-600"
    >
      {{ caption }}
    </figcaption>
  </figure>
</template>
