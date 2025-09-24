<template>
  <header class="app-header">
    <a class="app-header__logo" href="#">MyApp</a>
    <span class="app-header__user">{{ userStore.username }}</span>
  </header>
</template>

<script setup lang="ts">
import { defineComponent, PropType } from 'vue';
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore();

</script>

<style lang="scss" scoped>
.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__logo {
    font-size: 32px;
    font-weight: 700;
    color: rgba(0, 0, 0, 1);
  }

  &__user {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
  }
}
</style>