import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from "react-native";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import Welcome from "../pages/Welcome";



const Stack = createNativeStackNavigator();
function AuthStack() {
  return (
    
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Login" component={LoginPage}/>
      <Stack.Screen name="Home" component={HomePage}/>
      <Stack.Screen name="Welcome" component={Welcome}/>
       
    
       
     
     
      
      
      
       
      
     
      

      

     </Stack.Navigator>
  );
}





export default AuthStack;
