import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { SPOONACULAR_API_KEY } from "@env";

const url = "https://api.spoonacular.com/recipes/random";

export default function PopularRecipes() {
  const fetchPopularRecipes = async () => {
    const res = await axios.get(
      `${url}?apiKey=${SPOONACULAR_API_KEY}&number=10`
    );

    return res.data;
  };

  const query = useQuery({
    queryKey: ["recipes"],
    queryFn: fetchPopularRecipes,
  });

  return (
    <View className='px-4 mt-6 flex-1'>
      <Text className='font-poppins-bold text-lg text-gray-700 '>
        Popular Recipes
      </Text>
    </View>
  );
}
