<template>
    <div class="empty">
        <p class="empty__text">Выберите документ, чтобы посмотреть его содержиое</p>
    </div>
</template>

<style lang="scss" scoped>
.empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    &__text {
        color: rgba(108, 117, 125, 1);
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
    }
}
</style>