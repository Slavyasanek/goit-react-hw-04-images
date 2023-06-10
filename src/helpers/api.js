import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '34346691-066ec8be9ab970c052f0d3dfc';

export const getImages = async (searchText, page) => {
    const params = new URLSearchParams({
        key: API_KEY,
        q: searchText,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page
    })
    const response = await axios.get(`${BASE_URL}?${params}`);
    return response.data;
}