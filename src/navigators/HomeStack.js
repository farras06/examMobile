import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen"
import DetailScreen from "../screens/DetailScreen";
const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen component={MainScreen} name="Home" />
            <Stack.Screen component={DetailScreen} name="Detail" />
        </Stack.Navigator>
    );
};
