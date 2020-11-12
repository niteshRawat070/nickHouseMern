import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeListScreen from '../screens/HomeListScreen';
import HomeDetailsScreen from '../screens/HomeDetailsScreen';
import AddHomeScreen from '../screens/AddHomeScreen';
import AboutScreen from '../screens/AboutScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function stackNavigator(params) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeList"
                component={HomeListScreen}
                options={{ title: "Home Hunt" }}
            />
            <Stack.Screen
                name='HomeDetails'
                component={HomeDetailsScreen}
            />
            <Stack.Screen
                name='AddHome'
                component={AddHomeScreen}
            />
        </Stack.Navigator>
    )
}
function aboutStackNavigator(params) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='About'
                component={AboutScreen}
            />
        </Stack.Navigator>
    )
}

function AppNavigator(props) {
    return (
        <NavigationContainer>
            <Tab.Navigator  //using (parenthesis) it will return automatically
                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        let iconName;
                        if (route.name == "Home") {
                            iconName = "home"
                        } else if (route.name == "About") {
                            iconName = "info"
                        }
                        return <MaterialIcons name={iconName} size={24} />
                    }
                })}
            >
                <Tab.Screen
                    name='Home'
                    component={stackNavigator}
                />
                <Tab.Screen
                    name='About'
                    component={aboutStackNavigator}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AppNavigator;