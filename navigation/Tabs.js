import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Movies from "../screens/Movies";
import Search from "../screens/Search";
import Tv from "../screens/Tv";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {View, Text} from "react-native";
import {useColorScheme} from 'react-native';
import {BLUE_COLOR, DARK_GREY, LIGHT_GREY, YELLOW_COLOR} from "../color";

const Tab = createBottomTabNavigator();
//안에 return 쓰면 {}, 아니면 괄호 ()
const Tabs = () => {
    const isDark = useColorScheme() !== "dark";

    return (
        <Tab.Navigator
            screenOptions={{
                /*tabBarLabelPosition: 'beside-icon',  아이콘 옆으로 글자 붙이기*/
                tabBarStyle: {
                    backgroundColor: isDark ? BLUE_COLOR : "white"
                },
                tabBarActiveTintColor: isDark ? YELLOW_COLOR : BLUE_COLOR,
                tabBarInactiveTintColor: isDark ? DARK_GREY : LIGHT_GREY,
                headerTitleStyle: {
                    color: isDark ? "white" : BLUE_COLOR
                },
                headerStyle: {
                    backgroundColor: isDark ? BLUE_COLOR : "white"
                },
                headerTitleAlign: 'center',
                headerRight: () => {
                    return (
                        <View>
                            <Text>hello</Text>
                        </View>
                    )
                },
                tabBarLabelStyle : {
                    marginTop:-5,
                    fontSize:10,
                    fontWeight:"600"
                }
            }}
        >
            <Tab.Screen name={"Movies"} component={Movies}
                        options={{
                            tabBarLabel: 'Movies',
                            tabBarIcon: ({focused, color, size}) => {
                                return (
                                    <Ionicons name={focused ? "film" : "film-outline"} size={size} color={color}/>
                                )
                            },
                            tabBarBadge: 3,

                        }}
            />
            <Tab.Screen name={"Tv"} component={Tv}
                        options={{
                            tabBarLabel: 'TV',
                            tabBarIcon: ({focused, color, size}) => {
                                return (
                                    <Ionicons name="tv" size={size} color={color}/>
                                )
                            },
                            tabBarBadge: "1"
                        }}
            />
            <Tab.Screen name={"Search"} component={Search}
                        options={{
                            tabBarLabel: 'Search',
                            tabBarIcon: ({focused, color, size}) => {
                                return (
                                    <Ionicons name={focused ? "search" : "search-outline"} size={size} color={color}/>
                                )
                            },
                        }}
            />
        </Tab.Navigator>
    );
};

export default Tabs;
