import { create } from "zustand";

export const appContentStore = create (() => ({
  appContent: {
    heading: "state manegement - zustand"
  }
}))