import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

export default function Profile() {
  const router = useRouter();

  const handleSignOut = () => {
    signOut(auth);
    router.push("/auth/login");
  };
  return (
    <View>
      <Text onPress={handleSignOut} className='bg-red-500 p-3 my-2'>
        Log Out
      </Text>
    </View>
  );
}
