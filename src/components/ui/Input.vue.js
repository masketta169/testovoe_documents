const props = withDefaults(defineProps(), {
    modelValue: '',
    placeholder: ''
});
const emit = defineEmits();
const handleInput = (event) => {
    const target = event.target;
    emit('update:modelValue', target.value);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_withDefaultsArg = (function (t) { return t; })({
    modelValue: '',
    placeholder: ''
});
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.input)({
    ...{ onInput: (__VLS_ctx.handleInput) },
    ...{ class: "field" },
    type: "text",
    value: (__VLS_ctx.modelValue),
    placeholder: (__VLS_ctx.placeholder),
});
// @ts-ignore
[handleInput, modelValue, placeholder,];
/** @type {__VLS_StyleScopedClasses['field']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        handleInput: handleInput,
    }),
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
export default (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
; /* PartiallyEnd: #4569/main.vue */
