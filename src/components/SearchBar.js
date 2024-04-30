import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'
const SearchBar = () => {

    return (
        <View style={styles.view}>
            <TextInput
            style={styles.texInput}
            placeholder="Search"
            placeholderTextColor="#8F948D" 
            autoCorrect={false}
            autoCapitalize="none"
            // value={term}
            paddingLeft={25}
            />
            <Feather 
            name="search" 
            style={styles.iconStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        justifyContent: 'start',
        flexDirection: 'row',
        margin: 15,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#E8E8E8',
    },
    texInput: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 36,
        alignSelf: 'center',
        marginVertical: 5,
        marginHorizontal: 15
    }
})

export default SearchBar