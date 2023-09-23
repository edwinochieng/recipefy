import { Tabs, useGlobalSearchParams, useRouter } from "expo-router";
import { Pressable } from "react-native";
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons";

export default function Layout() {
  const router = useRouter();
  const { query } = useGlobalSearchParams();

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name='home' size={size} color={color} />
          ),

          headerTitle: "",
        }}
      />
      <Tabs.Screen
        name='search'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search-outline' size={size} color={color} />
          ),
          headerTitle: "",
          headerLeft: () =>
            query && (
              <Pressable
                onPress={() => router.push("/search")}
                className='bg-gray-200 rounded-md p-2 items-center justify-center '
              >
                <Ionicons name='chevron-back-sharp' size={20} color='black' />
              </Pressable>
            ),
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='bookmark-outline' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='account' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
