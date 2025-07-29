import { ref, watch } from 'vue'

function getLS(key: string, def: any) {
  if (typeof window === 'undefined') return def
  try {
    const val = window.localStorage.getItem(key)
    return val !== null ? JSON.parse(val) : def
  } catch {
    return def
  }
}
function setLS(key: string, val: any) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(key, JSON.stringify(val))
}

const notifications = ref(getLS('notifications-enabled', true))
const realTime = ref(getLS('realtime-enabled', true))

watch(notifications, val => setLS('notifications-enabled', val))
watch(realTime, val => setLS('realtime-enabled', val))

export function useSettings() {
  // PUBLIC_INTERFACE
  return {
    notifications,
    realTime,
  }
}
