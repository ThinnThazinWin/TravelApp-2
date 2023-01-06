import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Avatar, Hotels, Attractions, Restaurants,NotFound } from "../assets";
import { AntDesign } from "@expo/vector-icons";
import MenuContainers from "../components/MenuContainers";
import ItemContainer from "../components/ItemContainer";
import { getPlacesData } from "../api";
const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const[mainData,setMainData]=useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(()=>{
    setIsLoading(true);
    getPlacesData().then((data)=>{
      setMainData(data);
      setInterval(()=>{
        setIsLoading(false);
      },2000);
    })
  },[]);
  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <View className="flex-row items-center justify-between px-8 mt-8">
        <View>
          <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
          <Text className="text-[36px] text-[#527283] font-bold">
            the beauty today
          </Text>
        </View>

        <View className="w-12 h-12 rounded-md items-center justify-center bg-gray-100">
          <Image
            source={Avatar}
            className="w-full h-full rounded-md object-cover"
          />
        </View>
      </View>
      <View className=" flex-row shadow-lg items-center justify-center mt-8 rounded-xl bg-white mx-4 px-4 py-1">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          placeholder="Search"
          fetchDetails={true}
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
          }}
          query={{
            key: "AIzaSyABWojea6_nJCK6Vi5rvYHmKn0ViYzGLFU",
            language: "en",
          }}
        />
      </View>
    
      {isLoading?
      (<View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" color="#00ff00"/>
      </View>):
      (<ScrollView>
      <View className=" flex-row items-center justify-between mt-4 mx-4 px-4">
          <MenuContainers
            key={"hotels"}
            title={"Hotels"}
            imgSrc={Hotels}
            type={type}
            setType={setType}
          />
          <MenuContainers
            key={"attractions"}
            title={"Attractions"}
            imgSrc={Attractions}
            type={type}
            setType={setType}
          />
          <MenuContainers
            key={"restaurants"}
            title={"Restaurants"}
            imgSrc={Restaurants}
            type={type}
            setType={setType}
          />
        </View>
        <View className="flex-row justify-between items-center mt-8 mx-8">
          <Text className="text-[24px] text-[#527283] font-bold">Top Tips</Text>
          <View className="flex-row">
            <Text className="text-[20px] text-[#527283] font-bold">
              Explore
            </Text>
            <AntDesign name="arrowright" size={24} color="black" />
          </View>
        </View>
        <View className="flex-row items-center justify-center flex-wrap">
          {mainData?.length>0 ?
          <>
            {mainData?.map((data,i)=>(
              <ItemContainer
            key={i}
            imgSrc={
              data?.photo?.images?.medium?.url?
              data?.photo?.images?.medium?.url :
              "https://cdn.pixabay.com/photo/2022/12/18/01/01/toy-7662562__340.jpg"
            }
            title={data?.name}
            location={data?.location_string}
            data={data}
          />
         
            ))}
           
          </>:
          <>
            <View className="items-center justify-center w-full h-[400px] space-y-8">
                <Image source={NotFound}
                    className="w-32 h-32 object-cover"
                />
                <Text className="text-[20px] text-[#527283] font-bold">Not be found</Text>
            </View>
          </>}
        </View>
      </ScrollView>)
      }
    </SafeAreaView>
  );
};

export default Discover;
