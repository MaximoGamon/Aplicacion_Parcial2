import React from "react";
import { View, Text,StyleSheet, TouchableOpacity} from "react-native";

export default function HomeScreen({navigation}){
    return (
        <View style ={styles.container}>
            <Text style = {styles.text_data}>
                Maximo    Diego Gamon  Simental                                              TI 4.- "B" BIS
            </Text>


            <TouchableOpacity 
            style = {styles.button}
            onPress={() => navigation.navigate("ExampleEvent",{nombre:'Maximo'})}
            >
                <Text style = {styles.buttonText}> Ir a eventos </Text>

            </TouchableOpacity>

            <TouchableOpacity 
            style = {styles.button}
            onPress={() => navigation.navigate("Counter")}
            >

            <Text style = {styles.buttonText}> Ir a contador </Text>
            </TouchableOpacity>


            <TouchableOpacity 
            style = {styles.button}
            onPress={() => navigation.navigate("AboutMe")}
            >

            <Text style = {styles.buttonText}> Ir a "about me" </Text>
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

    text_data: {
        color: "lightblue",
        fontSize: 34,
        fontWeight: "bold",
        margin:10,
        textAlign:"center",
        lineHeight: 30,
        paddingBottom:20,
        marginBottom:50,
        marginTop:50,
        

    },
});


