import { create } from "zustand";

export const useSearchHistoryStore = create((set, get) => ({
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

export const useFavoriteRecipesStore = create((set, get) => ({
  favoriteRecipes: [],

  addRecipe: (recipe) => {
    set({ favoriteRecipes: [...get().favoriteRecipes, recipe] });
  },

  removeFromFavorites: (recipeId) => {
    set({
      favoriteRecipes: get().favoriteRecipes.filter(
        (item) => item.id !== recipeId
      ),
    });
  },

  clearStore: () => {
    set({ favoriteRecipes: [] });
  },
}));
