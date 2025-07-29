import { ref } from 'vue'

const suggestions = ref([
  "Update your apps regularly.",
  "Avoid downloading unknown files.",
  "Use device lock & strong passwords.",
  "Enable device encryption.",
  "Review app permissions.",
])

export function useSecuritySuggestions() {
  // PUBLIC_INTERFACE
  return { suggestions }
}
