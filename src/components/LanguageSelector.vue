<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { languages } from '../i18n/index.js'

const { locale, t } = useI18n({ useScope: 'global' })

const open = ref(false)
const root = ref(null)

const current = computed(() => languages.find((l) => l.code === locale.value) ?? languages[0])

function toggle() {
  open.value = !open.value
}

function selectLanguage(code) {
  locale.value = code
  localStorage.setItem('locale', code)
  document.documentElement.lang = code
  open.value = false
}

function onClickOutside(e) {
  if (root.value && !root.value.contains(e.target)) {
    open.value = false
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))
</script>

<template>
  <div ref="root" class="lang-selector relative">
    <button
      type="button"
      class="lang-selector__btn"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click.stop="toggle"
    >
      {{ current.short }}
      <svg
        class="h-3 w-3 transition-transform duration-200"
        :class="open ? 'rotate-180' : ''"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition name="lang-drop">
      <ul
        v-if="open"
        class="lang-selector__menu"
        role="listbox"
        :aria-label="t('lang.select')"
      >
        <li
          v-for="lang in languages"
          :key="lang.code"
          role="option"
          :aria-selected="locale === lang.code"
        >
          <button
            type="button"
            class="lang-selector__option"
            :class="{ 'lang-selector__option--active': locale === lang.code }"
            @click="selectLanguage(lang.code)"
          >
            <span class="lang-selector__short">{{ lang.short }}</span>
            <span class="lang-selector__label">{{ t(`lang.${lang.code}`) }}</span>
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>
