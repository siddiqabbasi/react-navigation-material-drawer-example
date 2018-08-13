import React, { Component } from "react";
import {
    Button,
    View,
    StyleSheet,
} from "react-native";

export class SeekToUnderstandScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Understand",
    });

    render() {
        return (
            <View style={styles.container}>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
    },
    icon: {
        paddingLeft: 15,
        color: 'white',
        width: '80%',
    },
});