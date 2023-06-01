import { SafeAreaView, View } from "react-native";
import React from "react";
import Search from "../../components/Search";
import Categories from "../../components/Categories";

export default function Home() {
  return (
    <SafeAreaView className='flex-1 '>
      <Search />
      <Categories />
    </SafeAreaView>
  );
}
