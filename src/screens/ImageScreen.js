import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetial from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetial 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')} 
            />
            <ImageDetial 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')} 
            />
            <ImageDetial 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;