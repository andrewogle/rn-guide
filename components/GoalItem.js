import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'

export default function GoalItem(props) {
    return (
        <TouchableOpacity onPress = {props.onDelete.bind(this, props.id)}>
        <View style = {props.sty}>
        <Text >{props.goal}</Text>
        </View>
        </TouchableOpacity>
    )
}
