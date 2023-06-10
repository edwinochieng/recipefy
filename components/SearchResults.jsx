import { View, Text, ScrollView } from "react-native";
import React from "react";
import RecipeCard from "./RecipeCard";

export default function SearchResults({ results }) {
  if (results.length === 0) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text>Oppss!!No results found</Text>
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className='flex-1'>
        <View className='my-1'>
          <Text className='font-poppins-bold text-lg text-gray-700 '>
            Search results
          </Text>
        </View>

        <View className='flex flex-row flex-wrap justify-between mt-1'>
          {results.map((recipe) => (
            <View key={recipe.id} className='w-[49%] my-1'>
              <RecipeCard recipe={recipe} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
