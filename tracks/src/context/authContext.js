import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    let { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {},
    { isSignedIn: false }
);