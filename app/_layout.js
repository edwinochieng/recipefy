import { Stack, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BackButton from "../components/BackButton";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

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

  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.replace("/");
    } else {
      router.replace("/login");
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen
          name='categories/[slug]'
          options={{
            headerLeft: () => <BackButton />,
            headerTitle: "",
          }}
        />
      </Stack>
    </QueryClientProvider>
  );
}
