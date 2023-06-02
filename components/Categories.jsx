import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const categories = [
  {
    name: "Breakfast",
    slug: "breakfast",
    image: require("../assets/icons/breakfast.png"),
  },
  {
    name: "Salad",
    slug: "salad",
    image: require("../assets/icons/salad.png"),
  },
  {
    name: "Appetizers",
    slug: "appetizer",
    image: require("../assets/icons/appetizer.png"),
  },
  {
    name: "Main course",
    slug: "main course",
    image: require("../assets/icons/meal.png"),
  },
  {
    name: "Beverage",
    slug: "beverage",
    image: require("../assets/icons/beverage.png"),
  },
  {
    name: "Dessert",
    slug: "dessert",
    image: require("../assets/icons/dessert.png"),
  },

  {
    name: "Soup",
    slug: "soup",
    image: require("../assets/icons/soup.png"),
  },
  {
    name: "Drinks",
    slug: "drink",
    image: require("../assets/icons/cocktail.png"),
  },
  {
    name: "Snacks",
    slug: "snack",
    image: require("../assets/icons/snack.png"),
  },
];
export default function Categories() {
  return (
    <View className='absolute left-4 top-36 mt-8 right-0  '>
      <Text className='font-poppins-bold text-lg text-gray-700'>
        Categories
      </Text>
      <View className='mt-2 flex-row '>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View className='bg-gray-300 rounded-lg mr-2 items-center justify-center w-[70px] py-2'>
              <Image source={item.image} className='w-[25px] h-[25px]' />
              <Text className='font-poppins-medium text-gray-700 text-xs mt-1'>
                {item.name}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
