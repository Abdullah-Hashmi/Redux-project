import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import store from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductWrapper from "./components/ProductWrapper";
import UserList from "./components/UserList";

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
              component={UserList}
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
    borderBottomRightRadius: 20,
  },
});
