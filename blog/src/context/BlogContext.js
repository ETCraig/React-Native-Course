import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    let { type, payload } = action;
    switch (action) {
        case 'ADD_BLOGPOST':
            return [
                ...state,
                { title: `Blog Post #${state.length + 1}` }
            ];
        default:
            return state;
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({
            type: 'ADD_BLOGPOST'
        });
    }

    return (
        <BlogContext.Provider
            value={{ data: blogPosts, addBlogPost }}
        >
            {children}
        </BlogContext.Provider>
    );
}

export default BlogContext;