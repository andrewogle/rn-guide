import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import mystyles from './styles'

export default function App() {
 
  const [courseGoals, setCourseGoals] = useState([])

  let itemId = Math.random();
  const addGoalHandler = (enteredGoal) =>{
    itemId += Math.random()
      console.log(itemId)
    setCourseGoals(currentGoals =>{
      
      return ([...currentGoals, {id:itemId.toString() , value: enteredGoal}])})
  }
  return (
    <View style = {styles.container}>
      <GoalInput sty1 = {styles.inputContainer} sty2 ={styles.textContainer} goalHandler = { addGoalHandler} />
      <FlatList 

        keyExtractor ={(item, index)=> item.id}
        data = {courseGoals}
        renderItem = {(goals)=> <GoalItem goal = {goals.item.value} sty = {styles.listItem} onDelete = {()=>console.log("Stop Touching me!!!")}/> }

      />
    </View>
  );
}

const styles = StyleSheet.create(mystyles)
// inputContainer textContainer