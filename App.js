import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Discover from './screens/Discover';
import ItemScreen from './screens/ItemScreen';
const stack=createNativeStackNavigator();
export default function App() {
  return (

      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="HomeScreen" component={HomeScreen}/>
          <stack.Screen name="Discover" component={Discover}/>
          <stack.Screen name="ItemScreen" component={ItemScreen}/>
        </stack.Navigator>
      </NavigationContainer>
      
   
      
      
    
  );
}


