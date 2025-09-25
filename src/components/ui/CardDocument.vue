<template>
  <div class="card">
    <img :src="imageSrc" class="card__image" @error="handleErrorImage" />
    <div class="card__content" :class="{ active: isActive }">
      <p class="card__title">{{ name }}</p>
      <span v-if="size" class="card__size">{{ size }} MB</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import DefaultImage from '@/assets/image/default_card_document.png';

interface Props {
  image?: string | null;
  name: string;
  size?: number;
  isActive?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  image: null,
  size: null,
  isActive: false,
});

const imageSrc = ref(props.image || DefaultImage);

const handleErrorImage = () => {
  imageSrc.value = DefaultImage;
};

watch(
  () => props.image,
  (newImage) => {
    imageSrc.value = newImage || DefaultImage;
  }
);
</script>

<style scoped lang="scss">
.card {
  display: flex;
  width: 100%;
  height: 70px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  flex: 0 0 70px;
  cursor: pointer;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 15px;
    width: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  &__content.active {
    background-color: rgba(13, 110, 253, 1);
  }

  &__image {
    width: 70px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &__title,
  &__size {
    font-size: 14px;
    line-height: 100%;
  }

  &__content.active .card__title {
    color: rgba(248, 249, 250, 1);
  }

  &__title {
    color: rgba(33, 37, 41, 1);
    font-size: 14px;
    font-weight: 600;
  }

  &__content.active .card__size {
    color: rgba(222, 226, 230, 1);
  }

  &__size {
    font-weight: 400;
    color: rgba(108, 117, 125, 1);
  }
}
</style>
