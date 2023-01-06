import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'


const MenuContainers = ({title,imgSrc,type,setType}) => {
const handle=()=>{
setType(title.toLowerCase())
}
  return (
    <TouchableOpacity className="items-center justify-center space-y-2 "
    onPress={handle}>
        <View className={`w-24 h-24 items-center  rounded-full justify-center ${type===title.toLowerCase()?"bg-gray-200":""}`}>
    <Image source={imgSrc}
    className="w-16 h-16 object-contain"
    />
     
    </View>
    <Text className="text-[20px] text-[#527283] font-bold">{title}</Text>
    </TouchableOpacity>
    
  )
}

export default MenuContainers;