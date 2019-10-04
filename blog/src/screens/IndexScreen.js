import React, { useContext } from 'react';
import { Button, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button
                title="Add Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.rowStyles}>
                                <Text style={styles.titleStyles}>{item.title}</Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.iconStyles} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                <Feather name="plus" size={30} style={{ marginRight: '5px' }} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    rowStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    titleStyles: {
        fontSize: 18
    },
    iconStyles: {
        fontSize: 24
    }
});

export default IndexScreen;