import { View, SafeAreaView } from "react-native";
import React from "react";
import Search from "../../components/Search";
import SearchHistory from "../../components/SearchHistory";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import SearchResults from "../../components/SearchResults";
import { useQuery } from "@tanstack/react-query";
import { SPOONACULAR_API_KEY } from "@env";

const url = "https://api.spoonacular.com/recipes/complexSearch";

export default function SearchScreen() {
  const { query, cuisine, diet, type, intolerances, maxReadyTime } =
    useLocalSearchParams();
  const queryParams = [];

  if (query) {
    queryParams.push(`query=${query}`);
  }

  if (diet) {
    queryParams.push(`diet=${diet}`);
  }
  if (type) {
    queryParams.push(`type=${type}`);
  }

  if (cuisine) {
    queryParams.push(`cuisine=${cuisine}`);
  }
  if (intolerances) {
    queryParams.push(`intolerances=${intolerances}`);
  }

  if (maxReadyTime) {
    queryParams.push(`maxReadyTime=${maxReadyTime}`);
  }

  const queryString = queryParams.join("&");

  const fetchRecipes = async () => {
    const res = await axios.get(
      `${url}?apiKey=${SPOONACULAR_API_KEY}${
        queryString ? `&${queryString}` : ""
      }`
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
        <View className='flex-1'>
          <Search />
          <SearchHistory />
        </View>
      )}
    </SafeAreaView>
  );
}
