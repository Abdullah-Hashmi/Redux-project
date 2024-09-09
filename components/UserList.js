import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../redux/action";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.reducer);

  useEffect(() => {
    dispatch(getUserList());
  }, [dispatch]);

  // Flatten the array and set default to empty array
  const flattenedUserList = userList[0] || [];

  // Render item for FlatList
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>Name: {item.name}</Text>
      <Text style={styles.itemText}>Email: {item.email}</Text>
      <Text style={styles.itemText}>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flattenedUserList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemText: {
    fontSize: 16,
  },
});

export default UserList;
