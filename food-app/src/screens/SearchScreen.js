import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
    const [query, setQuery] = useState('');
    const [searchApi, results, error] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar
                query={query}
                onQueryChange={() => setQuery(query)}
                onQuerySubmit={() => searchApi()}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} navigation={navigation} />
                <ResultsList title="Mid Tier" results={filterResultsByPrice('$$')} navigation={navigation} />
                <ResultsList title="Higher Tier" results={filterResultsByPrice('$$$')} navigation={navigation} />
                <ResultsList title="Professional" results={filterResultsByPrice('$$$$')} navigation={navigation} />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;