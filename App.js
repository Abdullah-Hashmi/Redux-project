// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TouchableOpacity,
// } from "react-native";
// import Header from "./components/Header";
// import Product from "./components/Product";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   const products = [
//     {
//       name: "Apple Mobile",
//       color: "white",
//       price: 136000,
//       image: "https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_SL1500_.jpg", // Apple iPhone 13
//     },
//     {
//       name: "Samsung Mobile",
//       color: "black",
//       price: 30000,
//       image: "https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_SL1500_.jpg", // Samsung Galaxy A32
//     },
//     {
//       name: "Q Mobile",
//       color: "blue",
//       price: 36000,
//       image: "https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_SL1500_.jpg", // A generic smartphone for Q Mobile
//     },
//     {
//       name: "Infinix Mobile",
//       color: "pink",
//       price: 3000,
//       image: "https://m.media-amazon.com/images/I/71iO2R+CLjL._AC_SL1500_.jpg", // Infinix Hot 10
//     },
//   ];

//   return (
//     <Provider store={store}>
//       <View style={styles.container}>
//         <Header />
//         <ScrollView>
//           {products.map((item, index) => (
//             <Product key={index} item={item} />
//           ))}
//         </ScrollView>
//       </View>
//     </Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });

// import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserLists from "./components/UserLists";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackground: () => <View style={styles.headerBackground} />,
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTitleStyle: {
                color: "#fff",
                fontSize: 20,
              },
            }}
          >
            <Stack.Screen
              name="Home"
              component={ProductWrapper}
              options={{ title: "Home" }}
            />
            <Stack.Screen
              name="Users"
              component={UserLists}
              options={{ title: "Users" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerBackground: {
    flex: 1,
    backgroundColor: "#4CAF50", // Background color for the header
    borderBottomLeftRadius: 20, // Adjust as needed
    borderBottomRightRadius: 20, // Adjust as needed
  },
});
