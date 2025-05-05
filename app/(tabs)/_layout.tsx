import { Slot } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

export default function _layout() {
  return (
    <View>
        <Slot />
    </View>
  );
}
