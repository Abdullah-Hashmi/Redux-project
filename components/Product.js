import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Product = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    const result = cartItems.filter((element) => element.name === item.name);
    setIsAdded(result.length > 0);
  }, [cartItems]);

  return (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
      <Text style={styles.productColor}>{item.color}</Text>
      <Image style={styles.productImage} source={{ uri: item.image }} />
      {isAdded ? (
        <TouchableOpacity
          onPress={() => handleRemoveFromCart(item)}
          style={[styles.button, styles.removeButton]}
        >
          <Text style={styles.buttonText}>Remove from Cart</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => handleAddToCart(item)}
          style={[styles.button, styles.addButton]}
        >
          <Text style={styles.buttonText}>Add To Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 20,
    color: "#888",
    marginBottom: 5,
  },
  productColor: {
    fontSize: 16,
    color: "#555",
    marginBottom: 15,
  },
  productImage: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    width: 200,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#4CAF50",
  },
  removeButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
