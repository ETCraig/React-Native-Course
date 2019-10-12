import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const TrackListScreen = ({ navigation }) => {
    return <>
        <Button title="Go To Track Detail" onPress={() => navigation.navigate('TrackDetail')} />
    </>
}

const styles = StyleSheet.create({

});

export default TrackListScreen;