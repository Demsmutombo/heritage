<script setup>
defineProps({
  text: { type: String, required: true },
  context: { type: String, default: '' },
  author: { type: String, default: '' },
  role: { type: String, default: '' },
  dark: { type: Boolean, default: false },
})
</script>

<template>
  <blockquote
    class="card-hover h-full p-6 transition-all duration-500 md:p-8"
    :class="dark ? 'border border-white/10 bg-white/5' : 'border border-neutral-200 bg-white'"
  >
    <p class="font-serif text-lg italic leading-relaxed md:text-xl" :class="dark ? 'text-neutral-200' : 'text-neutral-700'">
      « {{ text }} »
    </p>
    <footer class="mt-6 border-t pt-4" :class="dark ? 'border-white/10' : 'border-neutral-100'">
      <p v-if="author" class="font-bold text-red-600">{{ author }}</p>
      <p v-if="role" class="text-sm" :class="dark ? 'text-neutral-500' : 'text-neutral-400'">{{ role }}</p>
      <p v-if="context && !author" class="text-sm" :class="dark ? 'text-neutral-500' : 'text-neutral-400'">{{ context }}</p>
    </footer>
  </blockquote>
</template>
