import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    SafeAreaView,
    TextInput,
    ImageBackground,
} from "react-native";
import Axios from "axios";
import { API_URL } from "../constant/API"
import RestaurantCard from "../screens/RestaurantCard"
import { useDispatch, useSelector } from "react-redux";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ({ navigation }) => {
    const [RestaurantList, setRestaurantList] = useState([]);

    useEffect(() => {
        Axios.get(`${API_URL}/restaurants`)
            .then((res) => {
                console.log(res.data);
                setRestaurantList(res.data.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const renderPosts = ({ item }) => {
        return <RestaurantCard navigation={navigation} data={item} />;
    };

    return (
        <View
            style={{
                flex: 1,
            }}
        >
            <SafeAreaView />

            <FlatList
                data={RestaurantList}
                renderItem={renderPosts}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};
