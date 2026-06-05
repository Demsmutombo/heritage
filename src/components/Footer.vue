<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({
  brandTitle: { type: String, default: 'One Memoria Heritage' },
  artistName: { type: String, required: true },
  subtitle: { type: String, default: '' },
  tribute: { type: String, default: '' },
  sources: { type: Array, default: () => [] },
})

const { tm } = useI18n({ useScope: 'global' })
const openSections = ref({})

const sections = computed(() => {
  const footer = tm('footer')
  const titles = footer.sectionTitles
  return [
    { title: titles.biography, links: footer.nav.biography },
    { title: titles.works, links: footer.nav.works },
    { title: titles.heritage, links: footer.nav.heritage },
  ]
})

function toggleSection(title) {
  openSections.value[title] = !openSections.value[title]
}
</script>

<template>
  <footer class="section-dark">
    <div class="border-t border-white/10 px-6 py-10 text-center">
      <p class="text-lg font-bold tracking-tight">{{ brandTitle }}</p>
      <p class="mt-2 text-sm text-neutral-300">{{ subtitle }}</p>
      <p class="font-serif mt-2 text-sm italic text-neutral-400">{{ artistName }}</p>
      <p v-if="tribute" class="mt-4 text-xs text-neutral-500">{{ tribute }}</p>
    </div>

    <div class="border-t border-white/10">
      <div v-for="section in sections" :key="section.title">
        <button
          type="button"
          class="flex w-full items-center justify-between border-b border-white/10 px-6 py-5 text-left font-semibold"
          @click="toggleSection(section.title)"
        >
          {{ section.title }}
          <svg
            class="h-4 w-4 transition-transform"
            :class="openSections[section.title] ? 'rotate-180' : ''"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openSections[section.title]" class="border-b border-white/10 px-6 py-4">
          <a
            v-for="link in section.links"
            :key="link.href"
            :href="link.href"
            class="block py-2 text-sm text-neutral-400 transition-colors hover:text-white"
          >
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>

    <div id="sources" class="border-t border-white/10 px-6 py-8 text-center">
      <p class="text-xs font-bold uppercase tracking-widest text-neutral-500">{{ tm('footer.sources') }}</p>
      <ul v-if="sources.length" class="mx-auto mt-4 max-w-2xl space-y-2">
        <li v-for="source in sources" :key="source" class="text-xs text-neutral-600">{{ source }}</li>
      </ul>
    </div>

    <div class="border-t border-white/10 px-6 py-6 text-center text-xs text-neutral-600">
      <p v-if="tribute">{{ tribute }}</p>
      <p class="mt-3">
        © {{ new Date().getFullYear() }} — One Memoria Heritage — {{ tm('footer.copyright') }}
      </p>
    </div>
  </footer>
</template>
