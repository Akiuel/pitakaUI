import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'
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

const Register = () => {

  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const countryCodeRef = useRef("");
  const contactRef = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async () => {
    if(!emailRef.current || !passwordRef.current || !firstNameRef.current || !lastNameRef.current || !countryCodeRef.current ||!contactRef.current){
        Alert.alert('Register', "Please fill in all fields")
        return;
    }
    console.log('first name: ', firstNameRef.current)
    console.log('last name: ', lastNameRef.current)
    console.log('email: ', emailRef.current)
    console.log('password: ', passwordRef.current)
    console.log('country code: ', contactRef.current)
    console.log('contact number: ', contactRef.current)

    console.log('Registration successful')
  };

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28}/>

        <View style={styles.welcomeText}>
            <Typo size={30} fontWeight={"700"}>Register</Typo>
            <View style={styles.line}/>
        </View>

        {/* form */}

        <View style={styles.form}>
            <Typo size={16} color={colors.textLighter}>Create an account</Typo>
            <Input placeholder="First Name" onChangeText={(value)=> (firstNameRef.current = value)} icon={<Icons.User size={verticalScale(25)} color={colors.neutral300} weight="fill"/>}/>
            <Input placeholder="Last Name" onChangeText={(value)=> (lastNameRef.current = value)} icon={<Icons.UserList size={verticalScale(25)} color={colors.neutral300} weight="bold"/>}/>
            <Input placeholder="Email Address" onChangeText={(value)=> (emailRef.current = value)} icon={<Icons.At size={verticalScale(25)} color={colors.neutral300} weight="bold"/>}/>
            <Input placeholder="Password" secureTextEntry onChangeText={(value)=> (passwordRef.current = value)} icon={<Icons.Lock size={verticalScale(25)} color={colors.neutral300} weight="fill"/>}/>
            <View style={styles.numberContainer}>
                <Input placeholder="+63" onChangeText={(value) => (countryCodeRef.current = value)} style={styles.countryCodeInput} icon={<Icons.Flag size={verticalScale(25)} color={colors.neutral300} weight="fill"/>}/>
                <Input placeholder="Contact Number" onChangeText={(value) => (contactRef.current = value)} style={styles.numberInput} icon={<Icons.Phone size={verticalScale(25)} color={colors.neutral300} weight="fill"/>}/>
            </View>
            <Button loading={isLoading} onPress={handleSubmit}>
                <Typo fontWeight={'700'} color={colors.primary} size={17}>Sign Up</Typo>
            </Button>
        </View>

        {/* footer */}
        <View style={styles.footer}>
            <Typo size={14}>Already have an account?</Typo>
            <Pressable onPress={()=> router.navigate('/(auth)/login')}>
                <Typo size={14} fontWeight={'700'} color={colors.primaryLight}>Sign in</Typo>
            </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingX._20,
    },
    welcomeText: {
        justifyContent: "center",
        alignItems: "center",
        fontSize: verticalScale(20),
        fontWeight: "bold",
        color: colors.text,
    },
    line: {
        width: '25%',
        height: 3,
        backgroundColor: colors.white,
        marginTop: 5, 
        borderRadius: 5,
    },
    form: {
        gap: spacingY._20,
    },
    numberContainer: {
        flexDirection: "row",
        gap: spacingX._10,
        alignItems: "center",   
    },
    countryCodeInput: {
        flex: 0,
        maxWidth: 40,
        color: colors.text,
    },
    numberInput: {
        flex: 3,
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