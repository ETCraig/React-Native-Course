import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    let { type, payload } = action;
    switch (action) {
        case 'ADD_BLOGPOST':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: `Blog Post #${state.length + 1}`
                }
            ];
        case 'DELETE_BLOGPOST':
            return state.filter(blogPost => blogPost.id !== payload);
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return () => {
        dispatch({
            type: 'ADD_BLOGPOST'
        });
    }
}

const deleteBlogPost = dispatch => {
    return id => {
        dispatch({
            type: 'DELETE_BLOGPOST',
            payload: id
        });
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost },
    []
);