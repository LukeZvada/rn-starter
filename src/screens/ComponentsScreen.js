import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const name = 'My name is Luke Zvada'

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native! </Text>
            <Text style={styles.subHeaderStyle}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen 