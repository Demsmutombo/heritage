import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sectionIds) {
  const activeSection = ref(sectionIds[0] || '')

  let observer = null

  onMounted(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return

    observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          activeSection.value = visible[0].target.id
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => observer?.disconnect())

  return { activeSection }
}
