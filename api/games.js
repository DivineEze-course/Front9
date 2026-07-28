import axios from 'axios';
const api = axios.create({
    baseURL: 'https://www.freetogame.com/api'
});

export async function getGames() {
    const response = await api.get("/games");
    console.log(response.data);
    return response.data
}
