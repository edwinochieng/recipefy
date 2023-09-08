import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useQuery } from "@tanstack/react-query";
import RecipeCard from "../../components/RecipeCard";
import axios from "axios";

const url = "https://api.spoonacular.com/recipes/random";

export default function Categories() {
  const { slug } = useLocalSearchParams();

  const fetchRecipes = async () => {
    const res = await axios.get(
      `${url}?apiKey=${process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY}&number=20&tags=${slug}`
    );

    return res.data;
  };

  const { data, error, isLoading } = useQuery({
    queryFn: fetchRecipes,
    queryKey: ["categorizedRecipes"],
  });

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 p-4'>
          <View className='flex-row flex-wrap justify-between mt-1'>
            {data?.recipes.map((recipe) => (
              <View key={recipe.id} className='w-[49%] my-1'>
                <RecipeCard recipe={recipe} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
