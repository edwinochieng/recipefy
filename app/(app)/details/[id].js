import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { useFavoriteRecipesStore } from "../../../store/store";

const url = "https://api.spoonacular.com/recipes";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();
  const recipeId = id;

  const fetchRecipeDetails = async () => {
    const res = await axios.get(
      `${url}/${recipeId}/information?apiKey=${process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY}`
    );

    return res.data;
  };

  const { data, error, isLoading } = useQuery({
    queryFn: fetchRecipeDetails,
    queryKey: ["recipeDetails"],
  });

  const savedRecipes = useFavoriteRecipesStore(
    (state) => state.favoriteRecipes
  );
  const addToFavorites = useFavoriteRecipesStore((state) => state.addRecipe);
  const removeFromFavorites = useFavoriteRecipesStore(
    (state) => state.removeFromFavorites
  );

  const isRecipeSaved = savedRecipes.some((item) => item.id === recipeId);

  const handleSaveRecipe = () => {
    if (isRecipeSaved) {
      removeFromFavorites(recipeId);
    } else {
      addToFavorites(data);
    }
  };
  const imageUri = data?.image;
  return (
    <View className='flex-1'>
      <View>
        <Image source={{ uri: imageUri }} className='h-[250px]' />
      </View>
      <View className='flex-1 bg-gray-100 p-4'>
        <View className='flex-row space-x-2'>
          <Text className='text-gray-900 text-2xl font-bold mb-2'>
            {data?.title}
          </Text>

          <View className='absolute top-0 right-5 '>
            <Pressable onPress={handleSaveRecipe}>
              <MaterialIcons
                name={isRecipeSaved ? "favorite" : "favorite-outline"}
                size={24}
                color={isRecipeSaved ? "red" : "black"}
              />
            </Pressable>
          </View>
        </View>
        <ScrollView>
          <View>
            <Text className='text-white mb-4'>
              This is a description of the recipe. It provides some details
              about the dish, its ingredients, and any special instructions or
              notes.
            </Text>
            <Text className='text-white text-lg font-bold mb-2'>
              Ingredients:
            </Text>
            <Text className='text-white mb-4'>
              - Ingredient 1{"\n"}- Ingredient 2{"\n"}- Ingredient 3{"\n"}
              ...
            </Text>
            <Text className='text-white text-lg font-bold mb-2'>
              Instructions:
            </Text>
            <Text className='text-white'>
              1. Step 1: Do something{"\n"}
              2. Step 2: Do something else{"\n"}
              3. Step 3: Keep going...{"\n"}
              ...
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
