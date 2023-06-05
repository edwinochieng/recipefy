import { View, Text, FlatList, Image, Pressable } from "react-native";
import categories from "../assets/categories";
import { useRouter } from "expo-router";

export default function Categories() {
  const router = useRouter();
  return (
    <View className='pl-4 mt-4'>
      <Text className='font-poppins-bold text-lg text-gray-700'>
        Categories
      </Text>
      <View className='mt-2 flex-row '>
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <View className='bg-gray-300 rounded-lg mr-2  w-[70px] py-2'>
              <Pressable
                onPress={() => router.push(`/categories/${item.slug}`)}
                className='items-center justify-center'
              >
                <Image source={item.image} className='w-[25px] h-[25px]' />
                <Text className='font-poppins-medium text-gray-700 text-xs mt-1'>
                  {item.name}
                </Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.name}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
