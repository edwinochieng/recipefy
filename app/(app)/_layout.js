import { Stack } from "expo-router";
import BackButton from "../../components/BackButton";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name='(home)' options={{ headerShown: false }} />
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
