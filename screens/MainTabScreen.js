import React from 'react';
import { Image } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import BarcodeScreen from './BarcodeScreen';
import OCRScreen from './OCRScreen';
import ProfileScreen from './ProfileScreen';
import ConverterSceen from './ConverterScreen';



const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="profile"
      activeColor="#fff"
  
    >
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'profile',
          tabBarColor: '#003544',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Barcode"
        component={BarcodeScreen}
        options={{
          tabBarLabel: 'Barcode',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/barcode.png')} color={color} style={{width:20,height:20,tintColor:'#fff'}} />
          ),
        }}
      />
      <Tab.Screen
        name="Converter"
        component={ConverterSceen}
        options={{
          tabBarLabel: 'Converter',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/co.png')} color={color} style={{width:20,height:20,tintColor:'#fff'}} />
          ),
        }}
      />
      <Tab.Screen
        name="OCR"
        component={OCRScreen}
        options={{
          tabBarLabel: 'OCR',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Image source={require('../assets/ocr.jpg')} color={color} style={{width:20,height:20,tintColor:'#fff'}} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;



