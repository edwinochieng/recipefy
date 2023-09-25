import { Redirect, Stack } from "expo-router";
import { UserAuth } from "../../auth/AuthContext";
import BackButton from "../../components/BackButton";

export default function AppLayout() {
  const { user } = UserAuth();

  return (
    <Stack>
      <Stack.Screen name='(home)' options={{ headerShown: false }} />
      <Stack.Screen name='(auth)' options={{ headerShown: false }} />
      <Stack.Screen
        name='categories/[slug]'
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name='details/[id]'
        options={{
          headerLeft: () => <BackButton />,
          headerTitle: "",
        }}
      />
    </Stack>
  );
}
