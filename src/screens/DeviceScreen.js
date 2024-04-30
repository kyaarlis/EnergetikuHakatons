import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import axios from 'axios';

import DeviceStats from "../components/DeviceStats";
import OptionBar from "../components/OptionBar";
import BottomBar from "../components/BottomBar";

import toogleLightState from "../lightStateUtils";

const DeviceScreen = ({navigation}) => {
    const [toogleState, setToggleState] = useState(false);
    const [toogleSwitch, setToggleSwitch] = useState(true);

    useEffect(() => {
        
        toogleLightState(toogleState);
    }, [toogleState]);

    
    useEffect(() => {
        // Make an HTTP POST request to your backend
        axios.post('https://b8ac-77-219-10-250.ngrok.io/data', {
        
          toogleState: toogleState,
        })
        .then(response => {
          // Handle the response if needed
        })
        .catch(error => {
          // Handle errors if needed
        });
      }, [toogleState]);
    

    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <Button title="Back" color={'#5DB075'}
                onPress={() => navigation.navigate('Home')}
                />
            </View>

            <DeviceStats 
            style={styles.deviceStats} 
            title={(navigation.getParam('title'))} 
            spent={10} />
          
            <View style={styles.settingsContainer}>
            <Text style={styles.expenses}>Configuration</Text>
                <OptionBar 
                 title="On/Off" 
                 state={toogleState ? "On" : "Off"} 
                 stateConfig={() => setToggleState(!toogleState)}
                 stateStyle={{color: toogleState ? 'green' : 'red', borderWidth: 1,
                 borderColor: toogleState ? 'green' : 'red', borderRadius: 10, padding: 10}} 
                 
                  />

                <OptionBar title="Consumption" state="Eco" 
                />

                <OptionBar title="Schedule" state="11.00-21.00" 
                />

                <OptionBar 
                 title="Kill switch" 
                 state={toogleSwitch ? "On" : "Off"} 
                 stateConfig={() => setToggleSwitch(!toogleSwitch)}
                 stateStyle={{color: toogleSwitch ? 'green' : 'red', borderWidth: 1,
                 borderColor: toogleSwitch ? 'green' : 'red', borderRadius: 10, padding: 10}} 
                  />
            </View>

            <BottomBar marginTop={0} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textEl: {
        textAlign: 'center',
        fontSize: 30, 
    },
    expenses: {
        fontSize: 25,
        marginBottom: 30
    },
    stateBorder: {
        borderWidth: 1,
        borderColor: 'gray'
    },
    settingsContainer: {
        margin: 15,
        marginTop: 50
    }
})

export default DeviceScreen