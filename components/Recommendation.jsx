import { View, Text, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Recommendation() {
  return (
    <View className='flex-1 px-4 mt-6'>
      <Text className='font-poppins-bold text-lg text-gray-700 '>
        Pick of the day
      </Text>
      <View className='flex-1 bg-white rounded-lg mt-2 flex-row p-3'>
        <View>
          <Image
            source={require("../assets/icons/meal.png")}
            className='h-[120px] w-[120px]'
          />
        </View>
        <View className='flex-1 ml-3'>
          <Text className='font-poppins-medium text-2xl text-gray-700 '>
            Strawberry Yorghut Jars
          </Text>
          <View className='flex-row mt-2'>
            <View className='flex-row'>
              <AntDesign name='star' size={14} color='orange' />
              <Text className='ml-1'>4.6</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
