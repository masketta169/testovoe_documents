<template>
  <div class="document">
    <img
      :src="imageSrc"
      class="document__img"
      @error="handleErrorImage"
      @load="imageError = false"
    />
    <div class="document__info">
      <WrapperActionItem :title="document?.name">
        <div class="document__actions">
          <Button
            class="document__trigger"
            type="download"
            text="Скачать"
            @click="handleDownload"
          />
          <Button
            class="document__trigger"
            type="delete"
            text="Удалить"
            :disabled="isDisabledDelete"
            @click="handleDelete"
          />
        </div>
      </WrapperActionItem>
      <WrapperActionItem title="Описание:">
        <p class="document__desc">
          {{ document?.description }}
        </p>
      </WrapperActionItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useDocumentsStore } from '@/stores/documentsStore';
import WrapperActionItem from '@/components/ui/WrapperActionItem.vue';
import Button from '@/components/ui/Button.vue';
import { downloadText } from '@/utils/downloadText';
import DefaultImage from '@/assets/image/default_document.png';

const route = useRoute();
const documentsStore = useDocumentsStore();

const document = computed(() => documentsStore.getSelectedDocument);

const imageError = ref(false);
const isDisabledDelete = computed(() => {
  return !document.value || imageSrc.value === DefaultImage;
});
const imageSrc = ref(document.value?.image || DefaultImage);

watch(
  document,
  (newDoc) => {
    imageError.value = false;
    imageSrc.value = newDoc?.image || DefaultImage;
  },
  { immediate: true }
);

watch(
  () => documentsStore.getDocuments,
  (docs) => {
    if (docs.length) {
      documentsStore.setSelectDocumentById(+route.params.slug);
    }
  },
  { immediate: true }
);

watch(
  () => route.params.slug,
  () => {
    if (documentsStore.getDocuments) {
      documentsStore.setSelectDocumentById(+route.params.slug);
    }
  }
);

const handleDownload = () => {
  const doc = documentsStore.getSelectedDocument;
  if (!doc) return;

  downloadText({
    fileName: `${doc.name}.txt`,
    content: doc.description,
  });
};

const handleDelete = () => {
  console.log('Delete work');
};

const handleErrorImage = (e) => {
  imageError.value = true;
  imageSrc.value = DefaultImage;
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/media' as *;

.document {
  display: flex;
  padding: 30px;
  gap: 61px;

  @include media(xl) {
    flex-wrap: wrap;
  }

  &__img {
    width: 424px;
    height: 286px;
    object-fit: cover;
    flex-shrink: 0;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 47px;
  }

  &__actions {
    display: flex;
    gap: 17px;
  }

  &__trigger {
    width: 114px;
  }

  &__desc {
    color: rgba(108, 117, 125, 1);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
  }
}
</style>
