import React from "react";
import { View,Text,StyleSheet, TouchableOpacity, Image } from "react-native";


export default function MoviesFavScreen ({navigation}){
    return(
        <View style={styles.container}>

            <Text style ={styles.text_data}>Mis Peliculas Favoritas</Text>

            <Image 
                source={require('../assets/batman.jpeg')} 
                style={styles.logo} 
            />

            <Image 
                source={require('../assets/blade.jpeg')} 
                style={styles.logo} 
            />

            <Image 
                source={require('../assets/castillo.jpeg')} 
                style={styles.logo} 
            />

            <TouchableOpacity 
                style ={styles.stylebutton}
                onPress={() => navigation.navigate("AboutMe")}
            >
                <Text style = {styles.texts}> Volver a "About Me"</Text>
                    
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


    text_data: {
        color: "lightblue",
        fontSize: 28,
        fontWeight: "bold",
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

    logo: {
    width: 150,   
    height: 150,  
    borderRadius: 100, 
    margin:5,
    marginLeft:85,
  },
});


