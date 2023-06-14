import { View, TextInput, Modal, Pressable, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSearchHistoryStore } from "../store/store";
import { diet, mealTypes, cusines } from "../assets/filter";

export default function Search() {
  const [query, setQuery] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);

  const router = useRouter();
  const saveSearch = useSearchHistoryStore((state) => state.addNewSearch);

  const handleSearch = () => {
    router.push(`/search?query=${query}`);
    saveSearch({
      id: Math.floor(Math.random() * 10000),
      title: query,
    });
    setQuery("");
  };

  return (
    <View className='px-4'>
      <View className='flex-row justify-between space-x-2 mt-3'>
        <View className='flex-row items-center bg-gray-200 rounded-xl flex-1 '>
          <View className='ml-1'>
            <Ionicons name='search' size={22} color='gray' />
          </View>

          <TextInput
            placeholder='Search by food name'
            value={query}
            onChangeText={(text) => setQuery(text)}
            onSubmitEditing={handleSearch}
            className='p-2 bg-transparent font-poppins flex-1 rounded-xl'
          />
        </View>

        <Pressable
          onPress={() => setFilterVisible((prevValue) => !prevValue)}
          className='bg-gray-200 rounded-lg px-2 items-center justify-center'
        >
          <Ionicons name='ios-filter' size={24} color='black' />
        </Pressable>
      </View>
      <Modal visible={filterVisible}>
        <View className='flex-1 justify-center items-center'>
          <Pressable
            onPress={() => setFilterVisible(false)}
            className='bg-red-500 p-2'
          >
            <Text>Close</Text>
          </Pressable>

          <View className='flex-1'>
            <View>
              <Text>Cuisines</Text>
              <View className='flex-row flex-wrap'>
                {cusines.map((item) => (
                  <View key={item.name}>
                    <Text>{item.name}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
