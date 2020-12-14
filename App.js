import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () =>{
    console.log(enteredGoal)
  }
  return (
    <View style = {styles.container}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style = {styles.textContainer} onChangeText ={goalInputHandler} value = {enteredGoal}/>
        <Button title ="Add" onPress={addGoalHandler}/>
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  inputContainer:{
    flexDirection : "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textContainer:{
    borderBottomColor:"black",
          borderWidth: 1,
          width: "80%",
          padding: 10
  }
})