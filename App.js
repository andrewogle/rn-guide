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
    setCourseGoals(currentGoals =>{
      
      return ([...currentGoals, {id:itemId.toString() , value: enteredGoal}])})
  }
  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals =>{
      return currentGoals.filter((goal)=> goal.id !== goalId)
    })
  }
  return (
    <View style = {styles.container}>
      <GoalInput sty1 = {styles.inputContainer} sty2 ={styles.textContainer} goalHandler = { addGoalHandler} />
      <FlatList 

        keyExtractor ={(item, index)=> item.id}
        data = {courseGoals}
        renderItem = {(goals)=> <GoalItem goal = {goals.item.value} sty = {styles.listItem} id = {goals.item.id} onDelete = {removeGoalHandler}/> }

      />
    </View>
  );
}

const styles = StyleSheet.create(mystyles)
// inputContainer textContainer