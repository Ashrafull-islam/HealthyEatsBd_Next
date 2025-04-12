import { create } from "zustand";

const useStore = create((set) => ({
  count: 0, // State

  increase: () => set((state) => ({ count: state.count + 1 })), // Action to update state
  decrease: () => set((state) => ({ count: state.count - 1 })), 
}));

export default useStore;
