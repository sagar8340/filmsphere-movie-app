import React from 'react'
import { Link } from 'react-router-dom'
import Togglebtn from './Togglebtn'

export const Sidebar = ({ mode, setMode, sidebar }) => {
    return (
        <div className={`
        flex flex-col fixed top-0 gap-10 items-center p-7 font-bold text-[16px]
        left-0 h-screen w-52 z-40 bg-[#b08972]
        transition-transform duration-300
        ${sidebar ? 'translate-x-0' : '-translate-x-full'}
      `}>
            <Link to="/">Home</Link>
            <Link to="/watchlist">Watchlist</Link>
            <Togglebtn mode={mode} setMode={setMode} />
        </div>
    )
}
export default Sidebar
