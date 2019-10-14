import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'SIGNUP':
            return {
                errorMessage: '',
                token: payload
            }
        case 'ADD_ERROR':
            return {
                ...state,
                errorMessage: payload
            }
        default:
            return state;
    }
}

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        dispatch({
            type: 'SIGNUP',
            payload: response.data.token
        });

        navigate('TrackList');
    } catch (error) {
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Something Went Wrong With Signup.'
        });
    }
}

const signin = dispatch => {
    return ({ email, password }) => {

    }
}

const signout = dispatch => {
    return () => {

    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signup, signin, signout },
    { token: null, errorMessage: '' }
);