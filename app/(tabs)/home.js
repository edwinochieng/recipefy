import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Search from "../../components/Search";
import Categories from "../../components/Categories";

export default function Home() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 p-4 min-h-screen'>
          <Search />
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
