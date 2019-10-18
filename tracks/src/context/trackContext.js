import createDataContext from './createDataContext';

const trackReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        default:
            return state;
    }
}

const fetchTasks = dispatch => () => { };

const createTrack = dispatch => () => { };

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTasks, createTrack },
    []
);