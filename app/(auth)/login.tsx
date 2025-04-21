import { Image, Alert, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Typo from '@/components/Typo'
import { colors, spacingX, spacingY } from '@/constants/theme'
import { verticalScale } from '@/utils/styling'
import BackButton from '@/components/BackButton'
import Input from '@/components/Input'
import * as Icons from 'phosphor-react-native'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const Login = () => {

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if(!emailRef.current || !passwordRef.current){
        Alert.alert('Login', "Please fill in all fields")
        return;
    }
    console.log('email: ', emailRef.current)
    console.log('password: ', passwordRef.current)
    console.log('Login successful')
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>
        <Image style={styles.logo} resizeMode="contain" source={require('../../assets/images/mainLogo.png')}/>
        <View style={{gap: 1, marginTop: spacingY._5}}>
            <Typo size={30} fontWeight={"700"}>Sign in</Typo>
            <View style={styles.line}/>
        </View>

        {/* form */}

        <View style={styles.form}>
            <Typo size={16} color={colors.textLighter}>Login to your account</Typo>
            <Input placeholder="Enter your email" onChangeText={(value)=> (emailRef.current = value)} icon={<Icons.EnvelopeSimple size={verticalScale(26)} color={colors.neutral300}/>}/>
            <Input placeholder="Enter your password" secureTextEntry onChangeText={(value)=> (passwordRef.current = value)} icon={<Icons.Lock size={verticalScale(26)} color={colors.neutral300} weight="fill"/>}/>
            <Typo size={14} color={colors.text} style={{alignSelf: 'flex-end'}}>Forgot Password?</Typo>
            <Button loading={isLoading} onPress={handleSubmit}>
                <Typo fontWeight={'700'} color={colors.primary} size={17}>Sign in</Typo>
            </Button>
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <Typo size={14}>Are you a new user?</Typo>
            <Pressable onPress={()=> router.navigate('/(auth)/register')}>
                <Typo size={14} fontWeight={'700'} color={colors.primaryLight}>Sign up</Typo>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    logo: {
        width: 210,
        height: 210,
        alignSelf: 'center',
        marginTop: spacingY._10,
    },
    welcomeText: {
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text,
    },
    line: {
        width: '20%',
        height: 3,
        backgroundColor: colors.white,
        marginTop: 5, 
        borderRadius: 5,
    },
    form: {
        gap: spacingY._20,
    },
    forgotPassword: {
        textAlign: "right",
        fontWeight: "500",
        color: colors.text,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    },
    footerText: {
        textAlign: "center",
        color: colors.text,
        fontSize: verticalScale(15),
    },

});