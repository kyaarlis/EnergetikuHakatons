import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"; 

const DeviceComp = ({title, navigation, imgSrc}) => {
    return (
        <View>
            <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Device', {title})}>
                <Image 
                style={styles.image}    
                source={{uri: imgSrc}}
                />
                <Text style={styles.textEl}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    textEl: {
        marginTop: 20,
        alignSelf: 'center',
    },
    image: {
        height: 110,
        width: 105,
        marginTop: 20,
        borderRadius: 4,
        borderWidth: 2,         
        borderColor: 'grey',
        backgroundColor: '#E8E8E8',
    }
})

export default DeviceComp