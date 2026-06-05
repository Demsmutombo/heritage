<script setup>
import { useActiveSection } from '../composables/useActiveSection'

const props = defineProps({
  links: { type: Array, required: true },
})

const sectionIds = props.links.map((l) => l.href.replace('#', ''))
const { activeSection } = useActiveSection(sectionIds)
</script>

<template>
  <nav class="section-nav" aria-label="Navigation des sections">
    <div class="section-nav-inner">
      <div class="section-nav-track">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="section-nav-link"
          :class="{ 'section-nav-link--active': activeSection === link.href.replace('#', '') }"
        >
          <span class="section-nav-dot" />
          {{ link.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
