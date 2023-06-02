import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const [query, setQuery] = useState();

  return (
    <View className='flex-row space-x-2 mt-5'>
      <View className='flex-row items-center bg-gray-200 rounded-xl w-4/5'>
        <View className='ml-1'>
          <Ionicons name='search' size={22} color='gray' />
        </View>

        <TextInput
          placeholder='Search by food name'
          value={query}
          onChangeText={(text) => setQuery(text)}
          className='p-2 bg-transparent font-poppins w-full'
        />
      </View>

      <View className='bg-gray-200 rounded-lg p-2 items-center justify-center  '>
        <Ionicons name='ios-filter' size={24} color='black' />
      </View>
    </View>
  );
}
