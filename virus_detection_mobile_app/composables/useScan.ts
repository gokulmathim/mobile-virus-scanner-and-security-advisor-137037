import { ref, computed } from 'vue'

function fakeScanFiles() {
  // Simulate scanning, randomly return threats
  const threatsPool = [
    { virusName: 'Eicar-Test', file: 'Download/test_eicar.txt' },
    { virusName: 'Trojan.Demo', file: 'Apps/rogue.apk' }
  ]
  if (Math.random() < 0.3) {
    return [ threatsPool[Math.floor(Math.random()*threatsPool.length)] ]
  }
  return []
}

const scanHistory = ref([
  {
    id: 1,
    date: new Date(Date.now() - 86400000),
    threats: [],
  },
  {
    id: 2,
    date: new Date(Date.now() - 43200000),
    threats: [
      { virusName: 'Eicar-Test', file: 'Download/test_eicar.txt' }
    ],
  }
] as Array<{id: number, date: Date|string, threats: Array<{virusName: string, file: string}>}>)

const scanning = ref(false)
const progress = ref(0)
const isSecure = computed(() => scanHistory.value.every(s => s.threats.length === 0))
const lastScan = computed(() => scanHistory.value.length ? scanHistory.value[scanHistory.value.length-1] : null)
const recentThreats = computed(() =>
  scanHistory.value
    .flatMap(scan =>
      scan.threats.map(t => ({
        ...t,
        date: scan.date
      }))
    )
    .slice(-2)
)
const statusMessage = computed(() =>
  isSecure.value
    ? "No viruses detected, your device is protected!"
    : "Threat(s) found. Please review and take action."
)

const signatureVersion = ref('2024.05')
const updating = ref(false)

function updateSignatures() {
  updating.value = true
  setTimeout(() => {
    signatureVersion.value = '2024.06'
    updating.value = false
    if (window && 'Notification' in window) {
      window.Notification.requestPermission?.()
      // Try to notify user on "update" (mock)
      window.Notification && new Notification("Virus definitions updated!")
    }
  }, 1300)
}

function startScan() {
  if (scanning.value) return
  scanning.value = true
  progress.value = 0

  const interval = setInterval(() => {
    progress.value += Math.random() * 20
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      scanning.value = false

      // Result
      const threats = fakeScanFiles()
      scanHistory.value.push({
        id: Date.now(),
        date: new Date(),
        threats
      })
      if (threats.length && window && 'Notification' in window) {
        window.Notification.requestPermission?.()
        new Notification(`Threat found: ${threats[0]?.virusName || 'Virus'}`)
      }
    }
  }, 400)
}

export function useScan() {
  // PUBLIC_INTERFACE
  return {
    scanning,
    progress,
    startScan,
    isSecure,
    lastScan,
    history: scanHistory,
    recentThreats,
    statusMessage,
    signatureVersion,
    updateSignatures,
    updating,
  }
}
