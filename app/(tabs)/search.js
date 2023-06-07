import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Search from "../../components/Search";
import SearchHistory from "../../components/SearchHistory";

export default function SearchScreen() {
  return (
    <SafeAreaView className='flex-1'>
      <View className='flex-1'>
        <Search />
        <SearchHistory />
      </View>
    </SafeAreaView>
  );
}
