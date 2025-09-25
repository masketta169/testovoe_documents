import { defineStore } from 'pinia';
import { ref, computed, readonly } from 'vue';
export const useDocumentsStore = defineStore('documents', () => {
    const documents = ref([]);
    const selectedDocument = ref(null);
    const getDocuments = computed(() => readonly([...documents.value]));
    const getSelectedDocument = computed(() => selectedDocument.value);
    function setDocuments(newDocs) {
        documents.value = [...newDocs];
    }
    //FIXME: Реализация в случае, если работа только о store, запрос по id api не предоставляет
    function setSelectDocumentById(id) {
        if (id === null) {
            selectedDocument.value = null;
            return;
        }
        const doc = documents.value.find((doc) => doc.id === id);
        selectedDocument.value = doc ?? null;
    }
    return {
        getDocuments,
        getSelectedDocument,
        setDocuments,
        setSelectDocumentById,
    };
});
