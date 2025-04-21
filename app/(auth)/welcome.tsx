import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import Button from '@/components/Button'
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated'
import { useRouter } from 'expo-router'

const Welcome = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);

    const steps = [
        {
            image: require('../../assets/images/welcome.png'),
            title1: 'Seamless Bank',
            title2: 'Anytime',
            description1: 'Access your finances whenever and wherever.',
            description2: 'Banking made easy for you.',
        },
        {
            image: require('../../assets/images/welcome2.png'),
            title1: 'Track Your',
            title2: 'Expenses Easily',
            description1: 'Stay on top of your spending with real-time expense',
            description2: 'tracking. Smart budgeting at your fingertips.',
        },
        {
            image: require('../../assets/images/welcome3.png'),
            title1: 'Secure and Fast',
            title2: 'Transactions',
            description1: 'Your money moves swiftly and safely.',
            description2: 'Bank with confidence.',
        },
    ];

    const handleNext = () => {
        if(step < steps.length){
            setStep(step + 1);
        } else {
            router.push('/(auth)/register');
        }
    };

  return (
    <ScreenWrapper>
        <View style={styles.container}>
            {/* login button & image */}
            <View>
                <TouchableOpacity onPress={()=> router.push('/(auth)/login')} style={styles.loginButton}>
                    <Typo fontWeight={500}>Sign in</Typo>
                </TouchableOpacity>

                <Animated.Image
                    entering = {FadeIn.duration(1000)}
                    exiting= {FadeOut.duration(500)}
                    source={steps[step - 1].image}
                    style={styles.welcomeImage}
                    resizeMode="contain"
                />
            </View>
            
            {/* footer */}
            <View style={styles.footer}>
                <Animated.View entering={FadeInDown.duration(1000).springify().damping(12)} exiting={FadeOut.duration(1000)} style={{alignItems: "center"}}>
                    <Typo size={30} fontWeight={"800"}>{steps[step - 1].title1}</Typo>
                    <Typo size={30} fontWeight={"800"}>{steps[step - 1].title2}</Typo>
                </Animated.View>

                <Animated.View entering={FadeInDown.duration(1000).delay(100).springify().damping(12)} exiting={FadeOut.duration(1000)} style={{alignItems: "center", gap: 2}}>
                    <Typo size={13} color={colors.textLight}>{steps[step - 1].description1}</Typo>
                    <Typo size={13} color={colors.textLight}>{steps[step - 1].description2}</Typo>
                </Animated.View>

                <Animated.View entering={FadeInDown.duration(1000).delay(200).springify().damping(12)} exiting={FadeOut.duration(1000)} style={styles.buttonContainer}>
                    <Button onPress={handleNext}>
                        <Typo size={17} color={colors.primary} fontWeight={"700"}>{step < steps.length ? 'Next' : 'Get Started'}</Typo>
                    </Button>
                </Animated.View>
            </View>
        </View>
    </ScreenWrapper>
  );
};

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingTop: spacingY._7,
    },
    welcomeImage: {
        width: "100%",
        height: verticalScale(200),
        alignSelf: "center",

        marginTop: verticalScale(100),
    },
    loginButton: {
        alignSelf: "flex-end",
        marginRight: spacingX._20,
    },
    footer: {
        backgroundColor: colors.primary,
        alignItems: "center",
        paddingTop: verticalScale(30),
        paddingBottom: verticalScale(45),
        gap: spacingY._20,
        ...(Platform.OS === 'web'
            ? {
                  boxShadow: "0px -10px 25px rgba(255, 255, 255, 0.15)", // Web-specific shadow
              }
            : {
                  shadowColor: "white", // Mobile-specific shadow
                  shadowOffset: { width: 0, height: -10 },
                  shadowRadius: 25,
                  shadowOpacity: 0.15,
                  elevation: 10,
              }),
    },
    buttonContainer: {
        width: "100%",
        paddingHorizontal: spacingX._25,
    },
});