<template>
  <div class="mobile-layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <nav class="bottom-tab">
      <NuxtLink
        v-for="tab in tabs"
        :key="tab.route"
        :to="tab.route"
        :class="{ active: $route.path === tab.route }"
        class="tab-btn"
        :aria-label="tab.label"
      >
        <component :is="tab.icon" class="nav-icon" />
        <span>{{ tab.label }}</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
import IconHome from '~/components/icons/IconHome.vue'
import IconScan from '~/components/icons/IconScan.vue'
import IconHistory from '~/components/icons/IconHistory.vue'
import IconSetting from '~/components/icons/IconSetting.vue'

const tabs = [
  { route: '/', label: 'Home', icon: IconHome },
  { route: '/scan', label: 'Scan', icon: IconScan },
  { route: '/history', label: 'History', icon: IconHistory },
  { route: '/settings', label: 'Settings', icon: IconSetting },
]
</script>

<style scoped>
.mobile-layout {
  min-height: 100vh;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
}
header { margin: 0 0 4px 0; }
main {
  flex: 1 1 auto;
  padding: 0 0.2em 60px 0.2em;
}
.bottom-tab {
  position: fixed;
  z-index: 110;
  left: 0; right: 0; bottom: 0;
  display: flex;
  height: 58px;
  background: #fff;
  border-top: 1.5px solid #EFF1F3;
  box-shadow: 0 -3px 17px 0 rgba(0,0,0,0.05);
}
.tab-btn {
  flex: 1 1 1px;
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  font-size: .98em;
  color: var(--color-secondary);
  border: none; background: none;
  text-decoration: none;
  transition: background .13s;
  padding-top: 3px;
}
.tab-btn.active {
  color: var(--color-accent);
  font-weight: 600;
  background: rgba(0, 200, 83, 0.09);
}
.nav-icon {
  font-size: 1.44em;
  margin-bottom: 2px;
}
</style>
