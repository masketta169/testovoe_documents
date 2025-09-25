<template>
  <button class="btn" :class="type" :disabled="disabled">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  type: 'download' | 'delete';
  text: string;
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});
</script>

<style lang="scss" scoped>
.btn {
  width: 100%;
  height: 31px;
  font-size: 14px;
  font-weight: 400;
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  border-radius: 8px;

  &.download {
    color: rgba(13, 110, 253, 1);
    border: 1px solid rgba(13, 110, 253, 1);
  }

  &.delete {
    color: rgba(220, 53, 69, 1);
    border: 1px solid rgba(220, 53, 69, 1);
  }
}
</style>
