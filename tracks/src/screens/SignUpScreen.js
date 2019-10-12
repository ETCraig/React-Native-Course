import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const SignUpScreen = ({ navigation }) => {
    return <>
        <Button title="Go To SignIn" onPress={() => navigation.navigate('Signin')} />
        <Button title="Go To Main Flow" onPress={() => navigation.navigate('mainFlow')} />
    </>
}

const styles = StyleSheet.create({

});

export default SignUpScreen;