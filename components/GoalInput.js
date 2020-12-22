import React, {useState} from 'react'
import {Button, View, TextInput, TouchableOpacity} from 'react-native'

export default function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
      }
    return (
        <TouchableOpacity onLongPress = {()=>console.log("Stop Touching Me!")}>
        <View style={props.sty1} >
            <TextInput placeholder="Course Goal" style = {props.sty2} onChangeText ={goalInputHandler} value = {enteredGoal}/>
            <Button title ="Add" onPress={()=>props.goalHandler(enteredGoal)}/>
        </View>
        </TouchableOpacity>
    )
}


