import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { useState } from "react";


const ColorScreen = () => {
const [color, setColor] = useState(0)

    return (
        <View>
            <Text>Color Screen</Text>
            <Button 
                title="Add a color" 
                onPress={() => {

            }} />
            <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
        </View>
    )
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;