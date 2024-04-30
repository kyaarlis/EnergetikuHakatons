// import React, { useState } from "react";
// import { View, StyleSheet } from "react-native";
// import BottomBarEl from "./BottomBarEl";

// const BottomBar = ({marginTop, navigation}) => {
//   //const [backgroundColor, setBackgroundColor] = useState('grey');

//   return (
//     <View style={[styles.bottomBar, { marginTop }]}>
//         <BottomBarEl 
//          featherName='home' 
//          navigateTo='Home'
//          //backgroundColor={backgroundColor || 'grey'}
//          navigation={navigation}
//          />
//         <BottomBarEl 
//           //backgroundColor={backgroundColor || 'grey'} 
//           featherName='list' 
          
//           navigateTo='list'
//           navigation={navigation}
//           />
//         <BottomBarEl 
//          //backgroundColor={backgroundColor || 'grey'}
//          featherName='search' 
        
//          navigateTo='Search'
//          navigation={navigation}
//          />
//         <BottomBarEl 
//           //backgroundColor={backgroundColor || 'grey'}
//           featherName='user' 
        
//           navigateTo='Profile'
//           navigation={navigation}
//           />
//         <BottomBarEl
//          featherName='settings' 
//          //backgroundColor={backgroundColor || 'grey'}
//          navigateTo='Options'
//          navigation={navigation}/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     bottomBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         borderWidth: 0.5,
//         borderColor: 'gray',
//         width: '100%',
//         height: '100%',
//         marginTop: 70,
//         backgroundColor: 'whitesmoke'
//     }
// });

// export default BottomBar;
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import BottomBarEl from "./BottomBarEl";

const BottomBar = ({ marginTop, navigation }) => {
  const [selected, setSelected] = useState("Home");

  const handlePress = (item) => {
    setSelected(item);
  };

  return (
    <View style={[styles.bottomBar, { marginTop }]}>
      <BottomBarEl
        featherName="home"
        navigateTo="Home"
        isSelected={selected === "Home"}
        onPressed={() => handlePress("Home")}
        navigation={navigation}
      />
      <BottomBarEl
        featherName="list"
        navigateTo="list"
        isSelected={selected === "list"}
        onPress={() => handlePress("list")}
        navigation={navigation}
      />
      <BottomBarEl
        featherName="search"
        navigateTo="Search"
        isSelected={selected === "Search"}
        onPress={() => handlePress("Search")}
        navigation={navigation}
      />
      <BottomBarEl
        featherName="user"
        navigateTo="Profile"
        isSelected={selected === "Profile"}
        onPress={() => handlePress("Profile")}
        navigation={navigation}
      />
      <BottomBarEl
        featherName="settings"
        navigateTo="Options"
        isSelected={selected === "Options"}
        onPress={() => handlePress("Options")}
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 0.5,
    borderColor: "gray",
    width: "100%",
    height: "100%",
    marginTop: 70,
    backgroundColor: "whitesmoke",
  },
});

export default BottomBar;
