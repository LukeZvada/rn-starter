import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetial from "../components/ImageDetail";

const ImageScreen = () => {
    //title, imgSource, and imgScore are props that can named anything
    //we use these to pass to the ImageDetail using props as the arg
    
    return (
        <View>
            <ImageDetial 
                title="Forest" 
                imageSource={require('../../assets/forest.jpg')}
                imageScore='9'
            />
            <ImageDetial 
                title="Beach" 
                imageSource={require('../../assets/beach.jpg')} 
                imageScore='7'
            />
            <ImageDetial 
                title="Mountain" 
                imageSource={require('../../assets/mountain.jpg')} 
                imageScore='4'
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;