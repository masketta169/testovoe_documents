import { ref, watch } from 'vue';
import DefaultImage from '@/assets/image/default_card_document.png';
const props = withDefaults(defineProps(), {
    image: null,
    size: undefined,
    isActive: false,
});
const imageSrc = ref(props.image || DefaultImage);
const handleErrorImage = () => {
    imageSrc.value = DefaultImage;
};
watch(() => props.image, (newImage) => {
    imageSrc.value = newImage || DefaultImage;
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    image: null,
    size: undefined,
    isActive: false,
});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card" },
});
__VLS_asFunctionalElement(__VLS_elements.img)({
    ...{ onError: (__VLS_ctx.handleErrorImage) },
    src: (__VLS_ctx.imageSrc),
    ...{ class: "card__image" },
});
// @ts-ignore
[handleErrorImage, imageSrc,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "card__content" },
    ...{ class: ({ active: __VLS_ctx.isActive }) },
});
// @ts-ignore
[isActive,];
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "card__title" },
});
(__VLS_ctx.name);
// @ts-ignore
[name,];
if (__VLS_ctx.size) {
    // @ts-ignore
    [size,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
        ...{ class: "card__size" },
    });
    (__VLS_ctx.size);
    // @ts-ignore
    [size,];
}
/** @type {__VLS_StyleScopedClasses['card']} */ ;
/** @type {__VLS_StyleScopedClasses['card__image']} */ ;
/** @type {__VLS_StyleScopedClasses['card__content']} */ ;
/** @type {__VLS_StyleScopedClasses['active']} */ ;
/** @type {__VLS_StyleScopedClasses['card__title']} */ ;
/** @type {__VLS_StyleScopedClasses['card__size']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        imageSrc: imageSrc,
        handleErrorImage: handleErrorImage,
    }),
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
