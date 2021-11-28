import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {Text,Image} from "react-native";
import * as Font from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Asset} from "expo-asset";

export default function App() {
    const [ready, setReady] = useState(false);
    const onFinish = () => setReady(true);
    const startLoading = () => async () => {
        await Font.loadAsync(Ionicons.font);
        //앱 로고를 로딩하거나 할때 등등 미리 받아야 할것들을 여기서 다 하자.
        //await과 async promise는 ajax async callback셋트로 기억하자
        await Asset.loadAsync(require("./jisu.jpg"));
        //파일시스템에 없이 서버에서 사용을 하고자 한다면, await Image.prefetch(url)을 사용해야 한다.
        //서버 문제생길수도 있으니 그냥 파일시스템에넣어서 쓰자.
        await Image.prefetch("https://img.mimint.co.kr/bbs/2020/09/02/C2009021700508272r.jpg");
    };

    if (!ready) {
        return <AppLoading onFinish={onFinish} onError={console.error} startAsync={startLoading}/>;
    }
    return <Text>We are done loading!</Text>

}

