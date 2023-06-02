import { View, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function Search() {
  const [query, setQuery] = useState();

  return (
    <View className='absolute left-4 top-0 right-4'>
      <View className='mt-2'>
        <Text className='text-gray-500 font-poppins-medium text-base mb-1'>
          Hello Edwin
        </Text>
        <Text className='text-3xl font-poppins-bold text-gray-700 '>
          What would you like {"\n"} to cook today?
        </Text>
      </View>
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
