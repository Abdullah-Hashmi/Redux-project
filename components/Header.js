import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getUserList } from "../redux/action"; // Import the getUserList act

const Header = () => {
  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  const navigation = useNavigation(); // Get the navigation object
  const dispatch = useDispatch(); // Initialize dispatch

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  const handleUserListPress = () => {
    dispatch(getUserList()); // Dispatch the action
    navigation.navigate("Users"); // Navigate to UserLists
  };

  return (
    <View
      style={{
        padding: 15,
        backgroundColor: "transparent",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          paddingVertical: 10,
          paddingHorizontal: 10, // Reduced horizontal padding
          borderRadius: 25,
          alignItems: "center",
          width: 315, // Set a fixed width for the button
        }}
        onPress={handleUserListPress} // Call the function on press
      >
        <Text style={{ color: "white", fontSize: 18 }}>Users</Text>
      </TouchableOpacity>

      <View
        style={{
          position: "absolute",
          top: 17,
          right: 15,
          backgroundColor: "yellow",
          borderRadius: 15,
          height: 40,
          width: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
          }}
        >
          {cartItems}
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
