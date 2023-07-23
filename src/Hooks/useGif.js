import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = 'INfQo9HWLa6FTa8JUVIyk5tuaeEFV8RO';
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

function useGif(value) {

    const [loading, setLoading] = useState(false);
    const [gif, setGif] = useState('');

    async function fetchData(value) {
        setLoading(true);

        const { data } = await axios.get(value ? `${url}&tag=${value}` : url);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }


    useEffect(() => {
        fetchData('naruto')

    }, [])

    return { gif, loading, fetchData };
}
export default useGif;