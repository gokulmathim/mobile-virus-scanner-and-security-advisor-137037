<template>
  <LayoutMobile>
    <template #header>
      <div class="header">
        <IconHistory class="header-icon" />
        <h1>Scan History</h1>
      </div>
    </template>
    <div v-if="history.length === 0" class="empty">
      <IconInbox /> No scans logged yet.
    </div>
    <ul v-else class="scan-history-list">
      <li v-for="scan in history" :key="scan.id" class="scan-item">
        <div class="scan-header">
          <span :class="scan.threats.length ? 'threats' : 'secure'">
            <IconBugCancel v-if="scan.threats.length" class="threat-icon"/>
            <IconShieldTick v-else class="secure-icon"/>
            {{ scan.threats.length ? scan.threats.length + ' threat(s)' : "No Threats" }}
          </span>
          <em>{{ scan.date | formatDate }}</em>
        </div>
        <ul v-if="scan.threats.length" class="threat-list">
          <li v-for="(threat, idx) in scan.threats" :key="idx">
            <IconBugCancel class="list-icon" />
            {{ threat.virusName }} <span class="file">{{ threat.file }}</span>
          </li>
        </ul>
      </li>
    </ul>
  </LayoutMobile>
</template>

<script setup lang="ts">
import LayoutMobile from '~/components/LayoutMobile.vue'
import IconHistory from '~/components/icons/IconHistory.vue'
import IconInbox from '~/components/icons/IconInbox.vue'
import IconBugCancel from '~/components/icons/IconBugCancel.vue'
import IconShieldTick from '~/components/icons/IconShieldTick.vue'
import { useScan } from '~/composables/useScan'

const { history } = useScan()
</script>

<style scoped>
.header {
  display: flex;
  align-items: center; gap: 10px; margin-bottom: 7px; justify-content: center;
}
.header-icon { font-size: 1.7rem; color: var(--color-secondary);}
.empty {
  color: #bbb; padding: 2.5em 0;
  text-align: center;
  font-size: 1.04em;
}
.scan-history-list {
  list-style: none; margin: 0; padding: 0;
}
.scan-item {
  background: #fafbfc;
  border-radius: .75em;
  margin-bottom: 17px;
  padding: 1.1em .85em .7em .85em;
  box-shadow: 0 1px 8px 0 rgba(0,0,0,0.02);
}
.scan-header {
  display: flex; justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
}
.threats { color: #E53935; font-weight: 600;}
.threat-icon, .secure-icon { font-size: 1.2em; margin-right: 4px;}
.secure { color: var(--color-accent); font-weight: 500 }
.threat-list { margin: .35em 0 0 0; padding: 0 0 0 1.1em ; font-size: .97em;}
.list-icon { color: #E53935; font-size: 1em; margin-right: 4px; }
.file { color: var(--color-secondary); font-size: .95em; margin-left: 6px;}
</style>
