import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const MovieDetail = () => {
  const location = useLocation()
  const movie = location.state.movie;
  const genre = location.state.genre_name;

  return (
    <>
      <Navbar />

      <div className='flex flex-col items-center mt-25 h-auto w-full p-6 md:flex-row md:justify-center md:gap-8'>

        {/* Poster */}
        <div className="h-auto w-full flex justify-center md:w-[40%]">
          <img
            className='object-cover rounded-sm h-[75vh] w-[80%] md:w-[70%]'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        </div>

        {/* Details */}
        <div className='text-base font-bold flex flex-col gap-5 w-full md:w-[50%]'>
          <p>
            Movie : <span className='font-medium'>{movie.title}</span>
          </p>

          <p>
            Genre : <span className='font-medium'>{genre}</span>
          </p>

          <p>
            Release Date : <span className='font-medium'>{movie.release_date}</span>
          </p>

          <p>
            Language : <span className='font-medium'>{movie.original_language}</span>
          </p>

          <p>
            IMDB : <span className='font-medium'>{movie.vote_average.toFixed(1)}</span>
          </p>

          <p>
            Description : <span className='font-medium'>{movie.overview}</span>
          </p>
        </div>

      </div>

      <Footer />
    </>
  )
}

export default MovieDetail