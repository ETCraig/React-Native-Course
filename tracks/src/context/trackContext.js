import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'FETCH_TRACKS':
            return payload;
        default:
            return state;
    }
}

const fetchTasks = dispatch => async () => {
    const response = await trackerApi.get('/tracks');

    dispatch({
        type: 'FETCH_TRACKS',
        payload: response.data
    });
};

const createTrack = dispatch => async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
};

export const { Provider, Context } = createDataContext(
    trackReducer,
    { fetchTasks, createTrack },
    []
);