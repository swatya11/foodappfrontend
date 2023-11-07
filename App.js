import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodListScreen from './FoodListScreen'; // Import the FoodListScreen component

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FoodList">
        <Stack.Screen name="FoodList" component={FoodListScreen} />
        {/* Add other screens and navigation here if needed */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
