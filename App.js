import React, {useState} from 'react';
import AppLoading from 'expo-app-loading';
import {Text} from "react-native";

export default function App() {
    const [ready, setReady] = useState(false);
    const onFinish = () => setReady(true);
    const startLoading = () => async () => {
      /*여기에 로딩하고 싶은 모든것을 담자 preload 중요 비디오, api, 자원, db등 등등*/
      //await을 사용하면 promise가 종료될때까지 기다린다
      await new Promise(resolve =>setTimeout(resolve,1000));
    };

    if (!ready) {
        return <AppLoading onFinish={onFinish} onError={console.error} startAsync={startLoading}/>;
    }
    return <Text>We are done loading!</Text>

}

