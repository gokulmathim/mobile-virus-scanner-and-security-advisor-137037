import { format } from 'date-fns'
import { defineNuxtPlugin } from '#app'

// PUBLIC_INTERFACE
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$filters = {
    formatDate(date: string | Date) {
      return format(new Date(date), 'MMM d, HH:mm')
    }
  }
})
