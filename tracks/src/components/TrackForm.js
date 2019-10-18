import React, { useContext, useState } from 'react';
import { Button, Input } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/locationContext';

const TrackForm = () => {
    const {
        state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);
    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    placeholder="Enter Track Name"
                    onChangeText={changeName}
                />
            </Spacer>
            {recording ? (
                <Button title="Stop" onPress={stopRecording} />
            ) : (
                <Button title="Start Recording" onPress={startRecording} />
                )
            }
        </>
    );
}

export default TrackForm;