import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
    return <>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Spacer>
            <Input label="Email" />
        </Spacer>
        <Spacer>
            <Input label="Password" />
        </Spacer>
        <Spacer>
            <Button title="Sign Up" />
        </Spacer>
    </>
}

const styles = StyleSheet.create({

});

export default SignUpScreen;