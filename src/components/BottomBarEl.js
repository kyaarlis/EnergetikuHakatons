// import React, { useState } from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";
// import { Feather } from '@expo/vector-icons'

// const BottomBarEl = ({ featherName, navigation, navigateTo }) => {

//   const [selected, setSelected] = useState(false);

//   const handlePress = () => {
//     navigation.navigate(navigateTo);
//     setSelected(!selected);
//   };

//   return (
//     <TouchableOpacity onPress={handlePress}>
//       <View style={[styles.bottomEl, { backgroundColor: selected ? '#5DB075' : 'grey' }]}>
//         <Feather name={featherName} style={styles.iconStyle} />
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//     bottomEl: {
//         borderWidth: 2,
//         borderColor: 'transparent',
//         borderRadius: 100,
//         width: 50,
//         height: 50,
//         marginTop: 30
//       },
//       iconStyle: {
//         fontSize: 35,
//         alignSelf: 'center',
//         marginVertical: 5,
//     }
// });

// export default BottomBarEl;
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const BottomBarEl = ({ featherName, navigation, navigateTo, isSelected, onPress }) => {

  const handlePress = () => {
    navigation.navigate(navigateTo);
    // You can also call the onPress function passed as a prop if needed
    if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.bottomEl, { backgroundColor: isSelected ? "#5DB075" : "grey" }]}>
        <Feather name={featherName} style={styles.iconStyle} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomEl: {
    borderWidth: 2,
    borderColor: "transparent",
    borderRadius: 100,
    width: 50,
    height: 50,
    marginTop: 30,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginVertical: 5,
  },
});

export default BottomBarEl;
