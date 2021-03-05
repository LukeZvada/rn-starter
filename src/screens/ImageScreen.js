import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImageDetial from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetial title="Forest" />
            <ImageDetial title="Beach" />
            <ImageDetial title="Mountain" />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;