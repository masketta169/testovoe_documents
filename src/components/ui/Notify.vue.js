import { ref, defineProps, onMounted } from 'vue';
const props = defineProps();
const visible = ref(false);
const type = props.type || 'info';
const duration = props.duration || 3000;
const close = () => {
    visible.value = false;
};
onMounted(() => {
    visible.value = true;
    if (duration > 0) {
        setTimeout(() => {
            visible.value = false;
        }, duration);
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.transition;
/** @type {[typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ]} */ ;
// @ts-ignore
Transition;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    name: "fade",
}));
const __VLS_2 = __VLS_1({
    name: "fade",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
if (__VLS_ctx.visible) {
    // @ts-ignore
    [visible,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "notify" },
        ...{ class: (__VLS_ctx.type) },
    });
    // @ts-ignore
    [type,];
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    (__VLS_ctx.message);
    // @ts-ignore
    [message,];
    __VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
        ...{ onClick: (__VLS_ctx.close) },
        ...{ class: "notify__close" },
    });
    // @ts-ignore
    [close,];
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['notify']} */ ;
/** @type {__VLS_StyleScopedClasses['notify__close']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        visible: visible,
        type: type,
        close: close,
    }),
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
