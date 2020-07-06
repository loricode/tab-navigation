import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, TextInput, _Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor:'blue' }}>
      <Text  style={{fontSize:23,color:'#fff'}} >Home!</Text>
      <TextInput placeholder="escribe por fa"></TextInput>
    </View>
  );
}


function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
     backgroundColor:'red' }}>
      <Text style={{fontSize:23,color:'#fff'}}>Perfil</Text>
      <TextInput placeholder=""></TextInput>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'
      , backgroundColor:'green' }}>
      <Text  style={{fontSize:23,color:'#fff'}} >Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'md-home'
                : 'md-home';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'md-settings' : 'md-settings';
            }else if(route.name === "Profile"){
              iconName = focused ? 'md-person' : 'md-person';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
