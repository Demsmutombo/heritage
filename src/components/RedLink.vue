<script setup>
defineProps({
  href: { type: String, default: '#' },
  label: { type: String, required: true },
})
</script>

<template>
  <a :href="href" class="red-underline text-sm font-medium text-black transition-colors hover:text-red-600">
    {{ label }}
  </a>
</template>
