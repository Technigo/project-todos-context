import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  currentLanguage: "en", // Default to English
  toggleLanguage: () =>
    set((state) => ({
      currentLanguage: state.currentLanguage === "en" ? "sv" : "en",
    })),
}));
