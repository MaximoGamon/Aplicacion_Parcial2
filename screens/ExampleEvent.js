import React from "react";
import {View, Text, StyleSheet, Button,  TouchableOpacity} from "react-native";

export default function EventsExample ({navigation,route}) {

    const handlePress = () => {
        alert("Boton presionado");
    };

    const {nombre} = route.params;
    const total =route.params?.total;
    const handleShowData = () => {
        alert(`Datos recibidos \nContador: ${total}`);
    };


    return (
        <View style ={styles.container}>
        

        <Text style={styles.titulo}> Ejemplo de eventos </Text> 
        <Text style={styles.titulo2}> Hola, {nombre}</Text>

        <Button title="Presionar" onPress={handlePress}/>

        <TouchableOpacity
        style = {styles.button}
        onPress={handleShowData}
        >
        <Text style = {styles.buttonText}> Mostrar datos en alert </Text>
        </TouchableOpacity>
        {total !== undefined &&(
            <Text style={styles.texts}> Contador recibido: {total} </Text>
        )}

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
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#101373", 
    },

    titulo: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
        color: "lightblue",
        
    },

    titulo2: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
        color: "lightblue",
        marginBottom:150
        
    },

    texts: {
        color: "white",
        margin:20,
        fontSize:20,
        textAlign:"center",
    },

    stylebutton: {
        backgroundColor: "black",
        borderRadius:10,
        alignItems:"center",
        margin: 20,
        textAlign: "center",
        
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

});