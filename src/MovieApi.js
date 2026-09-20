const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const fetch_movie_list = () => {
    return fetch(`${BASE_URL}/movie`)
        .then((res) => res.json())
        .then((movie_Data) => {
            return movie_Data.results;
        })
};



