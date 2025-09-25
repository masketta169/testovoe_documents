<template>
  <router-view />
  <NotifyContainer />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import NotifyContainer from '@/components/ui/NotifyContainer.vue';
</script>

<style lang="scss" scoped></style>
