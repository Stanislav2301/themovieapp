export default function server (url, settings = {}) {
    const API_KEY = 'a5e5127e9e3098334ca5ac04c6265624';
    const BASE_URL = 'https://api.themoviedb.org/3/movie';
    return fetch (`${BASE_URL}/${url}?api_key=${API_KEY}&language=en-US`).then(res=>{
        return res.json();
    })
}