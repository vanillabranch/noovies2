import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {Text,Image} from "react-native";
import * as Font from "expo-font";
import {Ionicons} from "@expo/vector-icons";
import {Asset,useAssets} from "expo-asset";



export default function App() {
    //아래와 같이 간략하게 줄일수 있다.
    //하지만 데이터베이스 초기화나 아바타, 기타 작업등이 필요하면 경우에 따라 startAsync를 사용할수도 있다.
    const [assets] = useAssets([require("./jisu.jpg")]);
    const [loaded] = Font.useFonts(Ionicons.font);
    if (!assets || !loaded) {
        return (
            <AppLoading

            />
        );
    }
    return <Text>We are done loading!!</Text>

}

