import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

const FoodListScreen = ({ navigation }) => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    // Replace this with your API endpoint to fetch food items
    fetch('http://localhost:3000/api/food')
      .then((response) => response.json())
      .then((data) => setFoodItems(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>Food List</Text>
      <FlatList
        data={foodItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Name: {item.name}</Text>
            <Text>Type: {item.type}</Text>
            <Text>Price: ${item.price}</Text>
          </View>
        )}
      />
      <Button
        title="Search Italian Food"
        onPress={() => {
          // Replace this with your API endpoint to search for Italian food
          fetch('http://localhost:3000/api/food/search?type=Italian')
            .then((response) => response.json())
            .then((data) => setFoodItems(data))
            .catch((error) => console.error(error));
        }}
      />
    </View>
  );
};

export default FoodListScreen;
