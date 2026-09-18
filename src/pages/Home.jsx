import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { fetch_movie_list } from "../MovieApi";
import Slider_baner from "../components/Slider_baner";
import Footer from "../components/Footer";


const Home = ({ watchlist, setWatchlist, mode, setMode }) => {
  const [movielist, setMovielist] = useState([])
  const [genrelist, setGenrelist] = useState([])
  const [text, setText] = useState('')


  useEffect(() => {
    // Popular movies data fetching ...
    fetch_movie_list().then((movieData) => {
      setMovielist(movieData)
    })
    .catch((error)=>console.log(error))
    
  //   genre data fetching... here
 fetch('http://localhost:5000/genre')
      .then((res) => res.json())
      .then((genre_data) => setGenrelist(genre_data.genres))
      .catch(error => console.log(error))

  }, [])
  // console.log(movielist);


  // filtering movies based on search bar input
  const filterMovies = movielist.filter(movie => movie.title.toLowerCase().includes(text.toLowerCase()))

  return (

    <>
      {/* Navbar section------- */}

      <Navbar text={text} setText={setText} mode={mode} setMode={setMode} />

      {/* movie poster section -------- */}
      <div className=" w-[89%] h-[66vh] overflow-hidden mx-auto mt-3 
      md:h-[85vh] ">
        <Slider_baner movielist={movielist} />
      </div >


      {/* Upcoming movieCard list here-------- */}
      < h1 className="ml-5 mt-6 pb-4 text-2xl font-bold" > Upcoming</h1 >
      <div className={`${mode === 'light' ? " bg-white text-black" : "bg-black text-white"} grid grid-cols-2 gap-2 justify-items-center h-auto w-[99%] mx-auto
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-6`}>
        {(text.trim().length >= 2 ? filterMovies : movielist).map(movieitem => {
          return <MovieCard key={movieitem.id} genres={genrelist} movie={movieitem} watchlist={watchlist} setWatchlist={setWatchlist} type='home' />
        })}
      </div>
      <Footer />
    </>
  );
};

export default Home;


