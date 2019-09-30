import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
    return (
        <View>
            <Image source={{ uri: result.image_url }} style={styles.imageStyles} />
            <Text style={styles.nameStyles}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    imageStyles: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    nameStyles: {
        fontWeight: 'bold'
    }
});

export default ResultsDetail;