import { View, Text, Image, ScrollView, Pressable } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { useFavoriteRecipesStore } from "../../../store/store";
import HTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";

const url = "https://api.spoonacular.com/recipes";

export default function RecipeDetails() {
  const { width } = useWindowDimensions();
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

  const isRecipeSaved = savedRecipes.some((item) => item.id === data?.id);

  const handleSaveRecipe = () => {
    if (isRecipeSaved) {
      removeFromFavorites(data?.id);
    } else {
      addToFavorites(data);
    }
  };
  const imageUri = data?.image;
  const htmlContent = data?.instructions;
  return (
    <View className='flex-1'>
      <View>
        <Image source={{ uri: imageUri }} className='h-[250px]' />
      </View>
      <View className='flex-1 bg-gray-100 p-4'>
        <View className='flex-row space-x-2 w-full'>
          <Text className='text-gray-900 text-2xl font-bold mb-2'>
            {data?.title}
          </Text>

          <View className='flex-row justify-end'>
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
            <View>
              <Text className='text-gray-900 text-lg font-bold mb-2'>
                Ingredients:
              </Text>
              <View>
                {data?.extendedIngredients.map((ingredient) => (
                  <View
                    key={ingredient.id}
                    className='w-full flex-row justify-between text-black'
                  >
                    <View>
                      <Text>{ingredient.original}</Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>

            <View className='pt-[7px] text-gray-500'>
              <Text className='font-semibold text-[16px] text-gray-700'>
                Preparation
              </Text>
              <View className='flex-1 w-full'>
                <HTML source={{ html: htmlContent }} contentWidth={width} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
