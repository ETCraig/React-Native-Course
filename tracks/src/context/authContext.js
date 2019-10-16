import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'SIGNIN':
            return {
                errorMessage: '',
                token: payload
            }
        case 'SIGNOUT': {
            return {
                token: null,
                errorMessage: ''
            }
        }
        case 'ADD_ERROR':
            return {
                ...state,
                errorMessage: payload
            }
        case 'CLEAR_ERROR_MESSAGE':
            return {
                ...state,
                errorMessage: ''
            }
        default:
            return state;
    }
}

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
        dispatch({
            type: 'SIGNIN',
            payload: token
        });
        navigate('TrackList');
    } else {
        navigate('Signup');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'CLEAR_ERROR_MESSAGE'
    })
}

const signup = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        dispatch({
            type: 'SIGNIN',
            payload: response.data.token
        });

        navigate('TrackList');
    } catch (error) {
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Something Went Wrong With Sign Up.'
        });
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });

        await AsyncStorage.setItem('token', response.data.token);

        dispatch({
            type: 'SIGNIN',
            payload: response.data.token
        });

        navigate('TrackList');
    } catch (error) {
        dispatch({
            type: 'ADD_ERROR',
            payload: 'Something Went Wrong With Sign In.'
        });
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');

    dispatch({
        type: 'SIGNOUT'
    });

    navigate('LoginFlow');
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { tryLocalSignin, clearErrorMessage, signup, signin, signout },
    { token: null, errorMessage: '' }
);