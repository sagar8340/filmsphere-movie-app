import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import Watchlist from './pages/Watchlist'
import { useState } from "react";

export const App = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [mode, setMode] = useState('light')
  return (
    <div className={`w-full overflow-hidden ${mode === 'light'? " bg-white text-black" : "bg-black text-white"}`}>
      <Routes>
        <Route path='/' element={<Home watchlist={watchlist} setWatchlist={setWatchlist} mode={mode} setMode={setMode} />} />
        <Route path='/MovieDetail' element={<MovieDetail />} />
        <Route path='/Watchlist' element={<Watchlist watchlist={watchlist} setWatchlist={setWatchlist} />} />
      </Routes>
    </div>
  )
}
export default App
