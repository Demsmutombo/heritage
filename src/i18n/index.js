import { createI18n } from 'vue-i18n'
import fr from './locales/fr.js'
import en from './locales/en.js'
import es from './locales/es.js'
import pt from './locales/pt.js'
import de from './locales/de.js'
import it from './locales/it.js'

const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null
const defaultLocale = savedLocale && ['fr', 'en', 'es', 'pt', 'de', 'it'].includes(savedLocale) ? savedLocale : 'fr'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'fr',
  messages: { fr, en, es, pt, de, it },
})

export default i18n

export const languages = [
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'pt', label: 'Português', short: 'PT' },
  { code: 'de', label: 'Deutsch', short: 'DE' },
  { code: 'it', label: 'Italiano', short: 'IT' },
]
