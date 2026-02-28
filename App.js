import React from "react";
import HomeScreen from "./screens/HomeScreen";
import EventsExample from "./screens/ExampleEvent";
import Counter from "./screens/Counter";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";
import AboutMe from "./screens/AboutMeScreen";
import MoviesFavScreen from "./screens/MoviesFavScreen";
import FoodFavScreen from "./screens/FoodFavScreen";


export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>

  );
}