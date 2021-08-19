import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import DishDetailScreen from "./screen/DishDetailScreen";
import HomeScreen from "./screen/HomeScreen";
import MenuScreen from "./screen/MenuScreen";
import FavouriteScreen from "./screen/FavouriteScreen";
import Icon from "./components/Icon";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F53B50",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Icon
            action={() => navigation.toggleDrawer()}
            name="ios-menu"
            color="black"
            size={24}
            iconStyle={{
              paddingRight: 15,
            }}
          />
        ),
      }}
    >
      <Stack.Screen name="My Menu" component={MenuScreen} />
      <Stack.Screen
        name="Dish Details"
        component={DishDetailScreen}
        options={({ route }) => ({ title: route.params.dish.name })}
      />
    </Stack.Navigator>
  );
};

const FavStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F53B50",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerRight: () => (
          <Icon
            action={() => navigation.toggleDrawer()}
            name="ios-menu"
            color="black"
            size={24}
            iconStyle={{
              paddingRight: 15,
            }}
          />
        ),
      }}
    >
      <Stack.Screen name="Favourites" component={FavouriteScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Menu" component={MenuStack} />
      <Drawer.Screen name="Favourite" component={FavStack} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;
