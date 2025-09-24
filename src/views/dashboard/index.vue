<template>
  <DefaultLayout>
    <WrapperContent class="documents">
        <AppToolbar />
        <router-view />
    </WrapperContent>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from "@/components/layouts/default.vue"
import WrapperContent from "@/components/ui/WrapperContent.vue"
import AppToolbar from '@/components/AppToolbar.vue'
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.documents {
  display: flex;
}
</style>