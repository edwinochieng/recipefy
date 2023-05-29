import React, { useState } from "react";
import { View, Text, TextInput, Pressable, SafeAreaView } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebaseConfig";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleSignUp = ({ name, email, password }) => {
    const auth = getAuth(app);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <Stack.Screen options={{ headerShadowVisible: false }} />

      <View className='flex-1 p-4 absolute top-[10%]'>
        <View className='mb-10'>
          <Text className='text-2xl font-bold text-gray-800'>Sign Up</Text>
        </View>
        <Controller
          control={control}
          rules={{
            required: "Name is required",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Name'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className={`rounded-lg p-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
          )}
          name='name'
        />
        {errors.name && (
          <Text className='text-red-500'>{errors.name.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder='Email'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              className={`rounded-lg mt-3 p-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
          )}
          name='email'
        />
        {errors.email && (
          <Text className='text-red-500'>{errors.email.message}</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View className='flex flex-row items-center justify-between mt-3'>
              <TextInput
                placeholder='Password'
                onBlur={onBlur}
                secureTextEntry={!passwordVisible}
                onChangeText={onChange}
                value={value}
                className={`w-full h-full rounded-lg p-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:border-blue-500`}
              />
              <Pressable
                onPress={() => setPasswordVisible((prevValue) => !prevValue)}
                className='absolute right-0 mr-2'
              >
                <Ionicons
                  name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                  size={20}
                  color='gray'
                />
              </Pressable>
            </View>
          )}
          name='password'
        />
        {errors.password && (
          <Text className='text-red-500'>{errors.password.message}</Text>
        )}

        <View className='mt-8'>
          <View>
            <Pressable
              className='bg-blue-600 py-3 rounded-lg'
              onPress={handleSubmit(handleSignUp)}
            >
              <Text className='text-white text-center font-semibold text-lg'>
                Sign Up
              </Text>
            </Pressable>
          </View>

          <View className='flex-row justify-center mt-5'>
            <Text>Already have an account?</Text>
            <Text
              onPress={() => router.push("auth/login")}
              className='ml-1 text-blue-600'
            >
              Log in
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
