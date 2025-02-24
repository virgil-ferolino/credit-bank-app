import { create } from "zustand";

export interface NotificationItem {
  title: string;
  description: string;
  timespan: string;
  read: boolean;
}

interface NotificationStore {
  notifications: NotificationItem[];
  selectedNotification: NotificationItem | null;
  setNotifications: (notifications: NotificationItem[]) => void;
  markAsRead: (index: number) => void;
  markAllAsRead: () => void;
  setSelectedNotification: (notification: NotificationItem | null) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  selectedNotification: null,
  setNotifications: (notifications) => set({ notifications }),
  setSelectedNotification: (notification) =>
    set({ selectedNotification: notification }),
  markAsRead: (index) =>
    set((state) => ({
      notifications: state.notifications.map((item, i) =>
        i === index ? { ...item, read: true } : item
      ),
    })),
  markAllAsRead: () =>
    set((state) => ({
      notifications: state.notifications.map((item) => ({
        ...item,
        read: true,
      })),
    })),
}));
