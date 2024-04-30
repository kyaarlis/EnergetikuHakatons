    import React from "react";
    import { View, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";

    const OptionBar = ({title, state, stateConfig, stateStyle}) => {
    return (
        <View>
            <View style={styles.container}>
            <View style={styles.dot}></View>
            
                <Text style={styles.title}>{title}</Text>
                <TouchableWithoutFeedback onPress={stateConfig} style={styles.stateContainer}>
                    <Text style={[styles.state, stateStyle]}>{state}</Text>
                </TouchableWithoutFeedback>
        
            </View>
            <View style={styles.border}></View>
        </View>
    );
    };

    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
        border: {
            borderWidth: 0.5,
            borderColor: 'gray', 
            width: '98%',
            alignSelf: 'center',
            marginTop: 10,
            marginBottom: 30
        },
        dot: {
            width: 20,
            height: 20,
            backgroundColor: '#5DB075',
            borderRadius: 100,
            alignSelf: 'center'
        },
        title: {
            fontSize: 21,
            alignSelf: 'center',
            marginLeft: 20,
            flex: 1
        },
        state: {
            fontSize: 15,
            alignSelf: 'center',
            right: 10
        }
    });

    export default OptionBar;
