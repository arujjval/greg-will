import { Tabs } from 'expo-router';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function _layout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: '#1DCD9F',
      tabBarInactiveTintColor: '#FFFFFF',
      tabBarActiveBackgroundColor: '#222222',
      tabBarStyle: {
        backgroundColor: '#222222',
      },
      headerShown: false,
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: 'login',
          tabBarIcon: ({ color }) => (
            <AntDesign name="login" size={24} color="white" />
          ),
        }}
      />
      <Tabs.Screen
        name="inputPrescription"
        options={{
          title: 'share',
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={24} color="white" />
          ),
        }}
      />
    </Tabs>
  );
}
