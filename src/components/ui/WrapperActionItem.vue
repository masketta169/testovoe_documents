<template>
    <div class="item">
        <p class="item__title">{{ title }}</p>
        <slot />
    </div>
</template>

<script setup lang="ts">

interface Props {
    title: string
}

const props = defineProps<Props>()

</script>

<style scoped lang="scss">
.item {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__title {
        color: rgba(0, 0, 0, 1);
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
    }
}
</style>