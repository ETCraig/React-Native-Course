import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        searchApi('pasta');
    }, []);

    const searchApi = async (searchQuery) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchQuery,
                    location: 'phoenix'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setError('Something Went Wrong!');
        }
    }

    return (
        <View>
            <SearchBar
                query={query}
                onQueryChange={() => setQuery(query)}
                onQuerySubmit={() => searchApi()}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>We Have Found {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;