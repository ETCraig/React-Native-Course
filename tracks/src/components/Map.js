import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Context as LocationContext } from '../context/locationContext';
import { hasStartedLocationUpdatesAsync } from 'expo-location';

const Map = () => {
    const { currentLocation, location } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    return <MapView
        style={styles.map}
        initialRegion={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
        region={{
            ...currentLocation.coords,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01
        }}
    >
        <Circle
            center={currentLocation.coords}
            radius={30}
            strokeColor="rgba(158, 158, 255, 1.0)"
            fillColor="rgba(158, 158, 255, 1.3)"
        />
        <Polyline coordinates={locations.map(loc => loc.coords)} />
    </MapView>
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;