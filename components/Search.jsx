import { View, TextInput } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const [query, setQuery] = useState();

  return (
    <View className='flex-row'>
      <View className='flex-row'>
        <View className='absolute left-0'>
          <Ionicons name='search' size={24} color='black' />
        </View>

        <TextInput
          placeholder='Search by food name'
          value={query}
          onChangeText={(text) => setQuery(text)}
          className='p-2 rounded-md bg-gray-200'
        />
      </View>

      <View className='bg-gray-200 rounded p-2 items-center justify-center'>
        <Ionicons name='ios-filter' size={24} color='black' />
      </View>
    </View>
  );
}
