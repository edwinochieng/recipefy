import { View, Text } from "react-native";
import React from "react";

export default function Welcome() {
  return (
    <View>
      <Text className='text-gray-500 font-poppins-medium text-base mb-1'>
        Hello Edwin
      </Text>
      <Text className='text-3xl font-poppins-bold text-gray-700 '>
        What would you like {"\n"} to cook today?
      </Text>
    </View>
  );
}
