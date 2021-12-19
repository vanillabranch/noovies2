import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View, Text} from 'react-native';
import {TouchableOpacity} from "react-native-gesture-handler";
import {YELLOW_COLOR} from "../color";

const ScreenOne = ({navigation : {navigate}}) => (
    <TouchableOpacity onPress={()=> navigate("Two")}>
        <Text>go to two</Text>
    </TouchableOpacity>
);

const ScreenTwo = ({navigation : {navigate}}) => (
    <TouchableOpacity onPress={()=> navigate("Three")}>
        <Text>go to three</Text>
    </TouchableOpacity>
);

const ScreenThree = ({navigation : {setOptions}}) => (
    <TouchableOpacity onPress={()=> setOptions({title:"hello"})}>
        <Text>
            change title
        </Text>
    </TouchableOpacity>
);


const NativeStack = createNativeStackNavigator();
//모듈 설치하고 무조건 재시작...
//대량 반환은 아래처럼 브레이스 후 return , 그냥 이걸 습관화 하자. 그게 나을듯.
const Stack = () => {
    return (
        <NativeStack.Navigator
            screenOptions={{
                headerTintColor:YELLOW_COLOR,
                animation:"flip"
            }}
        >
            <NativeStack.Screen
                name={"One"}
                component={ScreenOne}
            />
            <NativeStack.Screen name={"Two"} component={ScreenTwo}/>
            <NativeStack.Screen name={"Three"} component={ScreenThree} options={{presentation:"modal",}}/>
        </NativeStack.Navigator>
    );
}


export default Stack;
