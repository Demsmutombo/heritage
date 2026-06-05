import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const el = ref(null)
  const isVisible = ref(false)

  const {
    threshold = 0.12,
    rootMargin = '0px 0px -60px 0px',
    once = true,
  } = options

  let observer = null

  onMounted(() => {
    if (!el.value) return

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          if (once) observer?.disconnect()
        } else if (!once) {
          isVisible.value = false
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el.value)
  })

  onUnmounted(() => observer?.disconnect())

  return { el, isVisible }
}
