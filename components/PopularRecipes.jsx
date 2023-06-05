import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SPOONACULAR_API_KEY } from "@env";
import RecipeCard from "./RecipeCard";

const url = "https://api.spoonacular.com/recipes/random";

export default function PopularRecipes() {
  const fetchPopularRecipes = async () => {
    const res = await axios.get(
      `${url}?apiKey=${SPOONACULAR_API_KEY}&number=8`
    );

    return res.data;
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["popularRecipes"],
    queryFn: fetchPopularRecipes,
  });

  return (
    <View className='px-4 my-6 flex-1'>
      <Text className='font-poppins-bold text-lg text-gray-700 '>
        Popular Recipes
      </Text>
      <View className='flex-row flex-wrap justify-between mt-1'>
        {data?.recipes.map((recipe) => (
          <View key={recipe.id} className='w-[49%] my-1'>
            <RecipeCard recipe={recipe} />
          </View>
        ))}
      </View>
    </View>
  );
}
