import { View, SafeAreaView } from "react-native";
import React from "react";
import Search from "../../components/Search";
import SearchHistory from "../../components/SearchHistory";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import SearchResults from "../../components/SearchResults";
import { useQuery } from "@tanstack/react-query";

const url = "https://api.spoonacular.com/recipes/complexSearch";

export default function SearchScreen() {
  const { query } = useLocalSearchParams();

  return (
    <SafeAreaView className='flex-1'>
      {query ? (
        <SearchResults />
      ) : (
        <View className='flex-1'>
          <Search />
          <SearchHistory />
        </View>
      )}
    </SafeAreaView>
  );
}
