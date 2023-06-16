import { View, TextInput, Modal, Pressable, Text } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useSearchHistoryStore } from "../store/store";
import {
  diet,
  mealTypes,
  cusines,
  intolerances,
  maxPrepationTime,
} from "../assets/filter";

const SelectionList = ({ title, data, selectedItems, toggleItemSelection }) => {
  return (
    <View>
      <Text className='text-gray-700 font-poppins-bold text-base'>{title}</Text>
      <View className='flex-row flex-wrap items-center mt-1'>
        {data.map((item) => (
          <Pressable
            onPress={() => toggleItemSelection(item)}
            key={item}
            className={`p-[7px] rounded mr-1 my-1 ${
              selectedItems.includes(item)
                ? "bg-cyan-400 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            <Text className='font-poppins-medium text-xs'>{item}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedIntolerances, setSelectedIntolerances] = useState([]);
  const [selectedMealTypes, setSelectedMealtypes] = useState([]);
  const [selectedMaxTime, setSelectedMaxTime] = useState([]);

  const toggleCuisineSelection = (cuisine) => {
    if (selectedCuisines.includes(cuisine)) {
      setSelectedCuisines(selectedCuisines.filter((c) => c !== cuisine));
    } else {
      setSelectedCuisines([...selectedCuisines, cuisine]);
    }
  };

  const toggleDietSelection = (diet) => {
    if (selectedDiets.includes(diet)) {
      setSelectedDiets(selectedDiets.filter((d) => d !== diet));
    } else {
      setSelectedDiets([...selectedDiets, diet]);
    }
  };

  const toggleIntoleranceSelection = (intolerance) => {
    if (selectedIntolerances.includes(intolerance)) {
      setSelectedIntolerances(
        selectedIntolerances.filter((i) => i !== intolerance)
      );
    } else {
      setSelectedIntolerances([...selectedIntolerances, intolerance]);
    }
  };
  const toggleMealTypeSelection = (mealType) => {
    if (selectedMealTypes.includes(mealType)) {
      setSelectedMealtypes(selectedMealTypes.filter((m) => m !== mealType));
    } else {
      setSelectedMealtypes([...selectedMealTypes, mealType]);
    }
  };
  const toggleMaxTimeSelection = (maxTime) => {
    if (selectedMaxTime.includes(maxTime)) {
      setSelectedMaxTime(selectedMaxTime.filter((t) => t !== maxTime));
    } else {
      setSelectedMaxTime([...selectedMaxTime, maxTime]);
    }
  };

  const router = useRouter();
  const saveSearch = useSearchHistoryStore((state) => state.addNewSearch);

  const handleSearch = () => {
    let url = `/search?query=${searchQuery}`;

    if (selectedCuisines.length > 0) {
      url += `&cuisine=${selectedCuisines.join(",")}`;
    }

    if (selectedDiets.length > 0) {
      url += `&diet=${selectedDiets.join(",")}`;
    }

    if (selectedIntolerances.length > 0) {
      url += `&intolerances=${selectedIntolerances.join(",")}`;
    }

    if (selectedMealTypes.length > 0) {
      url += `&type=${selectedMealTypes.join(",")}`;
    }

    if (selectedMaxTime.length > 0) {
      url += `&maxReadyTime=${selectedMaxTime.join(",")}`;
    }

    router.push(url);

    saveSearch({
      id: Math.floor(Math.random() * 10000),
      title: searchQuery,
    });
    setSearchQuery("");
  };

  return (
    <View className='px-4'>
      <View className='flex-row justify-between space-x-2 mt-3'>
        <View className='flex-row items-center bg-gray-200 rounded-xl flex-1 '>
          <View className='ml-1'>
            <Ionicons name='search' size={22} color='gray' />
          </View>

          <TextInput
            placeholder='Search by food name'
            value={query}
            onChangeText={(text) => setQuery(text)}
            onSubmitEditing={handleSearch}
            className='p-2 bg-transparent font-poppins flex-1 rounded-xl'
          />
        </View>

        <Pressable
          onPress={() => setFilterVisible((prevValue) => !prevValue)}
          className='bg-gray-200 rounded-lg px-2 items-center justify-center'
        >
          <Ionicons name='ios-filter' size={24} color='black' />
        </Pressable>
      </View>
      <Modal visible={filterVisible}>
        <View className='relative flex-1 justify-center items-center px-4'>
          <View className='absolute top-0 right-5'>
            <Pressable
              onPress={() => setFilterVisible(false)}
              className='bg-red-500 p-2'
            >
              <Text>Close</Text>
            </Pressable>
          </View>

          <View className='flex-1 mt-10'>
            <SelectionList
              title='Cuisines'
              data={cusines}
              selectedItems={selectedCuisines}
              toggleItemSelection={toggleCuisineSelection}
            />
            <SelectionList
              title='Diet'
              data={diet}
              selectedItems={selectedDiets}
              toggleItemSelection={toggleDietSelection}
            />
            <SelectionList
              title='Meal Type'
              data={mealTypes}
              selectedItems={selectedMealTypes}
              toggleItemSelection={toggleMealTypeSelection}
            />
            <SelectionList
              title='Maximum Preparation time'
              data={maxPrepationTime}
              selectedItems={selectedMaxTime}
              toggleItemSelection={toggleMaxTimeSelection}
            />
            <SelectionList
              title='Intolerances'
              data={intolerances}
              selectedItems={selectedIntolerances}
              toggleItemSelection={toggleIntoleranceSelection}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
