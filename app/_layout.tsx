import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { AuthProvider, AuthContextType } from '@/supabase/globalAuthContext';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect, useState } from 'react';
import supabase from '@/supabase/supabase';
import 'react-native-reanimated';
import "../global.css"

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Inter: require('../assets/fonts/Inter-VariableFont_opsz,wght.ttf'),
    InterItalic: require('../assets/fonts/Inter-Italic-VariableFont_opsz,wght.ttf'),
  });

  const [session, setSession] = useState<AuthContextType | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession({ isAuthenticated: !!session, user: session?.user});
    })
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession({ isAuthenticated:!!session, user: session?.user});
    })
  }, [])

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider value={session? session : { isAuthenticated: false, user: null }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  );
}
