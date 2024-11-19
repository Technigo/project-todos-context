import { create } from "zustand";

export const useUserStore = create((set) => ({
  isLoggedin: false,
  userName: "JohnDoe",

  toggleLogIn: () => set((state) => ({isLoggedIn: !state.isLoggedIn })),
  setUserName: (newUserName) => set({userName: newUserName})
}));