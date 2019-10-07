import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    let { type, payload } = action;
    switch (action) {
        case 'ADD_BLOGPOST':
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: payload.title,
                    content: payload.content
                }
            ];
        case 'DELETE_BLOGPOST':
            return state.filter(blogPost => blogPost.id !== payload);
        case 'EDIT_BLOGPOST':
            return blogPost.id === payload.id ? payload : blogPost;
        default:
            return state;
    }
}

const addBlogPost = dispatch => {
    return (title, content) => {
        dispatch({
            type: 'ADD_BLOGPOST',
            payload: { title, content }
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

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({
            type: 'EDIT_BLOGPOST',
            payload: {
                id,
                title,
                content
            }
        });
        if (callback) {
            callback();
        }
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{ title: 'TEST POST', content: 'TEST CONTENT', id: 1 }]
);