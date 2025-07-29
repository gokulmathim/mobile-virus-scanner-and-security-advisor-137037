<template>
  <LayoutMobile>
    <template #header>
      <div class="header">
        <IconScan class="header-icon" />
        <h1>VirusGuard</h1>
      </div>
    </template>
    <div class="status-section">
      <div class="status-row">
        <IconShieldTick :class="{ secure: isSecure }" />
        <div class="status-content">
          <h2>{{ isSecure ? "Device Secure" : "Threats Found" }}</h2>
          <p>{{ statusMessage }}</p>
        </div>
      </div>
      <UButton
        type="accent"
        block
        large
        class="scan-now"
        @click="goToScan"
      >
        Run A Manual Scan
      </UButton>
    </div>
    <div class="suggestions">
      <h3>Security Suggestions</h3>
      <ul>
        <li v-for="(suggestion, idx) in suggestions" :key="idx">
          <IconBulbFilled class="suggestion-icon" /> {{ suggestion }}
        </li>
      </ul>
    </div>
    <div class="section-title">
      <h3>Recent Threats</h3>
      <NuxtLink to="/history">See scan history</NuxtLink>
    </div>
    <ul class="recent-scans">
      <li v-for="(scan, idx) in recentThreats" :key="idx">
        <IconBugCancel class="threat-icon" />
        <div class="scan-info">
          <span>{{ scan.virusName }}</span>
          <em>{{ scan.date | formatDate }}</em>
        </div>
      </li>
      <li v-if="recentThreats.length === 0">No recent threats.</li>
    </ul>
  </LayoutMobile>
</template>

<script setup lang="ts">
// Home (real-time scan summary and security suggestions)

import LayoutMobile from '~/components/LayoutMobile.vue'
import UButton from '~/components/UButton.vue'
import IconScan from '~/components/icons/IconScan.vue'
import IconShieldTick from '~/components/icons/IconShieldTick.vue'
import IconBugCancel from '~/components/icons/IconBugCancel.vue'
import IconBulbFilled from '~/components/icons/IconBulbFilled.vue'
import { useScan } from '~/composables/useScan'
import { useSecuritySuggestions } from '~/composables/useSecuritySuggestions'

const { isSecure, recentThreats, statusMessage } = useScan()
const { suggestions } = useSecuritySuggestions()
const goToScan = () => navigateTo('/scan')

definePageMeta({
  layout: false
})
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-bottom: 8px;
}
.header-icon { font-size: 2rem; color: var(--color-primary);}
.status-section {
  background: var(--color-primary);
  color: #fff;
  padding: 1.2rem;
  border-radius: 1rem;
  margin-bottom: 20px;
}
.status-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}
.status-content h2 {
  margin: 0;
}
.status-content p {
  font-size: .95em;
  opacity: .9;
}
.scan-now {
  margin-top: 6px;
}
.suggestions {
  background: #fff;
  border-radius: .7em;
  margin: 22px 0 11px 0;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.03);
  padding: .9em .7em;
}
.suggestions h3 {
  color: var(--color-primary);
  margin-bottom: .5em;
  font-size: 1.02em;
}
.suggestion-icon {
  color: var(--color-accent);
  margin-right: .5em;
  font-size: 1.1em;
}
.suggestions ul {
  margin: 0; padding: 0;
  list-style: none;
}
.section-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2em 0 0.6em 0;
}
.section-title h3 {
  font-size: 1.02em; color: #222;
  margin: 0;
}
.section-title a {
  font-size: .95em;
  color: var(--color-accent);
}
.recent-scans {
  list-style: none;
  margin: 0; padding: 0;
}
.recent-scans li {
  display: flex; align-items: center;
  border-bottom: 1px solid #f3f3f3;
  padding: .65em 0;
}
.threat-icon {
  color: #E53935;
  font-size: 1.45em;
  margin-right: .7em;
}
.scan-info span {
  font-weight: 600;
}
.scan-info em {
  font-style: normal;
  font-size: .93em;
  margin-left: 12px;
  color: #888;
}
.secure { color: var(--color-accent) !important; }
</style>
