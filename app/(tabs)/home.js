import { SafeAreaView, ScrollView, View } from "react-native";
import React from "react";
import Search from "../../components/Search";
import Categories from "../../components/Categories";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-1 px-4'>
          <Search />
          <Categories />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
