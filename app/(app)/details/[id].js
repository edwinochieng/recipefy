import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = "https://api.spoonacular.com/recipes";

export default function RecipeDetails() {
  const { id } = useLocalSearchParams();

  const fetchRecipeDetails = async () => {
    const res = await axios.get(
      `${url}/${id}/information?apiKey=${process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY}`
    );

    return res.data;
  };

  const { data, error, isLoading } = useQuery({
    queryFn: fetchRecipeDetails,
    queryKey: ["recipeDetails"],
  });

  return (
    <View className='flex-1'>
      <View>
        <Image source={require("../../../assets/icons/meal.png")}></Image>
      </View>

      <ScrollView style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <View className='p-4'>
          <Text className='text-white text-2xl font-bold mb-2'>
            Delicious Recipe Title
          </Text>
          <Text className='text-white mb-4'>
            This is a description of the recipe. It provides some details about
            the dish, its ingredients, and any special instructions or notes.
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
  );
}
