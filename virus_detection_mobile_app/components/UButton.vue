<template>
  <button
    :class="['ubtn', type, { block, large }]"
    v-bind="$attrs"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'accent',
    validator: (value: string) =>
      ['accent', 'primary', 'secondary'].includes(value),
  },
  block: {
    type: Boolean,
    default: false
  },
  large: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.ubtn {
  outline: none; border: none;
  background: var(--color-accent);
  color: #fff;
  border-radius: .8em;
  font-size: 1em;
  padding: .7em 1.5em;
  font-weight: 600;
  cursor: pointer;
  transition: background .13s, filter .13s;
  box-shadow: 0 1px 12px 0 rgba(0,200,83,0.03);
  margin: 0;
}
.ubtn:active { filter: brightness(.93);}
.ubtn.primary { background: var(--color-primary);}
.ubtn.secondary { background: var(--color-secondary);}
.ubtn.block { width: 100%;}
.ubtn.large { font-size: 1.12em; padding: .9em 2em;}
.ubtn:disabled {
  opacity: 0.75;
  filter: grayscale(.12);
  cursor: not-allowed;
}
</style>
