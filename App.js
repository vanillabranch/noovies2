import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {Text, Image} from "react-native";
import * as Font from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Asset} from "expo-asset";
import {NavigationContainer} from "@react-navigation/native";
import Tabs from "./navigation/Tabs";

const loadFonts = (fonts) => fonts.map(font => Font.loadAsync(font));

const loadImages = (images) => assets.map(image => {
    if (typeof image === "string") {
        return Image.prefetch(image);
    } else {
        Asset.loadAsync(image);
    }
});

export default function App() {
    const [ready, setReady] = useState(false);
    const onFinish = () => setReady(true);
    const startLoading = () => async () => {
        const fonts = loadFonts([Ionicons.font]);
        const images = loadImages([require("./jisu.jpg"), "https://img.mimint.co.kr/bbs/2020/09/02/C2009021700508272r.jpg"]);
        await Promise.all([...fonts]);
    };

    if (!ready) {
        return <AppLoading onFinish={onFinish} onError={console.error} startAsync={startLoading}/>
    }
    //navigator를 사용하려면 NavigationContainer 를 사용하는 것은 필수 규칙이다.
    return (
        <NavigationContainer>
            <Tabs/>
        </NavigationContainer>
    )


}

