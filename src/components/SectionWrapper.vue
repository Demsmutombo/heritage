<script setup>
defineProps({
  id: { type: String, default: '' },
  variant: {
    type: String,
    default: 'light',
    validator: (v) => ['light', 'dark', 'muted', 'accent'].includes(v),
  },
  fullWidth: { type: Boolean, default: false },
})
</script>

<template>
  <section
    :id="id"
    class="section-block scroll-mt-28"
    :class="`section-${variant}`"
  >
    <div :class="fullWidth ? '' : 'section-contained'">
      <slot />
    </div>
  </section>
</template>
