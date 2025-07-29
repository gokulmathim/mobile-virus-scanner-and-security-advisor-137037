import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$filters = {
    formatDate(date: string | Date) {
      if (!date) return ''
      try {
        const d = typeof date === 'string' ? new Date(date) : date
        return d.toLocaleString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
      } catch {
        return ''
      }
    }
  }
})
