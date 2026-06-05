<script setup>
import { ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue'

const props = defineProps({
  brandTitle: { type: String, default: 'One Memoria Heritage' },
  links: { type: Array, default: () => [] },
})

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 bg-black/95 backdrop-blur-md">
    <div class="flex items-center justify-between px-4 py-3.5 md:px-8">
      <a href="#" class="group flex items-center gap-3 text-white">
        <img
          src="/logowarriors.png"
          :alt="brandTitle"
          class="h-8 w-auto object-contain md:h-9"
          width="120"
          height="48"
        />
        <span class="hidden text-sm font-bold tracking-tight transition-colors group-hover:text-red-400 sm:inline md:text-base">
          {{ brandTitle }}
        </span>
      </a>

      <div class="flex items-center gap-3 text-white md:gap-4">
        <LanguageSelector />
        <button
          type="button"
          aria-label="Menu"
          class="transition-colors hover:text-red-400"
          @click="menuOpen = !menuOpen"
        >
          <svg v-if="!menuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <nav
      v-if="menuOpen"
      class="border-t border-white/10 bg-black px-4 py-2 md:px-8"
    >
      <a
        v-for="link in props.links"
        :key="link.href"
        :href="link.href"
        class="block border-b border-white/10 py-4 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:text-red-400"
        @click="closeMenu"
      >
        {{ link.label }}
      </a>
    </nav>
  </header>
</template>
