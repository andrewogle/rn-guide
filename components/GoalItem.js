import React from 'react'
import {Text, View} from 'react-native'

export default function GoalItem(props) {
    return (
        <View style = {props.sty}>
        <Text >{props.goal}</Text>
        </View>
    )
}
