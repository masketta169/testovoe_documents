import { ref, onMounted, computed } from 'vue';
import Input from '@/components/ui/Input.vue';
import WrapperActionItem from '@/components/ui/WrapperActionItem.vue';
import CardDocument from '@/components/ui/CardDocument.vue';
import Loader from '@/components/ui/Loader.vue';
import { DocumentService } from '@/services/documentService';
import { useDocumentsStore } from '@/stores/documentsStore';
import { useDebouncedFn } from '@/composables/useDebouncedFn';
import { useRouter } from 'vue-router';
const search = ref('');
const isLoadingDocuments = ref(false);
const router = useRouter();
const documentsStore = useDocumentsStore();
const document = computed(() => documentsStore.getSelectedDocument);
const fetchDocuments = async (query) => {
    try {
        isLoadingDocuments.value = true;
        //FIXME: Реализация в случае, если работа только о store, запрос по id api не предоставляет
        documentsStore.setSelectDocumentById(null);
        router.push(`/dashboard`);
        const res = await DocumentService.getByQuery(query);
        documentsStore.setDocuments(res);
    }
    catch (e) {
        console.error('Ошибка при загрузке документов', e);
    }
    isLoadingDocuments.value = false;
};
const debouncedFetchDocuments = useDebouncedFn(fetchDocuments, 500);
const openDocumentPath = (id) => {
    router.push(`/dashboard/document/${id}`);
};
onMounted(() => {
    fetchDocuments(search.value);
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "toolbar" },
});
/** @type {[typeof WrapperActionItem, typeof WrapperActionItem, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(WrapperActionItem, new WrapperActionItem({
    title: "Поиск документа",
}));
const __VLS_1 = __VLS_0({
    title: "Поиск документа",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const { default: __VLS_3 } = __VLS_2.slots;
/** @type {[typeof Input, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Input, new Input({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.search),
    placeholder: "Введите ID документа",
}));
const __VLS_5 = __VLS_4({
    ...{ 'onUpdate:modelValue': {} },
    modelValue: (__VLS_ctx.search),
    placeholder: "Введите ID документа",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
let __VLS_7;
let __VLS_8;
const __VLS_9 = ({ 'update:modelValue': {} },
    { 'onUpdate:modelValue': (__VLS_ctx.debouncedFetchDocuments) });
// @ts-ignore
[search, debouncedFetchDocuments,];
var __VLS_6;
var __VLS_2;
/** @type {[typeof WrapperActionItem, typeof WrapperActionItem, ]} */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(WrapperActionItem, new WrapperActionItem({
    title: "Поиск документа",
}));
const __VLS_12 = __VLS_11({
    title: "Поиск документа",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
/** @type {[typeof Loader, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(Loader, new Loader({
    visible: (__VLS_ctx.isLoadingDocuments),
}));
const __VLS_16 = __VLS_15({
    visible: (__VLS_ctx.isLoadingDocuments),
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
// @ts-ignore
[isLoadingDocuments,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "toolbar__documents" },
});
for (const [item] of __VLS_getVForSourceType((__VLS_ctx.documentsStore.getDocuments))) {
    // @ts-ignore
    [documentsStore,];
    /** @type {[typeof CardDocument, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(CardDocument, new CardDocument({
        ...{ 'onClick': {} },
        key: (item.id),
        ...(item),
        isActive: (item.id === __VLS_ctx.document?.id),
    }));
    const __VLS_20 = __VLS_19({
        ...{ 'onClick': {} },
        key: (item.id),
        ...(item),
        isActive: (item.id === __VLS_ctx.document?.id),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    let __VLS_22;
    let __VLS_23;
    const __VLS_24 = ({ click: {} },
        { onClick: (...[$event]) => {
                __VLS_ctx.openDocumentPath(item.id);
                // @ts-ignore
                [document, openDocumentPath,];
            } });
    var __VLS_21;
}
var __VLS_13;
/** @type {__VLS_StyleScopedClasses['toolbar']} */ ;
/** @type {__VLS_StyleScopedClasses['toolbar__documents']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Input: Input,
        WrapperActionItem: WrapperActionItem,
        CardDocument: CardDocument,
        Loader: Loader,
        search: search,
        isLoadingDocuments: isLoadingDocuments,
        documentsStore: documentsStore,
        document: document,
        debouncedFetchDocuments: debouncedFetchDocuments,
        openDocumentPath: openDocumentPath,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
