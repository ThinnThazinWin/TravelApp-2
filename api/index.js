import axios from "axios";

export const getPlacesData=async()=>{
try{
const {data:{data}} =await axios.get(`https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
{params: {
  bl_latitude: '11.847676',
  tr_latitude: '12.838442',
  bl_longitude: '109.095887',
  tr_longitude: '109.149359',
  
  limit: '30',
  currency: 'USD',
  open_now: 'false',
  lunit: 'km',
  lang: 'en_US'
}, headers: {
    'X-RapidAPI-Key': '04420dfdfbmsh7f62ef546d0bf64p1017a3jsne4c839e4d826',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  }})

  return data;
}catch(error){
    return null;
}
}
