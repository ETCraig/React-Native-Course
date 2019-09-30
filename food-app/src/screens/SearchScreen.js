import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [query, setQuery] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
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
            <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
            <ResultsList title="Mid Tier" results={filterResultsByPrice('$$')} />
            <ResultsList title="Higher Tier" results={filterResultsByPrice('$$$')} />
            <ResultsList title="Professional" results={filterResultsByPrice('$$$$')} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;