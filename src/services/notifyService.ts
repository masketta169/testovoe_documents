import { reactive } from 'vue';

export interface NotifyOptions {
  message: string;
  type?: 'error' | 'success' | 'info';
  duration?: number;
}

const state = reactive<{ notifications: NotifyOptions[] }>({
  notifications: [],
});

export const notifyService = {
  show(options: NotifyOptions) {
    state.notifications.push(options);
    setTimeout(() => {
      const index = state.notifications.indexOf(options);
      if (index !== -1) state.notifications.splice(index, 1);
    }, options.duration || 3000);
  },
  getState() {
    return state;
  },
};
