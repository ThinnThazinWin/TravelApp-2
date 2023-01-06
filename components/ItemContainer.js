import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ItemContainer = ({title,imgSrc,location,data}) => {
  const navigation=useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate("ItemScreen",{param:data})}
    className=" border border-gray-300 shadow-md bg-white rounded-md space-y-2 px-3 py-2 mx-2 my-2 mt-8" >
    <Image source={{uri:imgSrc}}
        className="w-32 h-32 object-cover"
    />
    {title?<>
      <Text className="text-[20px] text-[#527283] font-bold">{title?.length>14?`${title.slice(0,14)}..`:title}</Text>
      <View className="flex-row items-center">
      <FontAwesome5 name="map-marker-alt" size={24} color="black" />
        <Text className=" text-[#527283] font-bold">{location?.length>14?`${location.slice(0,14)}..`:location}</Text>
      </View>
    </>:<></>
     
    
     
    }
      
    </TouchableOpacity>
  )
}

export default ItemContainer;