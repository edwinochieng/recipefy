import { View, SafeAreaView, ScrollView, Text } from "react-native";
import React from "react";
import RecipeCard from "../../../components/RecipeCard";
import { useFavoriteRecipesStore } from "../../../store/store";

export default function Saved() {
  const favoriteRecipes = useFavoriteRecipesStore(
    (state) => state.favoriteRecipes
  );

  return (
    <SafeAreaView className='flex-1'>
      {favoriteRecipes?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className='flex-1 p-4'>
            <View className='flex-row flex-wrap justify-between mt-1'>
              {favoriteRecipes?.map((recipe) => (
                <View key={recipe.id} className='w-[49%] my-1'>
                  <RecipeCard recipe={recipe} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View className='flex-1 items-center justify-center'>
          <Text>Opps!No saved recipes!</Text>
        </View>
      )}
    </SafeAreaView>
  );
}
