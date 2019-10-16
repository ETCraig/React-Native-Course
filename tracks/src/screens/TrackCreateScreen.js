import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/locationContext';
import useLocation from '../hooks/useLocation';
const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation((location) => addLocation(location));

    return (
        <SafeAreaView>
            <Text h3>Create a Track</Text>
            <Map />
            {err ? <Text>Please Enable Location Services.</Text> : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);