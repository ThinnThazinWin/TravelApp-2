import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
const ItemScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn.pixabay.com/photo/2022/12/18/01/01/toy-7662562__340.jpg",
            }}
            className="w-full h-72 object-cover rounded-2xl"
          />
          <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Discover")}
              className="w-10 h-10 rounded-md items-center justify-center bg-white"
            >
              <Feather name="chevron-left" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-white">
              <FontAwesome name="heartbeat" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View className="absolute flex-row inset-x-60 bottom-1 items-center justify-between ">
          <View className="flex-row">
          <MaterialIcons name="attach-money" size={24} color="#527283" />
            <Text className="text-[#fff] text-[20px] font-bold">
              {data?.price}
            </Text>
          </View>
          
            <View className="flex-row">
            <MaterialIcons name="attach-money" size={24} color="#527283" />
            <Text className="text-[#fff] text-[20px] font-bold">
              {data?.price_level}
            </Text>
            </View>
           
            <Text className="text-[#fff] text-[20px] font-bold w-20 items-center justify-center px-2 pt-2 h-12 rounded-md bg-slate-500">
              closed
            </Text>
          </View>
        </View>
        <View className="mt-4">
          <Text className="text-[20px] text-[#527283] font-bold">
            {data?.name}
          </Text>
          <View className="flex-row mt-4">
            <FontAwesome5 name="map-marker-alt" size={24} color="#527283" />
            <Text className="text-[20px] text-[#527283] font-bold">
              {data?.location_string}
            </Text>
          </View>
          <Text className="mt-4">{data?.description}</Text>

          <View className="flex-row justify-between mt-4">
            <View className="flex-row ">
              <View className=" rounded-lg shadow-lg w-12 h-12 border border-gray-200  justify-center items-center">
                <FontAwesome name="star" size={24} color="#527283" />
              </View>

              <View className="px-2">
                <Text className="text-[16px] text-[#527283] font-bold">
                  {data?.rating}
                </Text>
                <Text className="text-[16px] text-[#527283] font-bold">
                  rating
                </Text>
              </View>
            </View>
            <View className="flex-row ">
              <View className=" rounded-lg shadow-lg w-12 h-12 border border-gray-200  justify-center items-center">
                <MaterialIcons name="attach-money" size={24} color="#527283" />
              </View>
              <View className="px-2">
                <Text className="text-[16px] text-[#527283] font-bold">
                  {data?.price_level}
                </Text>
                <Text className="text-[16px] text-[#527283] font-bold">
                  price_level
                </Text>
              </View>
            </View>
            <View className="flex-row ">
              <View className=" rounded-lg shadow-lg w-12 h-12 border border-gray-200  justify-center items-center">
                <FontAwesome name="map-signs" size={24} color="#527283" />
              </View>
              <View className="px-2">
                <Text className="text-[16px] text-[#527283] font-bold">
                  {data?.bearing}
                </Text>
                <Text className="text-[16px] text-[#527283] font-bold">
                  bearing
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="gap-2 flex-wrap flex-row mt-4">
        {data?.cuisine.map((n)=>(
            <View key={n.key}
            className=" px-2 rounded-md bg-gray-400">
                <Text className="text-[16px] text-[#fff] font-bold">{n.name}</Text>
            </View>
        ))}
        </View>
        

        <View className="bg-gray-200 mt-4 px-2 py-2 space-y-2 ">
            <View className="flex-row">
            <AntDesign name="phone" size={24} color="black" />
            <Text>{data?.phone}</Text>
            </View>
            <View className="flex-row">
            <Entypo name="email" size={24} color="black" />
            <Text>{data?.email}</Text>
            </View>
            <View className="flex-row">
            <Entypo name="address" size={24} color="black" />
            <Text>{data?.address}</Text>
            </View>
        </View>
        <TouchableOpacity className=" px-2 py-2 rounded-lg bg-blue-300 mt-12  ">
            <Text className="text-[24px] text-[#fff] font-bold">BOOK NOW</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ItemScreen;
