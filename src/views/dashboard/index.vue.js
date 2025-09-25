import DefaultLayout from "@/components/layouts/default.vue";
import WrapperContent from "@/components/ui/WrapperContent.vue";
import AppToolbar from '@/components/AppToolbar.vue';
import { RouterView } from 'vue-router';
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof DefaultLayout, typeof DefaultLayout, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(DefaultLayout, new DefaultLayout({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
const { default: __VLS_4 } = __VLS_2.slots;
/** @type {[typeof WrapperContent, typeof WrapperContent, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(WrapperContent, new WrapperContent({
    ...{ class: "documents" },
}));
const __VLS_6 = __VLS_5({
    ...{ class: "documents" },
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const { default: __VLS_8 } = __VLS_7.slots;
/** @type {[typeof AppToolbar, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(AppToolbar, new AppToolbar({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_13 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ]} */ ;
// @ts-ignore
RouterView;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
var __VLS_7;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['documents']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        DefaultLayout: DefaultLayout,
        WrapperContent: WrapperContent,
        AppToolbar: AppToolbar,
        RouterView: RouterView,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
