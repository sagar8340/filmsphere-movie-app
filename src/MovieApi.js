export const fetch_movie_list = () => {
    return fetch('http://localhost:5000/movie')
        .then((res) => res.json())
        .then((movie_Data) => {
            return movie_Data.results;
        })
};



