import React from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import { useState } from "react";


const ColorScreen = () => {
const [colors, setColors] = useState([])

    return (
        <View>
            <Text>Color Screen</Text>
            <Button 
                title="Add a color" 
                onPress={() => {
                    setColors([...colors, randomRgb()])
            }} />
            <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
            <FlatList 
                //In this key extractor the rgb string generated is unique. So we dont need to pass a property name
                keyExtractor={(item) => item}
                data={colors} 
                renderItem={({item}) => {
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    )
                }}
            />
        </View>
    )
};


//this is creating random rgb  color numbers and returning a string rgb(243, 12, 239)
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({});

export default ColorScreen;