import { create } from "zustand";

interface OnboardState {
  isOnboarded: boolean;
  completeOnboarding: () => void;
}

export const useOnboard = create<OnboardState>((set) => ({
  isOnboarded: false,
  completeOnboarding: () => set({ isOnboarded: true }),
}));
