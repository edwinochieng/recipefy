import { View, Text } from "react-native";
import React from "react";

export default function Welcome() {
  return (
    <View className='px-4'>
      <Text className='text-3xl font-poppins-bold text-gray-700 '>
        What would you like {"\n"} to cook today?
      </Text>
    </View>
  );
}
