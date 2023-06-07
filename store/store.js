import { create } from "zustand";

const useStore = create((set, get) => ({
  searchHistory: [],

  addNewSearch: (newSearch) => {
    set({ searchHistory: [...get().searchHistory, newSearch] });
  },

  removeSearch: (searchId) => {
    set({
      searchHistory: get().searchHistory.filter((item) => item.id !== searchId),
    });
  },
  clearStore: () => {
    set({ searchHistory: [] });
  },
}));

export default useStore;
