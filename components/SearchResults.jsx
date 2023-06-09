import { View, Text, ScrollView } from "react-native";
import React from "react";
import RecipeCard from "./RecipeCard";

export default function SearchResults({ results }) {
  return (
    <>
      {results?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='px-4 my-6 flex-1'>
            <Text className='font-poppins-bold text-lg text-gray-700 '>
              Search results
            </Text>
            <View className='flex-1 flex-row flex-wrap justify-between mt-1'>
              {results.map((recipe) => (
                <View key={recipe.id} className='w-[49%] my-1'>
                  <RecipeCard recipe={recipe} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View className='flex-1 justify-center items-center'>
          <Text>Oppss!!No results found</Text>
        </View>
      )}
    </>
  );
}
