import React from "react";
import { View, Text, StyleSheet, Button, } from "react-native";

import OptionBar from "../components/OptionBar";
import BottomBar from "../components/BottomBar";

const OptionsScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <Button title="HUB" color={'#5DB075'}
                onPress={() => navigation.navigate('Home')}
                />
            </View>
            <Text style={styles.textEl}>Expenses</Text>

            <View style={styles.settingsContainer}>
                <OptionBar title="Devices" state="On" />
                <OptionBar title="Consumption" state="Eco" />
                <OptionBar title="Schedule" state="11.00-21.00" />
                <OptionBar title="Kill switch" state="Off" />
            </View>
            
            <BottomBar marginTop={260} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
    },
    textEl: {
        fontSize: 25,
        marginTop: 30,
        marginLeft: 20
    },
    componentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    settingsContainer: {
        margin: 15,
    }
})

export default OptionsScreen