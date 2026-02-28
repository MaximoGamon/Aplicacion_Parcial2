import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

export default function Counter({navigation}) {
    const [count,setCount] = useState(0);
    const handleIncrement = () =>{
        setCount(count+1);
    }

    const handleDecrement = () =>{
        setCount(count-1)
    }

    const handleReset = () =>{
        setCount(0)
    }

  return (
    <View style={styles.container}>
        
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.value}>{count}</Text>

      <TouchableOpacity style={styles.boton}
      onPress={handleIncrement}>
      <Text>Sumar</Text>
      </TouchableOpacity >

      <TouchableOpacity style={styles.boton2}
      onPress={handleDecrement}>
      <Text>Restar</Text>
      </TouchableOpacity >

      <TouchableOpacity style={styles.boton3}
      onPress={handleReset}>
      <Text>Reiniciar</Text>
      </TouchableOpacity >
        <Text style={styles.hint}>Aquí veremos estado (useState).</Text>
      <TouchableOpacity 
      style={styles.button}
      onPress={() => navigation.navigate("ExampleEvent",{total:count})}
      >
        <Text style={styles.text_button}> Enviar contador a eventos </Text>
      </TouchableOpacity>

      <TouchableOpacity 
                      style ={styles.stylebutton}
                      onPress={() => navigation.navigate("Home")}
              >
                      <Text style = {styles.text_button}> Volver a Home</Text>
      
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: "#101373",},
  title: { fontSize: 40, fontWeight: '700', marginBottom: 25,textAlign:"center",color: "lightblue", },
  texts: {fontSize: 14,color:"white",textAlign:"center",},
  value: { fontSize: 48, fontWeight: '800', marginBottom: 25,textAlign:"center",color: "lightblue", },
  hint: { fontSize: 14, opacity: 0.6, textAlign:"center",color: "lightblue",},
  boton: {backgroundColor:"lightgreen",paddingVertical:12,borderRadius:10,marginBottom:20,marginLeft:110,alignItems:"center",width:100},
  boton2: {backgroundColor:"red",paddingVertical:12,borderRadius:10,marginBottom:20,marginLeft:110,alignItems:"center",width:100},
  boton3: {backgroundColor:"grey",paddingVertical:12,borderRadius:10,marginBottom:20,marginLeft:110,alignItems:"center",width:100},
  button: {backgroundColor: "#63C1FF",
        textAlign: "center",
        margin: 20,
        borderRadius:10,},

  text_button: {
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

});