import { computed } from 'vue';
import { notifyService } from '@/services/notifyService';
import Notify from './Notify.vue';
const notifications = computed(() => notifyService.getState().notifications);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "notify-container" },
});
for (const [n, i] of __VLS_getVForSourceType((__VLS_ctx.notifications))) {
    // @ts-ignore
    [notifications,];
    /** @type {[typeof Notify, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Notify, new Notify({
        key: (i),
        ...(n),
    }));
    const __VLS_1 = __VLS_0({
        key: (i),
        ...(n),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
/** @type {__VLS_StyleScopedClasses['notify-container']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        Notify: Notify,
        notifications: notifications,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
