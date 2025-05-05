import * as Linking from 'expo-linking';
import { x25519 } from '@noble/curves/ed25519';
import 'react-native-get-random-values';
import { Buffer } from 'buffer';
// import supabase from './supabase';
import { Alert, AppState } from 'react-native';
import supabase from './supabase';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export const auth = async () => {
  // Generate a random private key using crypto.getRandomValues
  const privateKeyArray = new Uint8Array(32);
  crypto.getRandomValues(privateKeyArray);
  const privateKey = Buffer.from(privateKeyArray).toString('hex');
  
  console.log("Private Key Generated:", privateKey);
  const publicKey = Buffer.from(x25519.getPublicKey(privateKeyArray)).toString('hex');
  
  const redirectUrl = Linking.createURL('auth-callback');
  const app_url = 'http://localhost:8081';
  const phantomUrl = `https://phantom.app/ul/v1/connect?app_url=${app_url}&redirect_link=${redirectUrl}&dapp_encryption_public_key=${publicKey}`;
  
  await Linking.openURL(phantomUrl);
  console.log("Phantom URL:", phantomUrl);
  console.log(redirectUrl);
}

export const temporaryAuth = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: "arujjwal0208@gmail.com",
    password: "00000000",
  })
  if (error) Alert.alert(error.message);
}