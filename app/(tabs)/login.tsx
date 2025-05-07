import { phantomBlack } from '@/assets/images';
import React, { useEffect } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import * as Linking from 'expo-linking';
import { router } from 'expo-router';
import { temporaryAuth } from '@/supabase/auth';

export default function Login() {
    async function handleAuth() {
        await temporaryAuth();

        router.push('/');
    }
    
    const handleDeepLink = async ({ url } : { url: string | null}) => {
        if (!url) return;
        //const fixedUrl = url.replace('#', '?');
        //const parsed = Linking.parse(fixedUrl);
        console.log(url);
        
        // if (parsed.path === 'auth-callback') {
        //   const publicKey = parsed.queryParams?.public_key;
        //   if (publicKey) {
        //     console.log(publicKey);
        //   }
        // }
      };
    
      useEffect(() => {
        Linking.getInitialURL().then(url => handleDeepLink({ url }));
        const listener = Linking.addEventListener('url', handleDeepLink);
        return () => listener.remove();
      }, []);

   return (
    <View className='h-full w-full'>
        <View className='h-full w-full 
        bg-[#222222] flex-col justify-center 
            items-center'>
        <TouchableOpacity onPress={handleAuth}>
            <View className='bg-[#AB9FF2] min-w-64 px-5 py-3
            flex-row items-center justify-center gap-3 rounded-full'>
                <View className='flex-row justify-center
                 items-center gap-3'>
                    <Text 
                        className='font-lato-bold text-xl'
                        style={{
                            fontWeight: 200,
                        }}>
                        login with
                    </Text>
                    <Image 
                        source={phantomBlack}
                        style={{
                            width: 48,
                            height: 40,
                        }}/>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    </View>
   );
}
