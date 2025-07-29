<template>
  <LayoutMobile>
    <template #header>
      <div class="header">
        <IconScan class="header-icon" />
        <h1>Scan Device</h1>
      </div>
    </template>
    <div class="scan-quick-actions">
      <UButton
        type="primary"
        :disabled="scanning"
        @click="startScan"
        large
        class="action-btn"
      >
        <IconScan /> {{ scanning ? "Scanning..." : "Start Scan" }}
      </UButton>
      <UButton
        type="accent"
        :disabled="updating"
        @click="updateSignatures"
        large
        class="action-btn"
      >
        <IconUpdate /> Update Signatures
      </UButton>
    </div>
    <div v-if="scanning" class="scan-progress">
      <span class="loader"></span>
      <span>Scanning files... {{ progress }}%</span>
    </div>
    <div v-else-if="lastScan" class="scan-result">
      <div v-if="lastScan.threats.length > 0" class="threats">
        <IconBugCancel class="bug-icon" />
        <span><strong>{{ lastScan.threats.length }}</strong> threat{{lastScan.threats.length !== 1 ? "s" : ""}} found</span>
      </div>
      <div v-else class="secure-section">
        <IconShieldTick class="shield-ok" />
        <span>All clear. No threats!</span>
      </div>
      <span class="scan-date">{{ lastScan.date | formatDate }}</span>
    </div>
    <div class="scan-tips">
      <em>Tip: Run virus scans regularly for best protection.</em>
    </div>
  </LayoutMobile>
</template>

<script setup lang="ts">
import LayoutMobile from '~/components/LayoutMobile.vue'
import UButton from '~/components/UButton.vue'
import IconScan from '~/components/icons/IconScan.vue'
import IconShieldTick from '~/components/icons/IconShieldTick.vue'
import IconBugCancel from '~/components/icons/IconBugCancel.vue'
import IconUpdate from '~/components/icons/IconUpdate.vue'
import { useScan } from '~/composables/useScan'

const {
  scanning,
  progress,
  startScan,
  lastScan,
  updateSignatures,
  updating,
} = useScan()

definePageMeta({
  layout: false
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  justify-content: center;
}
.header-icon {
  font-size: 1.8rem;
  color: var(--color-primary);
}
.scan-quick-actions {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 1.2rem 0 1.1rem 0;
}
.action-btn {
  font-size: 1.1em;
}
.scan-progress {
  color: var(--color-accent);
  font-size: 1.1em;
  text-align: center;
  margin: 1.5em 0;
}
.loader {
  display: inline-block;
  width: 12px; height: 12px;
  border: 2.3px solid var(--color-secondary);
  border-right: 2.3px solid var(--color-accent);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-right: 8px;
  vertical-align: -2px;
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
.scan-result {
  text-align: center;
  margin: 1.4em 0 0.5em 0;
}
.threats {
  display: flex;
  align-items: center;
  color: #E53935;
  gap: .7em;
  justify-content: center;
  font-size: 1.11em;
}
.bug-icon { font-size: 1.7em;}
.secure-section {
  display: flex;
  align-items: center;
  color: var(--color-accent);
  font-size: 1.1em;
  gap: .7em; justify-content: center;
}
.shield-ok { font-size: 1.7em; }
.scan-date {
  color: var(--color-secondary); margin-top: 7px; display: block;
}
.scan-tips {
  text-align: center;
  margin: 1.6em 0 .3em 0;
  color: #8ab4f8;
  font-size: 1em;
}
</style>
