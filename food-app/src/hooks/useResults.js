import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default (() => {
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

    return [searchApi, results, error];
});