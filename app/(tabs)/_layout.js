import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }}>
      <Tabs.Screen
        name='home'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name='home' size={size} color={color} />
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
        }}
      />
      <Tabs.Screen
        name='saved'
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='md-bookmark' size={size} color={color} />
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
