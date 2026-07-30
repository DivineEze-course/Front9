import axios from 'axios';
const api = axios.create({
    baseURL: 'https://www.freetogame.com/api'
});

export async function getGames(filters = {}) {
    const response = await api.get("/games", {
        params : filters
    });
    
    return response.data
}
