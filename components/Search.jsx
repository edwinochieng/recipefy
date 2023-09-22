import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSearchHistoryStore } from "../store/store";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const router = useRouter();
  const saveSearch = useSearchHistoryStore((state) => state.addNewSearch);

  const handleSearch = () => {
    let url = `/search?query=${searchQuery}`;

    router.push(url);

    saveSearch({
      id: Math.floor(Math.random() * 10000),
      title: searchQuery,
    });
    setSearchQuery("");
  };

  return (
    <View className='px-4'>
      <View className='flex-row items-center bg-gray-200 rounded-xl flex-1 '>
        <View className='ml-1'>
          <Ionicons name='search' size={22} color='gray' />
        </View>

        <TextInput
          placeholder='Search by food name'
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          onSubmitEditing={handleSearch}
          className='p-2 bg-transparent font-poppins flex-1 rounded-xl'
        />
      </View>
    </View>
  );
}
