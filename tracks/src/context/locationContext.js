import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'ADD_CURRENT+LOCATION':
            return {
                ...state,
                currentLocation: payload
            }
        case 'START_RECORDING':
            return {
                ...state,
                recording: true
            }
        case 'STOP_RECORDING':
            return {
                ...state,
                recording: false
            }
        case 'ADD_LOCATION':
            return {
                ...state,
                locations: [...state.locations, payload]
            }
        case 'CHANGE_NAME':
            return {
                ...state,
                name: payload
            }
        case 'RESET':
            return {
                ...state,
                name: '',
                locations: []
            }
        default:
            return state;
    }
}

const changeName = dispatch => name => {
    dispatch({
        type: 'CHANGE_NAME',
        payload: name
    });
}

const startRecording = dispatch = () => {
    dispatch({
        type: 'START_RECORDING'
    });
}

const stopRecording = dispatch = () => {
    dispatch({
        type: 'STOP_RECORDING'
    });
}

const addLocation = dispatch => location => {
    dispatch({
        type: 'ADD_CURRENT_LOCATION',
        payload: location
    });
    if (recording) {
        dispatch({
            type: 'ADD_LOCATION',
            payload: location
        });
    }
}

const reset = dispatch => () => {
    dispatch({
        type: 'RESET'
    });
}

export const { Context, Provider } = createDataContext(
    locationReducer,
    { changeName, startRecording, stopRecording, addLocation, reset },
    { name: '', recording: false, locations: [], currentLocation: null }
);