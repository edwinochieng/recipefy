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
  const fetchRecipes = async () => {
    const res = await axios.get(
      `${url}?apiKey=${process.env.EXPO_PUBLIC_SPOONACULAR_API_KEY}&query=${query}`
    );

    return res.data;
  };
  const { data, isLoading, error } = useQuery({
    queryKey: ["searchResults"],
    queryFn: fetchRecipes,
  });
  const results = data?.results;

  return (
    <SafeAreaView className='flex-1'>
      {query ? (
        <SearchResults results={results} />
      ) : (
        <View className='flex-1 py-2'>
          <Search />
          <SearchHistory />
        </View>
      )}
    </SafeAreaView>
  );
}
