import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

export default function AboutMe ({navigation}){
    return(
        <View style={styles.container}>
            <Text style ={styles.text_data}>About Me</Text>

            <TouchableOpacity 
            style = {styles.button}
            onPress={() => navigation.navigate("FoodFav")}
            >
                <Text style = {styles.texts}> Ir a "FavoriteFoods" </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.button}
            onPress={() => navigation.navigate("MoviesFav")}
            >
                <Text style = {styles.texts}> Ir a "FavoriteMovies" </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style ={styles.stylebutton}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style = {styles.texts}> Volver a Home</Text>
            
            </TouchableOpacity>
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        padding: 20,
        backgroundColor: "#101373",
    },

    button: {
        backgroundColor: "#63C1FF",
        textAlign: "center",
        margin: 20,
        borderRadius:10,
        
    },

    buttonText: {
        color: "black",
        fontSize: 20,
        margin: 20,
        textAlign:"center",
    },

    stylebutton: {
        backgroundColor: "black",
        borderRadius:10,
        alignItems:"center",
        margin: 20,
        textAlign: "center",
        
    },

    texts: {
        color: "white",
        margin:20,
        fontSize:20,
        textAlign:"center",
    },

    text_data: {
        color: "lightblue",
        fontSize: 34,
        fontWeight: "bold",
        margin:10,
        textAlign:"center",
        lineHeight: 30,
        paddingBottom:20,
        marginBottom:100,
        marginTop:50,
    },
});
