import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    return (
        <View>
            <SearchBar 
                query={query} 
                onQueryChange={newQuery => setQuery(newQuery)}  
                onQuerySubmit={() => console.log('Query Submitted.')}
            />
            <Text>Search Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;