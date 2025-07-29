<template>
  <LayoutMobile>
    <template #header>
      <div class="header">
        <IconSetting class="header-icon" />
        <h1>Settings</h1>
      </div>
    </template>
    <div class="settings-section">
      <div class="setting-row">
        <label>
          <input type="checkbox" v-model="notifications" />
          Enable Notification Alerts
        </label>
      </div>
      <div class="setting-row">
        <label>
          <input type="checkbox" v-model="realTime" />
          Real-time Virus Protection
        </label>
      </div>
      <div class="update-row">
        <span>Virus Signature Version: <b>{{ signatureVersion }}</b></span>
        <UButton type="accent" :disabled="updating" @click="updateSignatures">
          <IconUpdate />
          Update
        </UButton>
      </div>
      <hr />
      <div class="about-section">
        <b>VirusGuard</b> <span class="ver">v1.0</span>
        <div class="small muted">
          Modern virus scanning for your mobile device.<br>
          <em>Brought to you by <span style="color:var(--color-accent);font-weight:600">VirusGuard Team</span></em>
        </div>
      </div>
    </div>
  </LayoutMobile>
</template>

<script setup lang="ts">
import LayoutMobile from '~/components/LayoutMobile.vue'
import UButton from '~/components/UButton.vue'
import IconSetting from '~/components/icons/IconSetting.vue'
import IconUpdate from '~/components/icons/IconUpdate.vue'
import { useSettings } from '~/composables/useSettings'
import { useScan } from '~/composables/useScan'

const { notifications, realTime } = useSettings()
const { signatureVersion, updateSignatures, updating } = useScan()
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 9px;
  justify-content: center;
}
.header-icon {
  font-size: 1.6rem; color: var(--color-secondary);
}
.settings-section {
  background: #fafbfc;
  border-radius: 14px;
  box-shadow: 0 1px 7px 0 rgba(0,0,0,.02);
  padding: 1.3em 0.9em 1.1em 0.9em;
  margin: 1em 0.1em 0 0.1em;
}
.setting-row {
  display: flex;
  align-items: center;
  margin-bottom: 17px;
  font-size: 1.13em;
  gap: 10px;
}
.setting-row input[type="checkbox"] {
  accent-color: var(--color-accent);
  margin-right: 6px;
}
.update-row {
  display: flex; align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  gap: 1em;
}
.update-row b { color: var(--color-accent);}
hr {
  border: none; height: .5px;
  background: #e0e0e0;
  margin: 17px 0 10px 0;
}
.about-section {
  font-size: 1.1em; color: #444;
}
.muted {
  font-size: .97em; color: #888;
}
.ver { font-size: .92em; color: #999; margin-left: 6px;}
</style>
