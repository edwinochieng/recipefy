import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function Categories() {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>{slug}</Text>
    </View>
  );
}
