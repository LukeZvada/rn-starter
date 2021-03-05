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
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorScreen;