import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_CURRENT+LOCATION':
            return {
                ...state, 
                currentLocation: payload
            }
        default:
            return state;
    }
}

const startRecording = dispatch = async () => {

}

const stopRecording = dispatch = async () => {

}

const addLocation = dispatch => async location => {
    dispatchEvent({
        type: 'ADD_CURRENT_LOCATION',
        payload: location
    });
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { startRecording, stopRecording, addLocation },
    { recording: false, locations: [], currentLocation: null }
);