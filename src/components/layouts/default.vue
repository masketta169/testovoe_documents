<template>
    <div class="layout">
        <AppHeader />
        
        <main class="layout__content">
            <slot />
        </main>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue'

</script>

<style scoped lang="scss">
.layout {
    height: 100%;
    padding: 41px 50px 58px 50px;
    display: flex;
    flex-direction: column;
    gap: 35px;

    &__content {
        flex: 1;
    }
}
</style>
