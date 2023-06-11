import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function RecipeCard({ recipe }) {
  const [isSaved, setIsSaved] = useState(false);

  const imageUri = recipe.image;
  return (
    <View className='bg-white rounded-lg'>
      <View className='relative'>
        <Image
          source={{ uri: imageUri }}
          className='flex-1 h-[200px] rounded-lg'
        />

        <View className='absolute top-0 right-5 '>
          <Pressable onPress={() => setIsSaved(!isSaved)}>
            <MaterialIcons
              name={isSaved ? "favorite" : "favorite-outline"}
              size={24}
              color='black'
            />
          </Pressable>
        </View>

        <View className='absolute bottom-10 right-0 left-0 flex-1 mt-1 px-2'>
          <Text className='font-poppins-medium text-gray-700'>
            {recipe.title}
          </Text>
        </View>
      </View>
    </View>
  );
}
