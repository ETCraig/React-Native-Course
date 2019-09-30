import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyles}>
            <Image source={{ uri: result.image_url }} style={styles.imageStyles} />
            <Text style={styles.nameStyles}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyles: {
        marginLeft: 15
    },
    imageStyles: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyles: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;