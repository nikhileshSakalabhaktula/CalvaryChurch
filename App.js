import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {Provider} from 'react-redux';
import {returnStore} from './redux/store'
import OpeningComponent from "./Components/OpeningComponent/OpeningComponent";
import MainComponent from "./Components/MainComponent/MainComponent";
import {createStackNavigator} from "@react-navigation/stack";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import {MaterialCommunityIcons, Feather, FontAwesome5} from '@expo/vector-icons';
import { RecoilRoot } from "recoil";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TabBottom = createMaterialBottomTabNavigator();
import Colors from "./constants/standardColors";
import CategoryScreen from './Components/CategoryScreen/CategoryScreen';
import Profile from './Components/Profile/Profile';
import ListOfItems from './Components/ListOfItems/ListOfItems';
const storeConfig = returnStore();

export default function App() {
  let [fontsLoaded] = useFonts({
    'CountrySide': require('./assets/fonts/Countryside-YdKj.ttf'),
  })

  const DrawerRoutes = () => {
    return (
        // <NavigationContainer>
          <Drawer.Navigator initialRoute='Home'>
            <Drawer.Screen
                name='Home'
                component={BottomTabs}
            />
            {/*<Drawer.Screen name='Draw1' component={() => <View><Text>View1</Text></View>}/>*/}
            {/*<Drawer.Screen name='Draw2' component={() => <View><Text>View2</Text></View>}/>*/}
          </Drawer.Navigator>
        // </NavigationContainer>
    )
  }

  const BottomTabs = () => {
    return (
      <TabBottom.Navigator
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: Colors.primary}}
      >
        <TabBottom.Screen 
          name='Home'
          component={MainComponent} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            )}
          }
        />
        <TabBottom.Screen 
          name='Daily Devotion'
          component={CategoryScreen}
          options={{
            tabBarLabel: 'Daily Devotion',
            tabBarIcon: ({ color }) => (
              //<MaterialCommunityIcons name="bible" color={color} size={26} />
              <FontAwesome5 name="bible" size={24} color="white" />
            )}
          }
        />
        <TabBottom.Screen
                  name='Watch'
                  component={CategoryScreen}
                  options={{
                    tabBarLabel: 'Watch',
                    tabBarIcon: ({ color }) => (
                      //<MaterialCommunityIcons name="bible" color={color} size={26} />
                      <MaterialCommunityIcons name="youtube-tv" size={26} color="white" />
                    )}
                  }
                />
        <TabBottom.Screen 
          name='Contact Us'
          component={Profile}
          options={{
            tabBarLabel: 'Contact Us',
            tabBarIcon: ({ color }) => (
              //<MaterialCommunityIcons name="phone-call" color={color} size={26} />
              <MaterialCommunityIcons name="phone-in-talk" size={26} color="black" />
            )}
          }
        />
      </TabBottom.Navigator>
    )
  }
  const Tab = createBottomTabNavigator();
  function HomeStackScreen() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Home" component={MainComponent}
                options={{
                    headerTransparent: false,
                    headerStyle: {
                                backgroundColor: '#4f6d7a',
                              },
                }} />

            </Stack.Navigator>
        )
  }
  function DailyDevotionStackScreen(){
          return (
              <Stack.Navigator>
                  <Stack.Screen name="Daily Devotion" component={CategoryScreen}
                  options={{
                                      headerTransparent: false,
                                      headerStyle: {
                                                  backgroundColor: '#4f6d7a',
                                                },
                                  }}/>
              </Stack.Navigator>
          )
  }
  function WatchStackScreen() {
           return (
                <Stack.Navigator>
                    <Stack.Screen name="Watch" component={CategoryScreen}
                    options={{
                                        headerTransparent: false,
                                        headerStyle: {
                                                    backgroundColor: '#4f6d7a',
                                                  },
                                    }}/>
                </Stack.Navigator>
              )
  }
  function ContactStackScreen() {
            return (
                  <Stack.Navigator>
                       <Stack.Screen name="Contact Us" component={Profile}
                       options={{
                                           headerTransparent: false,
                                           headerStyle: {
                                                       backgroundColor: '#4f6d7a',
                                                     },
                                       }}/>
                  </Stack.Navigator>
            )
  }


  if (!fontsLoaded) {
    return <AppLoading/>
  } else {
    return (
      <Provider store={storeConfig}>
        <RecoilRoot>
          <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                          tabBarIcon: ({ focused, color, size }) => {
                            switch(route.name){
                                case 'Home':
                                return <MaterialCommunityIcons name="home" color="black" size={26} />;
                                case 'Daily Devotion':
                                return <FontAwesome5 name="bible" size={24} color="black" />;
                                case 'Watch':
                                return <MaterialCommunityIcons name="youtube-tv" size={26} color="black" />;
                                case 'Contact Us':
                                return <MaterialCommunityIcons name="phone-in-talk" size={26} color="black" />;
                                default:
                                return <MaterialIcons name="error" size={24} color="black" />;
                            }
                          }
                        })}
                        tabBarOptions={{
                                  activeTintColor: '#3e2465',
                                  inactiveTintColor: '#3e2465',

                                }}
            >
                    <Tab.Screen name="Home" component={HomeStackScreen} />
                    <Tab.Screen name="Daily Devotion" component={DailyDevotionStackScreen} />
                    <Tab.Screen name="Watch" component={WatchStackScreen} />
                    <Tab.Screen name="Contact Us" component={ContactStackScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </RecoilRoot>
      </Provider>
    );
  }
}
