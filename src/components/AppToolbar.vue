<template>
  <div class="toolbar">
    <WrapperActionItem title="Поиск документа">
      <Input
        v-model="search"
        placeholder="Введите ID документа"
        @update:model-value="debouncedFetchDocuments"
      />
    </WrapperActionItem>
    <WrapperActionItem title="Поиск документа">
      <Loader :visible="isLoadingDocuments" />
      <div class="toolbar__documents">
        <CardDocument
          v-for="item in documentsStore.getDocuments"
          :key="item.id"
          v-bind="item"
          :is-active="item.id === document?.id"
          @click="openDocumentPath(item.id)"
        />
      </div>
    </WrapperActionItem>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { RouterView } from 'vue-router';
import Input from '@/components/ui/Input.vue';
import WrapperActionItem from '@/components/ui/WrapperActionItem.vue';
import CardDocument from '@/components/ui/CardDocument.vue';
import Loader from '@/components/ui/Loader.vue';
import { DocumentService } from '@/services/documentService';
import { useDocumentsStore } from '@/stores/documentsStore';
import { useDebouncedFn } from '@/composables/useDebouncedFn';
import { Document } from '@/types/document';
import { useRouter } from 'vue-router';

const search = ref<string>('');
const isLoadingDocuments = ref<boolean>(false);
const router = useRouter();
const documentsStore = useDocumentsStore();

const document = computed(() => documentsStore.getSelectedDocument);

const fetchDocuments = async (query: string) => {
  try {
    isLoadingDocuments.value = true;
    //FIXME: Реализация в случае, если работа только о store, запрос по id api не предоставляет
    documentsStore.setSelectDocumentById(null);
    router.push(`/dashboard`);
    const res = await DocumentService.getByQuery(query);
    documentsStore.setDocuments(res);
  } catch (e) {
    console.error('Ошибка при загрузке документов', e);
  }
  isLoadingDocuments.value = false;
};

const debouncedFetchDocuments = useDebouncedFn(fetchDocuments, 500);

const openDocumentPath = (id: string | number) => {
  router.push(`/dashboard/document/${id}`);
};

onMounted(() => {
  fetchDocuments(search.value);
});
</script>

<style scoped lang="scss">
.toolbar {
  height: 100%;
  width: 282px;
  flex-shrink: 0;
  border-right: 1px solid rgba(224, 224, 224, 1);
  padding: 27px 22px 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 29px;

  &__documents {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-height: calc(100vh - 384px);
    overflow: auto;
  }
}
</style>
