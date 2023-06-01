import { View, Text } from "react-native";
import React from "react";
import cake from "../assets/icons/";

const categories = [
  {
    name: "Breakfast",
    slug: "breakfast",
    image: "../assets/icons/breakfast.png",
  },
  {
    name: "Salad",
    slug: "salad",
    image: "../assets/icons/salad.png",
  },
  {
    name: "Main course",
    slug: "main course",
    image: "../assets/icons/meal.png",
  },
  {
    name: "Dessert",
    slug: "dessert",
    image: "../assets/icons/dessert.png",
  },

  {
    name: "Soup",
    slug: "soup",
    image: "../assets/icons/soup.png",
  },
  {
    name: "Drinks",
    slug: "drink",
    image: "../assets/icons/cocktail.png",
  },
];
export default function Categories() {
  return (
    <View>
      <Text>Categories</Text>
    </View>
  );
}
