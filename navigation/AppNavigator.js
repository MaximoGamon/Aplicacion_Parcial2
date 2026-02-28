import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import EventsExample from "../screens/ExampleEvent";
import { counterEvent } from "react-native/Libraries/Performance/Systrace";
import Counter from "../screens/Counter";
import AboutMe from "../screens/AboutMeScreen";
import FoodFavScreen from "../screens/FoodFavScreen";
import MoviesFavScreen from "../screens/MoviesFavScreen";


const Stack = createNativeStackNavigator(); 

export default function AppNavigator() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name = "Home"
                component={HomeScreen}
                options={{title: 'Inicio'}}
            />

            <Stack.Screen 
                name = "ExampleEvent"
                component={EventsExample}
                options={{title: 'Eventos'}}
            />

            <Stack.Screen 
                name = "Counter"
                component={Counter}
                options={{title: 'Contador'}}
            />

            <Stack.Screen 
            name = "AboutMe"
            component={AboutMe}
            options={{title:'AboutMe'}}
            
            />

            <Stack.Screen 
            name = "FoodFav"
            component={FoodFavScreen}
            options={{title:"FavoriteFood"}}
            
            />

            <Stack.Screen
            name = "MoviesFav"
            component = {MoviesFavScreen}
            options = {{title:"FavoritesMovies"}}
            />

        </Stack.Navigator>
    );
}

