import { defineStore } from 'pinia';
import { ref, computed, readonly } from 'vue';
import { Document } from '@/types/document';

export const useDocumentsStore = defineStore('documents', () => {
  const documents = ref<Document[]>([]);
  const selectedDocument = ref<Document | null>(null);

  const getDocuments = computed(() => readonly([...documents.value]));
  const getSelectedDocument = computed(() => selectedDocument.value);

  function setDocuments(newDocs: Document[]) {
    documents.value = [...newDocs];
  }

  //FIXME: Реализация в случае, если работа только о store, запрос по id api не предоставляет
  function setSelectDocumentById(id: number | null) {
    if (id === null) {
      selectedDocument.value = null;
      return;
    }

    const doc = documents.value.find((doc: Document) => doc.id === id);
    selectedDocument.value = doc ?? null;
  }

  return {
    getDocuments,
    getSelectedDocument,
    setDocuments,
    setSelectDocumentById,
  };
});
