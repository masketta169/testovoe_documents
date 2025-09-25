<template>
  <transition name="fade">
    <div v-if="visible" class="notify" :class="type">
      <span>{{ message }}</span>
      <button class="notify__close" @click="close">×</button>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, onMounted } from 'vue';

interface Props {
  message: string;
  type?: 'error' | 'success' | 'info';
  duration?: number;
}

const props = defineProps<Props>();
const visible = ref(false);

const type = props.type || 'info';
const duration = props.duration || 3000;

const close = () => {
  visible.value = false;
};

onMounted(() => {
  visible.value = true;
  if (duration > 0) {
    setTimeout(() => {
      visible.value = false;
    }, duration);
  }
});
</script>

<style scoped lang="scss">
.notify {
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 250px;
  padding: 12px 20px;
  border-radius: 8px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  z-index: 9999;

  &.error {
    background-color: #dc3545;
  }

  &.success {
    background-color: #28a745;
  }

  &.info {
    background-color: #17a2b8;
  }

  &__close {
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    line-height: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
