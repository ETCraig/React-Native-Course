import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    let { type, payload } = action;
    switch (action) {
        case 'GET_BLOGPOSTS':
            return payload;
        case 'DELETE_BLOGPOST':
            return state.filter(blogPost => blogPost.id !== payload);
        case 'EDIT_BLOGPOST':
            return blogPost.id === payload.id ? payload : blogPost;
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');

        dispatch({
            type: 'GET_BLOGPOSTS',
            payload: response.data
        });
    }
}

const addBlogPost = dispatch => {
    return (title, content) => {
        await jsonServer.post('blogposts', { title, content });
    }
}

const deleteBlogPost = dispatch => {
    return async id => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({
            type: 'DELETE_BLOGPOST',
            payload: id
        });
    }
}

const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
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
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);