import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {View, Text} from "react-native";

const Tab = createBottomTabNavigator();

const Tabs = () => (
    <Tab.Navigator
        screenOptions={{
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveTintColor: "red",
            tabBarInactiveTintColor: "purple",
            tabBarStyle: {backgroundColor: "tomato"},
            headerTitleStyle: {color: "tomato"},
            headerRight: () => (
                <View>
                    <Text>hello</Text>
                </View>
            )
        }}
    >
        <Tab.Screen name={"Movies"} component={Movies}
                    options={{
                        tabBarLabel: 'Movies',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home" color={color} size={size}/>
                        ),
                        tabBarBadge: 3,

                    }}
        />
        <Tab.Screen name={"Tv"} component={Tv}
                    options={{
                        tabBarLabel: 'Tv',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="youtube-tv" color={color} size={size}/>
                        ),
                        tabBarBadge: "hello"
                    }}
        />
        <Tab.Screen name={"Search"} component={Search}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({color, size}) => (
                            <MaterialCommunityIcons name="home-search" color={color} size={size}/>
                        ),
                    }}
        />
    </Tab.Navigator>
)

export default Tabs;
