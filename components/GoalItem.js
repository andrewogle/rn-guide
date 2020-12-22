import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

export default function GoalItem(props) {
    return (
        <TouchableOpacity onLongPress = {props.onDelete}>
        <View style = {props.sty}>
        <Text >{props.goal}</Text>
        </View>
        </TouchableOpacity>
    )
}
