import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const index = () => {
    const router = useRouter();
    useEffect(()=> {
        setTimeout(() => {
            router.push('/(auth)/welcome');
        }, 2000);
    },[])
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require('../assets/images/splashImage.png')}
        />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
    },
    logo: {
        height: "35%",
        aspectRatio: 1,
    }
});