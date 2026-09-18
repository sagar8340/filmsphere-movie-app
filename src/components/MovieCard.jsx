import React from 'react'
import Addbtn from './Addbtn';
import { Remove } from './Remove';
import { useNavigate } from 'react-router-dom';


export const MovieCard = ({ movie, genres, watchlist, setWatchlist, type }) => {
    //      { id: 28, name: "Action" }
    const navigate = useNavigate();
    const genre_name = movie.genre_name
        ? movie.genre_name  // already formatted genre string (used in watchlist after adding movie)
        : movie.genre_ids   // raw genre IDs from API (used in home page data)
            .map(id => genres.find(res => res.id === id)?.name)
            .join(", ");

    return (
        <div >
            <div onClick={() => navigate("/MovieDetail", { state: { movie, genre_name } })} className='w-38 '  >
                <div className=" h-57 w-38">
                    <img
                        className='object-cover rounded-sm w-full h-auto'
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                </div>

                <h3 className='font-bold text-base wrap-break-word'>{movie.title}</h3>
                <div className='flex'>
                    <p className='text-base'>{genre_name}</p>
                </div>

            </div>

            {type === 'home'
                ? <Addbtn movie={movie} genre_name={genre_name} watchlist={watchlist} setWatchlist={setWatchlist} />
                : <Remove movie={movie} watchlist={watchlist} setWatchlist={setWatchlist} />
            }

        </div>
    )
}
export default MovieCard;
