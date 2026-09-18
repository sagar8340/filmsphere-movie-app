
import Footer from '../components/Footer';
import MovieCard from '../components/MovieCard'
import Navbar from "../components/Navbar";
import React, { useEffect } from 'react';

const Watchlist = ({ watchlist, setWatchlist }) => { 

   useEffect(() => {
    const watchlist_data = JSON.parse(localStorage.getItem("latest_watchlist_data")) || [];
    setWatchlist(watchlist_data)
  }, [])

  return (
    <>
      <Navbar />
      <div className='p-1.5'>
        <h1>My watchlist</h1>
        <div className='grid grid-cols-2 gap-2 mt-18 justify-items-center h-auto w-[99%] mx-auto
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6'>
          {watchlist.length === 0 ? (
            <p>No movielist</p>
          ) : (

            watchlist.map(movie => <MovieCard key={movie.id} movie={movie} type='watchlist' watchlist={watchlist} setWatchlist={setWatchlist} />)
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Watchlist
