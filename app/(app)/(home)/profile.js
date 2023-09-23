import { View, Text } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { UserAuth } from "../../../auth/AuthContext";

export default function Profile() {
  const router = useRouter();
  const { user, logOut } = UserAuth();

  const handleSignOut = () => {
    logOut();
    router.push("/login");
  };
  return (
    <View>
      <Text onPress={handleSignOut} className='bg-red-500 p-3 my-2'>
        Log Out
      </Text>
    </View>
  );
}
