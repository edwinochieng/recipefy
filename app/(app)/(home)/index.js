import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Welcome from "../../../components/Welcome";
import Search from "../../../components/Search";
import Categories from "../../../components/Categories";
import Recommendation from "../../../components/Recommendation";
import PopularRecipes from "../../../components/PopularRecipes";

export default function HomePage() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1'>
          <Welcome />
          <Search />
          <Categories />
          <Recommendation />
          <PopularRecipes />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
