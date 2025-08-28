import { create } from "zustand";

export interface StoreInterface {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  logout: () => void;
}

export const useStore = create<StoreInterface>((set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
  logout: () => set({ isLoggedIn: false }),
}));
