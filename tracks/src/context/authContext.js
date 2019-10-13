import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const authReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}

const signup = dispatch => {
    return async ({ email, password }) => {
        try {
            const response = await trackerApi.post('/signup', { email, password });
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
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
    { isSignedIn: false }
);