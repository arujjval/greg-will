import { AuthContext } from '@/supabase/globalAuthContext';
import { router } from 'expo-router';
import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Index() {
  const { user } = useContext(AuthContext);

  const handlePress = () => {
    router.push('/login');
  }

  const showUser = () => {
    console.log(user);
  }

  return (
    <View className='w-full h-full flex-col justify-center'>
      <TouchableOpacity onPress={handlePress} className='w-20 h-10 bg-red-500'>
        <Text>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={showUser} className='w-20 h-10 bg-black'>
        <Text>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}
