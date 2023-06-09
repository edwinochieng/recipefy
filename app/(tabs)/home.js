import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Search from "../../components/Search";
import Categories from "../../components/Categories";
import Recommendation from "../../components/Recommendation";
import PopularRecipes from "../../components/PopularRecipes";
import Welcome from "../../components/Welcome";

export default function Home() {
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
