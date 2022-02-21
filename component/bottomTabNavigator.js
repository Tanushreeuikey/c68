import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer}from '@react-navigation/native';
import{createBottomTabNavigator}from 'react-navigation/bottom-tabs';
import Ss from '../screen/search';
import Ts from '../screen/transaction';
const Tab=createBottomTabNavigator()

export default class BottomTabNavigator extends React.Component{
  render()
  {
    return(
         <NavigationContainer>
             <Tab.Navigator>
                 <Tab.Screen name="Tansaction" component={Ts}></Tab.Screen>
                 <Tab.Screen name="Search" component={Ss}></Tab.Screen>
             </Tab.Navigator>
         </NavigationContainer>
    )
  }
}