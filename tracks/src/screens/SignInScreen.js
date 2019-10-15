import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In To Tracker"
                errorMessage=""
                buttonText="Sign In"
                onSubmit={() => { }}
            />
            <NavLink
                routeName="Signup"
                text="Don't Have An Account? Sign Up here!"
            />
        </View>
    );
}

SignInScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignInScreen;