<template>
  <div class="notify-container">
    <Notify v-for="(n, i) in notifications" :key="i" v-bind="n" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { notifyService } from '@/services/notifyService';
import Notify from './Notify.vue';

const notifications = computed(() => notifyService.getState().notifications);
</script>

<style lang="scss" scoped>
.notify-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 9999;
}
</style>
