import React, { useContext } from 'react';
import { Button, FlatList, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context);

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
                        <View style={styles.rowStyles}>
                            <Text style={styles.titleStyles}>{item.title}</Text>
                            <TouchableOpacity onPress={}>
                                <Feather style={styles.iconStyles} name="trash" />
                            </TouchableOpacity>
                        </View>
                    );
                }}
            />
        </View>
    );
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