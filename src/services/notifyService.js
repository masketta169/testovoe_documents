import { reactive } from 'vue';
const state = reactive({
    notifications: [],
});
export const notifyService = {
    show(options) {
        state.notifications.push(options);
        setTimeout(() => {
            const index = state.notifications.indexOf(options);
            if (index !== -1)
                state.notifications.splice(index, 1);
        }, options.duration || 3000);
    },
    getState() {
        return state;
    },
};
