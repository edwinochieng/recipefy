import { View, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const [query, setQuery] = useState();

  return (
    <View className='p-4'>
      <View className='flex-row justify-between space-x-2 mt-3'>
        <View className='flex-row items-center bg-gray-200 rounded-xl flex-1 '>
          <View className='ml-1'>
            <Ionicons name='search' size={22} color='gray' />
          </View>

          <TextInput
            placeholder='Search by food name'
            value={query}
            onChangeText={(text) => setQuery(text)}
            className='p-2 bg-transparent font-poppins flex-1 rounded-xl'
          />
        </View>

        <View className='bg-gray-200 rounded-lg px-2 items-center justify-center  '>
          <Ionicons name='ios-filter' size={24} color='black' />
        </View>
      </View>
    </View>
  );
}
