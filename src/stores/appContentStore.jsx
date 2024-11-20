import { create } from "zustand";

export const appContentStore = create (() => ({
  appContent: {
    heading: "App To-do list"
  }
}))