import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider, useDispatch, useSelector } from "react-redux";
import reducers from "./src/redux/reducers"
import RootNavigator from "./src/navigators/RootNavigator"


const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>

      <RootNavigator />

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
