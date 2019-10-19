import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context as TrackContext } from '../context/trackContext';

const TrackDetailScreen = ({ navigation }) => {
    const { state } = useContext(TrackContext);
    const _id = navigation.getParam('_id');

    const track = state.find(track => track._id === _id);
    return (
        <View>
            <Text>{track.name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default TrackDetailScreen;