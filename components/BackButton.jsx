import { Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function BackButton() {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.back()}
      className='bg-gray-200 rounded-md p-2 items-center justify-center '
    >
      <Ionicons name='chevron-back-sharp' size={20} color='black' />
    </Pressable>
  );
}
