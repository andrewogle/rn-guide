import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import mystyles from './styles'

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  let itemId = Math.random();
  const addGoalHandler = () =>{
    itemId += Math.random()
      console.log(itemId)
    setCourseGoals(currentGoals =>{
      
      return ([...currentGoals, {id:itemId.toString() , value: enteredGoal}])})
  }
  return (
    <View style = {styles.container}>
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" style = {styles.textContainer} onChangeText ={goalInputHandler} value = {enteredGoal}/>
        <Button title ="Add" onPress={addGoalHandler}/>
      </View>
      <FlatList 

        keyExtractor ={(item, index)=> item.id}
        data = {courseGoals}
        renderItem = {(goals)=> <View key = {Math.random()} style = {styles.listItem}>
        <Text >{goals.item.value}</Text>
        </View>}

      />
    </View>
  );
}

const styles = StyleSheet.create(mystyles)