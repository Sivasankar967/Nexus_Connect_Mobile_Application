import { create } from 'zustand';
import { notifications as seedNotifications } from '../data/seed';

export const useNotificationStore = create((set, get) => ({
  items: [...seedNotifications],
  readIds: {},

  markAsRead: (id) => {
    set((state) => ({
      readIds: { ...state.readIds, [id]: true },
    }));
  },

  isRead: (id) => !!get().readIds[id],

  unreadCount: () => {
    const { items, readIds } = get();
    return items.filter((n) => !readIds[n.id]).length;
  },
}));
