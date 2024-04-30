import React from "react";
import { View, Text, StyleSheet } from "react-native"; 

const DeviceStats = ({title, spent}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.spent}>{spent}% spent</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 210, // Set the fixed height
        width: 210, // Set the fixed width (assuming you want a square container)
        borderWidth: 4,
        borderColor: '#5DB075',
        borderRadius: 200, // Set half of the width to make it a circle
        justifyContent: 'center', // Center the content vertically
        alignItems: 'center', // Center the content horizontally
        alignSelf: 'center',
    },
    title: {
        fontSize: 30,
        alignSelf: 'center',
        color: '#5DB075'
    },
    spent: {
        marginTop: 10,
        color: '#BDBDBD',
    }
})

export default DeviceStats