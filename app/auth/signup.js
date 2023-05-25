import { View, Text, TextInput, Pressable } from "react-native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);

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

  return (
    <View className='flex-1 justify-center px-5 bg-red-500'>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Name'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className='my-2 bg-white rounded mb-1 py-2'
          />
        )}
        name='name'
      />
      {errors.name && <Text>Enter name</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder='Email'
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            className='bg-white rounded mb-1 py-2'
          />
        )}
        name='email'
      />
      {errors.email && <Text>Enter email</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View className='bg-white rounded py-2 px-1 flex-1 justify-between'>
            <TextInput
              placeholder='Password'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Pressable>
              <Ionicons
                name={passwordVisible ? "eye-off-outline" : "eye-outline"}
                size={24}
                color='black'
              />
            </Pressable>
          </View>
        )}
        name='password'
      />
      {errors.password && <Text>Enter password</Text>}

      <View>
        <View className='mt-4'>
          <Pressable className='bg-blue-600 py-3 rounded'>
            <Text className='text-white text-center'>Sign Up</Text>
          </Pressable>
        </View>

        <View className='flex-row justify-center mt-3'>
          <Text>Already have an account?</Text>
          <Text className='ml-1 text-blue-600'>Sign in</Text>
        </View>
      </View>
    </View>
  );
}
