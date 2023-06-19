import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useFavoriteRecipesStore } from "../store/store";
import { useRouter } from "expo-router";

export default function RecipeCard({ recipe }) {
  const router = useRouter();

  const savedRecipes = useFavoriteRecipesStore(
    (state) => state.favoriteRecipes
  );
  const addToFavorites = useFavoriteRecipesStore((state) => state.addRecipe);
  const removeFromFavorites = useFavoriteRecipesStore(
    (state) => state.removeFromFavorites
  );

  const isRecipeSaved = savedRecipes.some((item) => item.id === recipe.id);

  const handleSaveRecipe = () => {
    if (isRecipeSaved) {
      removeFromFavorites(recipe.id);
    } else {
      addToFavorites(recipe);
    }
  };

  const imageUri = recipe.image;
  return (
    <Pressable
      onPress={() => router.push(`/details/${recipe.id}`)}
      className='bg-white rounded-lg'
    >
      <View className='relative'>
        <Image
          source={{ uri: imageUri }}
          className='flex-1 h-[200px] rounded-lg'
        />

        <View className='absolute top-0 right-5 '>
          <Pressable onPress={handleSaveRecipe}>
            <MaterialIcons
              name={isRecipeSaved ? "favorite" : "favorite-outline"}
              size={24}
              color={isRecipeSaved ? "red" : "black"}
            />
          </Pressable>
        </View>

        <View className='absolute bottom-10 right-0 left-0 flex-1 mt-1 px-2'>
          <Text className='font-poppins-medium text-gray-700'>
            {recipe.title}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
