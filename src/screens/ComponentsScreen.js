import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    const greeting = 'hi there'

    return (
        <View>
            <Text style={styles.textStyle}>This is the Components Screen </Text>
            <Text style={styles.textStyle}>{greeting} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default ComponentsScreen 