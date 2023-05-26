import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Home() {
  const router = useRouter();
  return (
    <Text className='text-lg text-red-500 font-poppins'>
      <Pressable onPress={() => router.push("auth/signup")}>
        <Text>Sign Up</Text>
      </Pressable>
    </Text>
  );
}
