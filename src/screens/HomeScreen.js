import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

//instead of passing props as an argument you can pass only what you need to shorten you code
//in this case all we needed from props is props.navigation.navigate
//This is called destructuring 
const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title="Go To Components Demo" 
      />
      <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
