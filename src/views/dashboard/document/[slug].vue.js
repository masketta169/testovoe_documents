import { watch, computed, ref } from 'vue';
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
watch(document, (newDoc) => {
    imageError.value = false;
    imageSrc.value = newDoc?.image || DefaultImage;
}, { immediate: true });
watch(() => documentsStore.getDocuments, (docs) => {
    if (docs.length) {
        documentsStore.setSelectDocumentById(+route.params.slug);
    }
}, { immediate: true });
watch(() => route.params.slug, () => {
    if (documentsStore.getDocuments) {
        documentsStore.setSelectDocumentById(+route.params.slug);
    }
});
const handleDownload = () => {
    const doc = documentsStore.getSelectedDocument;
    if (!doc)
        return;
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "document" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    ...{ onError: (__VLS_ctx.handleErrorImage) },
    ...{ onLoad: (...[$event]) => {
            __VLS_ctx.imageError = false;
            // @ts-ignore
            [handleErrorImage, imageError,];
        } },
    src: (__VLS_ctx.imageSrc),
    ...{ class: "document__img" },
});
// @ts-ignore
[imageSrc,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "document__info" },
});
/** @type {[typeof WrapperActionItem, typeof WrapperActionItem, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(WrapperActionItem, new WrapperActionItem({
    title: (__VLS_ctx.document?.name || ''),
}));
const __VLS_1 = __VLS_0({
    title: (__VLS_ctx.document?.name || ''),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
const { default: __VLS_3 } = __VLS_2.slots;
// @ts-ignore
[document,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "document__actions" },
});
/** @type {[typeof Button, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(Button, new Button({
    ...{ 'onClick': {} },
    ...{ class: "document__trigger" },
    type: "download",
    text: "Скачать",
}));
const __VLS_5 = __VLS_4({
    ...{ 'onClick': {} },
    ...{ class: "document__trigger" },
    type: "download",
    text: "Скачать",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
let __VLS_7;
let __VLS_8;
const __VLS_9 = ({ click: {} },
    { onClick: (__VLS_ctx.handleDownload) });
// @ts-ignore
[handleDownload,];
var __VLS_6;
/** @type {[typeof Button, ]} */ ;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(Button, new Button({
    ...{ 'onClick': {} },
    ...{ class: "document__trigger" },
    type: "delete",
    text: "Удалить",
    disabled: (__VLS_ctx.isDisabledDelete),
}));
const __VLS_12 = __VLS_11({
    ...{ 'onClick': {} },
    ...{ class: "document__trigger" },
    type: "delete",
    text: "Удалить",
    disabled: (__VLS_ctx.isDisabledDelete),
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
let __VLS_14;
let __VLS_15;
const __VLS_16 = ({ click: {} },
    { onClick: (__VLS_ctx.handleDelete) });
// @ts-ignore
[isDisabledDelete, handleDelete,];
var __VLS_13;
var __VLS_2;
/** @type {[typeof WrapperActionItem, typeof WrapperActionItem, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(WrapperActionItem, new WrapperActionItem({
    title: "Описание:",
}));
const __VLS_19 = __VLS_18({
    title: "Описание:",
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
const { default: __VLS_21 } = __VLS_20.slots;
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "document__desc" },
});
(__VLS_ctx.document?.description);
// @ts-ignore
[document,];
var __VLS_20;
/** @type {__VLS_StyleScopedClasses['document']} */ ;
/** @type {__VLS_StyleScopedClasses['document__img']} */ ;
/** @type {__VLS_StyleScopedClasses['document__info']} */ ;
/** @type {__VLS_StyleScopedClasses['document__actions']} */ ;
/** @type {__VLS_StyleScopedClasses['document__trigger']} */ ;
/** @type {__VLS_StyleScopedClasses['document__trigger']} */ ;
/** @type {__VLS_StyleScopedClasses['document__desc']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        WrapperActionItem: WrapperActionItem,
        Button: Button,
        document: document,
        imageError: imageError,
        isDisabledDelete: isDisabledDelete,
        imageSrc: imageSrc,
        handleDownload: handleDownload,
        handleDelete: handleDelete,
        handleErrorImage: handleErrorImage,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
