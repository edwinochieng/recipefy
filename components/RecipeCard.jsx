import { View, Text, Image } from "react-native";
import React from "react";

export default function RecipeCard({ recipe }) {
  const imageUri = recipe.image;
  return (
    <View className='bg-white rounded-lg'>
      <View>
        <Image
          source={{ uri: imageUri }}
          className='flex-1 h-[200px] rounded-lg'
        />
      </View>
      <View className='flex-1 mt-1 px-2'>
        <Text className='font-poppins-medium text-gray-700'>
          {recipe.title}
        </Text>
      </View>
    </View>
  );
}
