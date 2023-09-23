import { View, SafeAreaView } from "react-native";
import React from "react";
import Search from "../../../components/Search";
import SearchHistory from "../../../components/SearchHistory";
import { useLocalSearchParams } from "expo-router";
import SearchResults from "../../../components/SearchResults";

export default function SearchScreen() {
  const { query } = useLocalSearchParams();
  return (
    <SafeAreaView className='flex-1'>
      {query ? (
        <SearchResults searchQuery={query} />
      ) : (
        <View className='flex-1 py-2'>
          <Search />
          <SearchHistory />
        </View>
      )}
    </SafeAreaView>
  );
}
