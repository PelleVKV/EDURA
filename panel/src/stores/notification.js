import { writable } from 'svelte/store';

export const notification = writable({
  message: '',
  isVisible: false,
  duration: 3000,
});

export const showNotification = (message, duration = 3000) => {
  notification.set({ message, isVisible: true, duration });

  setTimeout(() => {
    notification.set({ message: '', isVisible: false, duration });
  }, duration);
};