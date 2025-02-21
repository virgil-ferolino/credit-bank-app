import { create } from "zustand";

interface OnboardState {
  isOnboarded: boolean;
  completeOnboarding: (isOnboarded: boolean) => void;
}

export const useOnboard = create<OnboardState>((set) => ({
  isOnboarded: false,
  completeOnboarding: (isOnboarded) => set({ isOnboarded: isOnboarded }),
}));
