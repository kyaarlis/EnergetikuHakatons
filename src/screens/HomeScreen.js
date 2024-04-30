import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import DeviceComp from "../components/DeviceComp";
import BottomBar from "../components/BottomBar";

const HomeScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <Button title="Back" color={'#5DB075'}
                onPress={() => navigation.navigate('Components')}
                />
                <Button title="Options" color={'#5DB075'}
                onPress={() => navigation.navigate('Options')}
                />
            </View>
            <SearchBar />
            <Text style={styles.textEl}>Living room</Text>
            <View style={styles.componentContainer}>
                <DeviceComp title='Lamp' navigation={navigation}
                imgSrc='https://i.fbcd.co/products/resized/resized-750-500/art-06-38ba7251759d1c957c10f72d7dfa153edb9b7fd4fead82f4e37f9dd3b27d32b7.jpg' />
                <DeviceComp title='Curtains' navigation={navigation}
                imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ezsrCPT0ihArnkfVmzHaYVBE7MGHkOKixQ&usqp=CAU' />
                <DeviceComp title='TV' navigation={navigation}
                imgSrc='https://witonics.com/cdn/shop/articles/Screen_Shot_2020-10-19_at_5.06.06_PM_600x.png?v=1603145231' 
                    />
            </View>
            <Text style={styles.textEl}>Kitchen</Text>
            <View style={styles.componentContainer}>
                <DeviceComp
                title="Termometer"
                navigation={navigation}
                imgSrc="https://clipart-library.com/img/1834181.png"
                />
                <DeviceComp
                title="Oven"
                navigation={navigation}
                imgSrc="https://static.vecteezy.com/system/resources/previews/011/065/261/non_2x/kitchen-oven-clipart-illustration-domestic-gas-oven-flat-design-simple-wall-oven-sign-icon-stove-gas-oven-cartoon-clipart-home-household-domestic-and-kitchen-appliances-concept-vector.jpg"
                />
                <DeviceComp
                title="Ventilation"
                navigation={navigation}
                imgSrc="https://thumbs.dreamstime.com/b/house-forced-ventilation-system-icon-mechanical-fanning-building-airing-sign-house-forced-ventilation-system-icon-mechanical-215935089.jpg"
                />
            </View>
          
            <BottomBar style={styles.bottomBar} marginTop={70} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textEl: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 30
    },
    componentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    scrollViewContent: {
        paddingHorizontal: 16, // Add padding to the sides of ScrollView
    },
    deviceCompContainer: {
        marginHorizontal: 8, // Add margin between DeviceComp components
    },
    deviceComp: {
        marginLeft: 20,
    }
})

export default HomeScreen