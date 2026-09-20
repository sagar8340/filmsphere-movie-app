const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://filmsphere-movie-app-el6c.onrender.com';

export const fetch_movie_list = () => {
    return fetch(`${BASE_URL}/movie`)
        .then((res) => {
            if (!res.ok) {
                throw new Error('API response failed');
            }
            return res.json();
        })
        .then((movie_Data) => {
            return movie_Data?.results || [];
        })
        .catch((err) => {
            console.error("Fetch error:", err);
            return [];
        });
};

