import { create } from "zustand";

export interface NotificationItem {
  title: string;
  description: string;
  timespan: string;
  read: boolean;
}

interface NotificationStore {
  selectedNotification: NotificationItem | null;
  setSelectedNotification: (notification: NotificationItem | null) => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
  selectedNotification: null,
  setSelectedNotification: (notification) =>
    set({ selectedNotification: notification }),
}));
