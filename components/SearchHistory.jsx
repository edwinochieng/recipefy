import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import { useSearchHistoryStore } from "../store/store";

export default function SearchHistory() {
  const searchHistory = useSearchHistoryStore((state) => state.searchHistory);
  const removeSearch = useSearchHistoryStore((state) => state.removeSearch);
  return (
    <View className='flex-1 px-4'>
      {searchHistory.length > 0 ? (
        <View className='mt-3'>
          <View className='flex-row justify-between'>
            <Text className='font-semibold'>Recent Searches</Text>
            <Text className='font-poppins-medium text-xs'>Clear history</Text>
          </View>

          <View className='my-1'>
            <FlatList
              data={searchHistory}
              renderItem={({ item }) => (
                <View className='bg-white rounded-md p-2 flex-row justify-between'>
                  <Text>{item.title}</Text>
                  <Pressable onPress={() => removeSearch(item.id)}>
                    <Text>Remove</Text>
                  </Pressable>
                </View>
              )}
            />
          </View>
        </View>
      ) : (
        <View className='flex-1 justify-center item-center'>
          <Text className='text-2xl'>Search recipes</Text>
        </View>
      )}
    </View>
  );
}
