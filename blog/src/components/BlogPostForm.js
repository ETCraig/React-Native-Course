import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text styles={labelStyle}>Enter Title:</Text>
            <TextInput
                styles={inputStyle}
                value={title}
                onChangeText={(text) => setTitle(text)}
            />
            <Text styles={labelStyle}>Enter Content:</Text>
            <TextInput
                styles={inputStyle}
                value={content}
                onChangeText={(text) => setContent(text)}
            />
            <Button
                title="Save Blog Post"
                onPress={() => onsubmit(title, content)}
            />
        </View>
    );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;