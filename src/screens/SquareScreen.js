import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";


const SquareScreen = () => {
const [red, setRed] = useState([])
const [green, setGreen] = useState([])
const [blue, setBlue] = useState([])

    return (
        <View>
            <Text>Color Adjuster Screen</Text>
        </View>
    )
};


const styles = StyleSheet.create({});

export default SquareScreen;