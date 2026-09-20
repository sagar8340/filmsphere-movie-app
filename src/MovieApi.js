const BASE_URL = 'https://filmsphere-movie-app-el6c.onrender.com';

export const fetch_movie_list = () => {
    return fetch(`${BASE_URL}/movie`)
        .then((res) => res.json())
        .then((movie_Data) => {
            return movie_Data.results || [];
        })
        .catch((err) => {
            console.log(err);
            return [];
        });
};
