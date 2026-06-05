<script setup>
import { ref } from 'vue'
import BiographyBlock from './BiographyBlock.vue'
import AnimateOnScroll from './AnimateOnScroll.vue'

const props = defineProps({
  sections: { type: Object, required: true },
})

const tabs = [
  { id: 'origines', key: 'origines' },
  { id: 'quartier', key: 'quartierLatin' },
  { id: 'solo', key: 'carriereSolo' },
]

const activeTab = ref('origines')

function setTab(id) {
  activeTab.value = id
}
</script>

<template>
  <div>
    <div class="bio-tabs" role="tablist">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        type="button"
        role="tab"
        class="bio-tab"
        :class="{ 'bio-tab--active': activeTab === tab.id }"
        :aria-selected="activeTab === tab.id"
        @click="setTab(tab.id)"
      >
        {{ sections[tab.key].title }}
      </button>
    </div>

    <div class="bio-panels">
      <div
        v-for="tab in tabs"
        :key="tab.id"
        v-show="activeTab === tab.id"
        role="tabpanel"
        class="bio-panel"
      >
        <AnimateOnScroll
          v-for="(block, i) in sections[tab.key].blocks"
          :key="block.id"
          animation="fade-up"
          :delay="i * 100"
        >
          <BiographyBlock :title="block.title" :content="block.content" />
        </AnimateOnScroll>
      </div>
    </div>
  </div>
</template>
