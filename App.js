import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import mystyles from './styles'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const addGoalHandler = () =>{
    setCourseGoals(currentGoals =>([...currentGoals, enteredGoal]))
  }
  return (
    <View style = {styles.container}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style = {styles.textContainer} onChangeText ={goalInputHandler} value = {enteredGoal}/>
        <Button title ="Add" onPress={addGoalHandler}/>
      </View>
      <ScrollView>

        {courseGoals.map((goals)=> <View key = {Math.random()} style = {styles.listItem}>
           <Text >{goals}</Text>
           </View>
            )}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(mystyles)