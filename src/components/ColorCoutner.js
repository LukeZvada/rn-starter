import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";


const ColorCounter = ({ color }) => {
const [red, setRed] = useState([])
const [green, setGreen] = useState([])
const [blue, setBlue] = useState([])

    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} />
            <Button title={`Decrease ${color}`} />
        </View>
    )
};


const styles = StyleSheet.create({});

export default ColorCounter;