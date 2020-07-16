import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
} from "react-native";

import Button from "../../component/Button"

import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
    },
    contentContainer: {
        paddingHorizontal: 30,
    },
    welcomeText: {
        fontSize: 34,
        height: 34,
    },
    loginText: {
        marginTop: 12,
    },
});

export default (props) => {
    const [username, setUsername] = useState("");


    const dispatch = useDispatch();
    const userSelector = useSelector((state) => state.user);

    const loginBtnHandler = () => {

        AsyncStorage.setItem(
            "userData",
            JSON.stringify({
                username,
            })
        )
            .then(() => {
                dispatch({
                    type: "USER_LOGIN",
                    payload: { username },
                });
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (

        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View style={{ ...styles.container }}>
                <TextInput
                    autoCapitalize="none"
                    style={{
                        fontSize: 17,
                        lineHeight: 19,
                    }}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                >
                </TextInput>

                <Button
                    onPress={loginBtnHandler}
                    containerStyle={{ marginTop: 40 }}
                    style={{
                        color: "red"
                    }}
                    size="lg"
                >
                    LOGIN
              </Button>
            </View>


        </TouchableWithoutFeedback>
    );
};