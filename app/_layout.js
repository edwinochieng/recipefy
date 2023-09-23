import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import { AuthContextProvider } from "../auth/AuthContext";

const queryClient = new QueryClient();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
