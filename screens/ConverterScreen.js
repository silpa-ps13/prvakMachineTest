import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import TtoV from './TtoV';
import VtoT from './VtoT';
const Stack = createStackNavigator();
const ConverterScreen = () => {
    return (
      <Stack.Navigator initialRouteName="TtoV">
        <Stack.Screen
          name="TtoV"
          component={TtoV}
          options={{
            title: 'TtoV', //Set Header Title
            headerStyle: {
              backgroundColor: '#694fad', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="VtoT"
          component={VtoT}
          options={{
            title: 'VtoT', //Set Header Title
            headerStyle: {
              backgroundColor: '#694fad', //Set Header color
            },
      
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          
          }}
        />
     
      </Stack.Navigator>
    
      // <View style={styles.container}> 
      //   <Text style={{marginVertical:50,fontSize:20,fontWeight:'bold',paddingBottom:50}}>Converter Screen</Text>
      //   <TouchableOpacity style={{backgroundColor:'#ccc',padding:15,width:'70%',alignItems:'center',marginTop:50,borderRadius:10}}
      //     onPress={() => navigation.navigate('TtoV')}>
      //     <Text style={{color:'#fff'}}>Text to Voice Converter</Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity style={{backgroundColor:'#ccc',padding:15,width:'70%',alignItems:'center',marginVertical:30,borderRadius:10}}
      //     onPress={() => chooseFile('photo')}>
      //     <Text style={{color:'#fff'}}>Voice to Text Converter</Text>
      //   </TouchableOpacity>
      // </View>
    );
};

export default ConverterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
  },
});
