<script setup>
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
import SplashScreen from './components/SplashScreen.vue'

const showSplash = ref(true)
const { locale, tm } = useI18n({ useScope: 'global' })

function onSplashComplete() {
  showSplash.value = false
}

function updateMeta() {
  const meta = tm('meta')
  if (meta?.pageTitle) document.title = meta.pageTitle
  const desc = document.querySelector('meta[name="description"]')
  if (desc && meta?.description) desc.setAttribute('content', meta.description)
  document.documentElement.lang = locale.value
}

watch(locale, updateMeta, { immediate: true })
</script>

<template>
  <SplashScreen v-if="showSplash" @complete="onSplashComplete" />
  <RouterView />
</template>
