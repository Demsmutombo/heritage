<script setup>
defineProps({
  name: { type: String, required: true },
  subtitle: { type: String, default: '' },
  quote: { type: String, default: '' },
  heroImage: { type: String, required: true },
  ctaLabel: { type: String, default: 'Découvrir son histoire' },
  ctaHref: { type: String, default: '#presentation' },
})
</script>

<template>
  <section class="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-black md:min-h-[92vh]">
    <img
      :src="heroImage"
      :alt="name"
      class="hero-ken-burns absolute inset-0 h-full w-full object-cover opacity-50"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />
    <div class="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

    <div class="relative z-10 px-6 text-center">
      <p
        v-if="subtitle"
        class="hero-animate hero-animate-delay-1 font-serif text-sm italic text-neutral-300 md:text-base"
      >
        {{ subtitle }}
      </p>
      <h1 class="hero-animate hero-animate-delay-2 mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
        {{ name }}
      </h1>
      <blockquote
        v-if="quote"
        class="hero-animate hero-animate-delay-3 mx-auto mt-8 max-w-xl font-bold italic leading-relaxed text-neutral-200 md:text-xl"
      >
        « {{ quote }} »
      </blockquote>
      <a
        :href="ctaHref"
        class="hero-animate hero-animate-delay-4 btn-secondary mt-12"
      >
        {{ ctaLabel }}
      </a>
    </div>

    <div class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
      <svg class="h-6 w-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>
