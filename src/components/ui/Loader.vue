<template>
    <div class="loader" v-if="visible">
      <div class="loader__spinner"></div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue'
  
  interface Props {
    visible?: boolean
  }
  
  const props = defineProps<Props>()
  </script>
  
  <style scoped lang="scss">
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  
    &__spinner {
      width: 40px;
      height: 40px;
      border: 4px solid rgba(0,0,0,0.1);
      border-top-color: rgba(33, 37, 41, 1);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  </style>
  